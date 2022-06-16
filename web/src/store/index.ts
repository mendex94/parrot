import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './modules/user'

const store = configureStore({
    reducer: {
        usersSlice
    },
})

export type RootStore = ReturnType<typeof store.getState>

export default store