import React from 'react'
import BackgroundImage from '../../assets/cover.png'
import Logo from '../../assets/logo.png'
import { ArrowLeft } from 'phosphor-react'

interface CadastroProps {
    reset: ()=>void;
}

const Cadastro: React.FC<CadastroProps> = ({reset}) => {
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-black/60'>
        <img src={BackgroundImage} alt='Parrot background image' className='-z-50 object-cover w-full h-full'/>
        <form className='absolute space-y-8 rounded bg-white md:py-10 md:mt-0 max-w-md md:px-14 flex flex-col w-full h-full items-center'>
            <a className='cursor-pointer absolute top-20 left-5 text-[#000000] hover:text-[#76BB4C]' onClick={reset}>
                <ArrowLeft weight='bold' className='w-5 h-5'/>
            </a>
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