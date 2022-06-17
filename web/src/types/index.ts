export interface User extends SignIn {
    id: number,
    password: string,
    apto: string,
    nome: string
}

export interface SignIn {
    email: string,
    password: string
}

export enum Permission {
    'nothing',
    'user',
    'admin'
}

export interface UserState {
    isLogged: boolean,
    token: string,
    id?: number | undefined,
    nome?: string,
    email?: string,
    apto?: string,
}

export interface Posts {
    content: string,
    user_id: number | undefined,
}