import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { useFormik } from 'formik'
import { sendPost } from '../../services/sendPost'
import { getPosts } from '../../services/getPosts'

interface PostFormProps {
    setPosts: any
}

export default function PostForm({setPosts}: PostFormProps) {
    const user = useSelector((store: RootStore)=> store.usersSlice)
    const formik = useFormik({
        
        initialValues: {
            comentario: '',
            user_nome: user.nome,
            user_email: user.email,
            user_apto: user.apartamento,
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
                <img src={user.foto} alt="avatar de perfil do usuário" className='rounded-full'/>
                <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                    <label>
                        <textarea id='comentario' className='w-[38vw] h-[70px] rounded-md border border-[#8BC34A] resize-none' value={formik.values.comentario} onChange={formik.handleChange}/>
                    </label>
                    <button className='bg-[#6033AA] rounded-lg w-[160px] text-white place-self-end' type='submit'>publicar</button>
                </form>
            </div>
    )
}
