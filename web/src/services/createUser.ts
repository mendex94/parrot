import { api } from './baseUrl';
import {User} from '../types/index'


export const createUser = async (user: Omit<User, "id">) => {
    try{
        const response = await api.post("/users", user)
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}