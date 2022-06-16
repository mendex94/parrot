import * as yup from 'yup'

export const userSchema = yup.object().shape({
    nome: yup.string().required('*'),
    email: yup.string().email('email inválido').required('*'),
    password: yup.string().min(6, 'minimo 6').required('*'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'senhas não conferem').required('*'),
    apartamento: yup.string().required('*'),
    foto: yup.string(),
})