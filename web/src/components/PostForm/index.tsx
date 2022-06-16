import { useSelector } from 'react-redux'
import { RootStore } from '../../store'

export default function PostForm() {
    const user = useSelector((store: RootStore)=> store.usersSlice)
    return (
            <div className='mx-auto max-w-4xl py-11 border-x-2 border-b-2 border-[#C5C5C5] px-8 flex flex-row h-[183px] justify-between w-[80vw] md:w-[60vw]'>
                <img src={user.foto} alt="avatar de perfil do usuário" className='rounded-full'/>
                <form className='flex flex-col'>
                    <label>
                        <textarea className='w-[38vw] h-[70px] rounded-md border border-[#8BC34A] resize-none'/>
                    </label>
                    <button className='bg-[#6033AA] rounded-lg w-[160px] text-white place-self-end'>publicar</button>
                </form>
            </div>
    )
}
