import { useFetch } from '../utils/request'

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

const userApi = {
    login
}

export default userApi