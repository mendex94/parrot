import Avatar from '../../assets/avatar_post.png'

export default function ProfileCard() {
    return (
        <div className='mx-auto max-w-4xl py-11 border-x-2 border-b-2 border-[#C5C5C5] px-8 flex flex-row justify-between h-[183px] w-[80vw] md:w-[60vw]'>
            <div className='flex' >
                <img src={Avatar} alt="Avatar" />
                <div className='px-10'>
                    <h1 className='text-[#76BB4C]'>Felipe Mendes</h1>
                    <p>apê 82</p>
                    <p>user@mail.com</p>
                </div>
            </div>
            <button className='bg-[#76BB4C] rounded-[30px] w-[85px] h-[28px] text-white'>editar</button>
        </div>
    )
}
