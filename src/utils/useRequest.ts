/**
 * fetch
 */
interface fetchCfg {
    options?: RequestInit
}

export const useFetch = (
    url: string,
    timeout: 5000 | number | undefined,
    fetchCfg?: fetchCfg
) => {
    return new Promise<any>((resolve, reject) => {

        const timeoutId = setTimeout(() => {
            reject(new Error("请求超时"));
        }, timeout);

        fetch(url, fetchCfg?.options)
            .then(res => {
                clearTimeout(timeoutId);
                res.json()
            })
            .then(res => {
                clearTimeout(timeoutId);
                resolve(res)
            })
            .catch(err => {
                clearTimeout(timeoutId);
                reject(err)
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