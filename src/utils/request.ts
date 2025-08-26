import { MessagePlugin } from 'tdesign-vue-next';
import { API_URL } from '@/config/request.config'
import { store } from '@/stores/index'
import { useUserStore } from '@/stores';

const userStore = useUserStore(store)

interface HttpError {
    [key: number]: string
}

// http错误码
const httpErrCode: HttpError = {
    400: '请求错误',
    401: '请登录再操作',
    403: '拒绝访问',
    404: '请求地址不存在',
    500: '服务器错误'
}

/**
 * fetch
 */
export const useFetch = (
    url: string,
    option?: RequestInit,
    timeout?: number,
) => {
    return new Promise<unknown>((resolve, reject) => {

        const timer = timeout || 5000

        // 请求超时
        const timeoutId = setTimeout(() => {
            reject(new Error("请求超时"));
        }, timer);

        // 有用户token就带上
        if (option.headers) {
            option.headers = {
                ...option.headers,
                'Authorization': 'Bearer ' + userStore.userToken,
            }
        }

        fetch(API_URL + url, option)
            .then(res => {
                console.log(res);
                
                if (res.ok) {
                    return res.json()
                } else {
                    const errCode = res.status
                    MessagePlugin.error(httpErrCode[errCode] || '未知错误')
                    reject(res.statusText)
                }
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                MessagePlugin.error('网络错误')
                reject(err)
            })
            .finally(() => {
                clearTimeout(timeoutId)
            })
    })
}



/**
 * axios
 */
import axios from 'axios'
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '../store/user'


// const {
//     token
// } = storeToRefs(useUserStore())

export const useAxios = axios.create({
    baseURL: '',
    timeout: 5000,
})

// 请求拦截
useAxios.interceptors.request.use(
    config => {
        // 有用户token就带上
        let userToken = localStorage.getItem('userToken') || ''
        if (userToken) {
            config.headers['Authorization'] = userToken
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截
useAxios.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        return Promise.reject(err)
    }
)