import { createSlice } from '@reduxjs/toolkit'
import { UserState, Permission } from '../../../types'

const initialState: UserState = {
    isLogged: false,
    accessToken: '',
    permission: Permission.nothing,
    id: undefined,
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        signIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                permission: Permission[action.payload.permission],
                id: action.payload.user.id,
                nome: action.payload.user.nome,
                email: action.payload.user.email,
                apartamento: action.payload.user.apartamento,
                foto: action.payload.user.foto
            })
        },
        //SignOut
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const {signIn, signOut} = usersSlice.actions

export default usersSlice.reducer