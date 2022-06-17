import { Posts } from '../types'
import { api } from './baseUrl'

// export const getPosts = async ():Promise<Posts[]> => {
//     try {
//          return await api.get("/posts")
//     } catch (error) {
//         error as unknown as Posts
//     }
// }

export const getPosts = ():Promise<Posts[]> =>{
    return  api.get<Posts[]>('/posts').then(renponse=>renponse.data)
}