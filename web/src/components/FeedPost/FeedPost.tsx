import Avatar from '../../assets/avatar_post.png'

export default function FeedPost() {
  return (
    <div className='mx-auto max-w-4xl py-11 border-x-2 border-b-2 border-[#C5C5C5] px-8 flex flex-row w-[80vw] md:w-[60vw]'>
                <img src={Avatar} alt="Avatar" className='w-[70px] h-[70px]'/>
                <div className='px-10'>
                    <p className='text-[#76BB4C]'>Vinicius - apê 42</p>
                    <p className='text-[#909090]'>10/06/2022</p>
                    <p>Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
                </div>
            </div>
  )
}
