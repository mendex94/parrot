import React from 'react'
import BackgroundImage from '../../assets/cover.png'
import Logo from '../../assets/logo.png'
import { ArrowLeft } from 'phosphor-react'
import { useFormik } from 'formik'
import { createUser } from '../../services/createUser'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { signIn } from '../../store/modules/user'
import { api } from '../../services/baseUrl'

interface CadastroProps {
    reset: () => void;
}

const Cadastro: React.FC<CadastroProps> = ({ reset }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            nome:'',
            email: '',
            password: '',
            confirmPassword: '',
            apartamento: '',
            foto: ''
        },
        onSubmit: async values => {
            const {accessToken, user} = await createUser({...values, permission: 1})
            dispatch(signIn({accessToken, permission: user.permission, user}))
            //@ts-ignore
            api.defaults.headers["Authorization"] = `Bearer ${accessToken}`
            navigate('/feed')
        }
    })

    return (
        <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-black/60'>
            <img src={BackgroundImage} alt='Parrot background image' className='-z-50 object-cover w-full h-full' />
            <form onSubmit={formik.handleSubmit} className='absolute space-y-5 rounded bg-white py-7 mt-0 max-w-md flex flex-col w-full items-center'>
                <a className='cursor-pointer absolute top-20 left-5 text-[#000000] hover:text-[#76BB4C]' onClick={reset}>
                    <ArrowLeft weight='bold' className='w-5 h-5' />
                </a>
                <img src={Logo} alt='Parrot logo' className='w-[171px] h-[161px]' />
                <h1 className='text-center font-bold text-[24px] text-[#000000] '>CADASTRO</h1>
                <label>
                    <input id='nome' value={formik.values.nome} onChange={formik.handleChange} type="text" placeholder='nome' className='input' />
                </label>
                <label>
                    <input id='email' value={formik.values.email} onChange={formik.handleChange} type="email" placeholder='email' className='input' />
                </label>
                <label>
                    <input id='password' value={formik.values.password} onChange={formik.handleChange} type="password" placeholder='senha' className='input' />
                </label>
                <label>
                    <input id='confirmPassword' value={formik.values.password} onChange={formik.handleChange} type="password" placeholder='confirmar senha' className='input' />
                </label>
                <label>
                    <input id='apartamento' value={formik.values.apartamento} onChange={formik.handleChange} type="number" placeholder='unidade/apartamento' className='input' />
                </label>
                <label>
                    <input id='foto' value={formik.values.foto} onChange={formik.handleChange} type="text" placeholder='link da foto' className='input' />
                </label>
                <button type="submit" className='w-[335px] h-[39px] bg-[#76BB4C] rounded-lg font-bold text-[18px]'>Confirmar</button>
            </form>
        </div>
    )
}

export default Cadastro