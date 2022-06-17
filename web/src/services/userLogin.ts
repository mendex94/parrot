import { api } from './baseUrl'
import {SignIn} from '../types/index'


export const login = async (payload: SignIn) => {
    try {
        // const response = await api.post('/signin', payload)
        // return response.data
        const response = await api.post('/auth', payload)
        return response.data
    } catch (error: any) {
        alert(`Error: ${error.response.data}`)
    }
}