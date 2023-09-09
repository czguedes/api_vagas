import { UserDTO } from "../shared"
import { User } from "./Usuario.model"

export class RecrutadorUser extends User {
    private nomeEmpresa: string

    constructor(dados: UserDTO, empresa: string) {
        super(dados)
        super.usertype = "recrutador"
        this.nomeEmpresa = empresa
    }

    cadastrarVaga() { }
}