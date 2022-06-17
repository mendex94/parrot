import Logo from '../../assets/parrot-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/modules/user'
import {useNavigate} from 'react-router-dom'
import { RootStore } from '../../store'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store: RootStore)=> store.usersSlice)
  const handleLogout = () => {
    dispatch(signOut())
    navigate('/')
  }
  return (
    <div className='flex flex-row items-center justify-between px-11 py-4 shadow-lg'>
        <img src={Logo} alt='Parrot logo' className=''/>
        <div className='flex flex-row items-center justify-center'>
            <h1 className='text-[#76BB4C] font-bold text-[1rem]'>Olá, {user.nome} |</h1>
            <button onClick={handleLogout} className='text-[16px] text-[#6033AA] mx-2'>sair</button>
        </div>
    </div>
  )
}
