import React from 'react'
import BackgroundImage from '../../assets/cover.png'
import Logo from '../../assets/logo.png'

const Cadastro: React.FC = () => {
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-black/60'>
        <img src={BackgroundImage} alt='Parrot background image' className='-z-50 object-cover w-full h-full'/>
        <form className='absolute space-y-8 rounded bg-white py-10 mt-0 max-w-md px-14 flex flex-col w-full items-center'>
            <img src={Logo} alt='Parrot logo' className='w-[171px] h-[161px]'/>
            <h1 className='text-center font-bold text-[24px] text-[#000000] '>CADASTRO</h1>
            <label>
                <input type="text" placeholder='nome' className='input'/>
            </label>
            <label>
                <input type="email" placeholder='email' className='input'/>
            </label>
            <label>
                <input type="password" placeholder='senha' className='input'/>
            </label>
            <label>
                <input type="password" placeholder='confirmar senha' className='input'/>
            </label>
            <label>
                <input type="text" placeholder='unidade/apartamento' className='input'/>
            </label>
            <label>
                <input type="text" placeholder='link da foto' className='input'/>
            </label>
            <button type="submit" className='w-[335px] h-[39px] bg-[#76BB4C] rounded-lg font-bold text-[18px]'>Confirmar</button>
        </form>
    </div>
  )
}

export default Cadastro