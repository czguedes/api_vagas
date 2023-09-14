import { RecrutadorUser } from "../../models"

type UserType = 'admin' | 'recrutador' | 'candidato'

type UserDTO = {
    name: string
    password: string,
    username: string
}

type VagaDTO = {
    descricao: string,
    nomeEmpresa: string,
    dataLimite: Date,
    recrutador: RecrutadorUser,
    numCandidatos?: number
}

export { UserDTO, UserType, VagaDTO }

