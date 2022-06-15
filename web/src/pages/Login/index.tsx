import React from 'react'
import { useState } from 'react'
import Cadastro from '../../components/CadastroForm'
import LoginForm from '../../components/LoginForm'

const Login: React.FC = () => {
    const [signIn, isSignIn] = useState(false)
    function handleRestartLogin() {
        isSignIn(false)
    }
    function handleStartSignIn() {
        isSignIn(true)
    }

    if (signIn === false) {
        return (
            <LoginForm setSignIn={handleStartSignIn} />
        )
    } else {
        return (
            <Cadastro reset={handleRestartLogin} />
        )
    }

}

export default Login