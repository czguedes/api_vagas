type UserType = 'admin' | 'recrutador' | 'candidato' | undefined

type UserDTO = {
    name: string
    password: string,
    username: string
}

export { UserDTO, UserType }

