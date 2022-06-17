import React from 'react'
import BackgroundImage from '../../assets/cover.png'
import Logo from '../../assets/logo.png'
import {useFormik} from 'formik'
import { login } from '../../services/userLogin'
import { api } from '../../services/baseUrl'
import { signIn } from '../../store/modules/user'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

interface LoginFormProps {
    setSignIn: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({setSignIn}) => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const formik = useFormik({
            initialValues: {
                email: '',
                password:''
            },
            onSubmit: async values => {
                    const { token, logUser } = await login(values)
                    console.log(logUser)
                    dispatch(signIn({
                        token, 
                        logUser
                    }))
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;
                    navigate('/feed')               
            }
        })

        return (
        <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-black/60'>
        <img src={BackgroundImage} alt='Parrot background image' className='-z-50 object-cover w-screen h-screen'/>
        <form onSubmit={formik.handleSubmit} className='absolute space-y-8 rounded bg-white py-5 px-6 md:mt-0 max-w-md md:px-14 flex flex-col w-full items-center'>
            <img src={Logo} alt='Parrot logo' className='w-[171px] h-[161px]'/>
            <h1 className='text-center font-bold text-[24px] text-[#000000] '>LOGIN</h1>
            <label>
                <input id='email' type="email" placeholder='email' className='input' value={formik.values.email} onChange={formik.handleChange} />
            </label>
            <label>
                <input id='password' type="password" placeholder='senha' className='input' value={formik.values.password} onChange={formik.handleChange} />
            </label>
            <button type="submit" className='w-[335px] h-[39px] bg-[#76BB4C] rounded-lg font-bold text-[18px]'>Entrar</button>
            <div className='text-[#909090]'>
                Quer criar uma conta? { }
                <button className='hover:underline' onClick={setSignIn}>Se cadastra aqui :)</button>
            </div>
        </form>
        </div> )    
}

export default LoginForm