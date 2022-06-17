import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'
import Avatar from '../../assets/avatar_post.png'

export default function ProfileCard() {
    const user = useSelector((store: RootStore)=> store.usersSlice)
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/feed')
    }
    return (
        <div className='mx-auto max-w-4xl py-11 border-x-2 border-b-2 border-[#C5C5C5] px-8 flex flex-row justify-between h-[183px] w-[80vw] md:w-[60vw]'>
            <div className='flex' >
                <div className='flex flex-col'>
                <img src={Avatar} alt="Avatar" className='rounded-full w-[90x] h-[90px]'/>
                <button className='absolute' onClick={handleBack}><ArrowLeft className='hover:text-[#76BB4C]'/></button>
                </div>
                <div className='px-10'>
                    <h1 className='text-[#76BB4C]'>{user.nome}</h1>
                    <p>{user.apto}</p>
                    <p>{user.email}</p>
                </div>
            </div>
            <button className='bg-[#76BB4C] rounded-[30px] w-[85px] h-[28px] text-white'>editar</button>
        </div>
    )
}
