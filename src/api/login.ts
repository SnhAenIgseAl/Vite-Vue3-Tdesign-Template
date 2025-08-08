import { useFetch } from '../utils/useRequest'

export const login = ({
    username,
    password
}: {
    username: string
    password: string
}) => {
    return new Promise((resolve, reject) => {
        useFetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            resolve(res)
        })
    })
}