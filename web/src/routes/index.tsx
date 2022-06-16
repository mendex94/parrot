import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'
import Feed from '../pages/Feed'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import RequireAuth from './RequiredAuth'

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path='/' element={<Login />} />
                <Route path='/feed' element={<RequireAuth><Feed/></RequireAuth>} />
                <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}