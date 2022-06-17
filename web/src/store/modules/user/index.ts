import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../../types'

const initialState: UserState = {
    isLogged: false,
    token: ''
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        signIn(state, action){
            Object.assign(state, {
                isLogged: true,
                token: action.payload.token,
                nome: action.payload.logUser.nome,
                email: action.payload.logUser.email,
                apto: action.payload.logUser.apto,
                id: action.payload.logUser.id
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