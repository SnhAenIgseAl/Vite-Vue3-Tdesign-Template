import { fetchData } from '../utils/request'

export const login = async ({
    username,
    password
}: {
    username: string
    password: string
}) => {
    const { data, error } = await fetchData('/api/login', {
        method: 'GET',
        headers: {
            'foo': 'bar',
        },
        query: {
            't': new Date().getTime().toString(),
        },
        body: {
            username,
            password
        }
    })
    return data.value
}

const userApi = {
    login
}

export default userApi