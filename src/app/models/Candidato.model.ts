
import { UserDTO } from "../shared/types"
import { User } from "./Usuario.model"

export class CandidatoUser extends User {

    constructor(dados: UserDTO) {
        super(dados)
        super.usertype = "candidato"
    }

    submeterVaga() { }

}