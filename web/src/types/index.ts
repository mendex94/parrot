export interface User extends SignIn {
    id: number,
    password: string,
    apartamento: string,
    foto: string
    permission: Permission
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
    accessToken: string,
    permission: Permission,
    id?: number,
    nome?: string,
    email?: string,
    apartamento?: string,
    foto?: string,
}