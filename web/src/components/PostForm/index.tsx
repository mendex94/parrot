import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { useFormik } from 'formik'
import { sendPost } from '../../services/sendPost'
import { getPosts } from '../../services/getPosts'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../assets/avatar_post.png'

interface PostFormProps {
    setPosts: any
}

export default function PostForm({setPosts}: PostFormProps) {
    const user = useSelector((store: RootStore)=> store.usersSlice)
    const navigate = useNavigate()
    const handleClickProfile = () => {
        navigate('/profile')
    }
    const formik = useFormik({
        
        initialValues: {
            content: '',
            user_id: user.id
        },
        onSubmit: async values => {
            const post = await sendPost(values)
            const posts = await getPosts()
            setPosts(posts)
            formik.resetForm()
        }
    })
    return (
            <div className='mx-auto max-w-4xl py-11 border-x-2 border-b-2 border-[#C5C5C5] px-8 flex flex-row h-[183px] justify-between w-[80vw] md:w-[60vw]'>
                <div className='flex flex-col'>
                    <img src={Avatar} alt="avatar de perfil do usuário" className='rounded-full w-[90x] h-[90px]'/>
                    <button onClick={handleClickProfile}>ver meu perfil</button>
                </div>
                
                <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                    <label>
                        <textarea id='content' className='w-[38vw] h-[70px] rounded-md border border-[#8BC34A] resize-none' value={formik.values.content} onChange={formik.handleChange}/>
                    </label>
                    <button className='bg-[#6033AA] rounded-lg w-[160px] text-white place-self-end' type='submit'>publicar</button>
                </form>
            </div>
    )
}
