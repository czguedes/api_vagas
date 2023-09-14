
import { UserDTO } from "../shared/types";
import { User } from "./Usuario.model";

export class AdminUser extends User {

    constructor(dados: UserDTO) {
        super(dados)
        super.usertype = "admin"
    }

    cadastrarRecrutador() { }
}


