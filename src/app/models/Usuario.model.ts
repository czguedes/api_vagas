import { randomUUID } from "crypto";
import { UserDTO, UserType } from "../shared/types";

export abstract class User {
    private _idUser: string
    private _name: string
    private _username: string
    private _password: string
    private _userType!: UserType

    constructor(dados: UserDTO) {
        this._password = dados.password
        this._username = dados.username
        this._name = dados.name
        this._idUser = randomUUID()
    }

    public get id(): string {
        return this._idUser
    }

    public get name(): string {
        return this._name
    }

    public get username(): string {
        return this._username
    }

    public get usertype(): UserType {
        return this._userType
    }


    protected set usertype(type: UserType) {
        this._userType = type;
    }


    toJSON() {
        return {
            id: this._idUser,
            name: this._name,
            username: this._username,
            usertype: this._userType
        }
    }

    entityToModel() { }

    listarUsuarios() { }

}