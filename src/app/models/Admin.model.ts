import { UserDTO } from "../shared";
import { User } from "./Usuario.model";

export class AdminUser extends User {

    constructor(dados: UserDTO) {
        super(dados)
        super.usertype = "admin"
    }

    cadastrarRecrutador() { }
}


