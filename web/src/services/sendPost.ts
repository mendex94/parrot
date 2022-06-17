import { api } from './baseUrl'
import { Posts } from '../types'

export const sendPost = async (post: Omit<Posts, 'id'>) => {
    try {
        const response = await api.post("/posts", post)
        return response.data
    } catch (error: any) {
        alert(error.response.data)
    }
}