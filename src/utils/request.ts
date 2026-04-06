import { useUserStore } from '@/stores'

const getUserStore = async () => {
    return useUserStore()
}

interface ResponseError {
    status: number,
    statusText: string,
    data: any
}

interface OnRequestParamas {
    url: string,
    headers: Record<string, any>
}

interface RequestOption extends Omit<RequestInit, 'body'>{
    query?: Record<string, string>,
    body?: Record<string, any>,
    onRequest?: (params: OnRequestParamas) => void,
    onRequestError?: (err: any) => void,
    onResponse?: (res: Response) => void,
    onResponseError?: (err: ResponseError) => void
}

/**
 * fetch
 */
const useFetch = async (
    url: string,
    fetchOption?: RequestOption
) => {

    const data = ref<any>(null)
    const error = ref<any>(null)

    const queryStr = new URLSearchParams(fetchOption?.query || {}).toString()
    const fetchUrl = url + (queryStr ? '?' + queryStr : '')
    let _body = null

    if (fetchOption.method === 'POST') {
        _body = JSON.stringify(fetchOption?.body || {})
    }

    fetchOption.onRequest?.({
        url: fetchUrl,
        headers: fetchOption.headers
    })

    try {
        const fetchResponse = await fetch(
            fetchUrl,
            {
                ...fetchOption,
                body: _body,
            }
        )

        if (fetchResponse.ok) {
            const result = await fetchResponse.json().catch(() => fetchResponse.text())
            data.value = result
            fetchOption.onResponse?.(fetchResponse)
        } else {
            const errorResult = await fetchResponse.json().catch(() => fetchResponse.statusText)
            error.value = {
                status: fetchResponse.status,
                statusText: fetchResponse.statusText,
                data: errorResult
            }
            fetchOption.onResponseError?.(error.value)
        }
    } catch (err) {
        error.value = err
        fetchOption.onRequestError?.(err)
    }

    return {
        data,
        error
    }
}

export const fetchData = async (
    url: string,
    fetchOption?: RequestOption
) => {
    const { userToken } = await getUserStore()

    return await useFetch(
        url,
        {
            ...fetchOption,
            onRequest({ url, headers }) {
                console.log('onRequest', url, headers)
                if (userToken) {
                    headers['Authorization'] = `Bearer ${userToken}`
                }
            }
        }
    )
}