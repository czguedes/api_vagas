import { Request, Response } from "express"

import { httpHelper } from "../../../shared/tools"
import { bcrypt } from "../../../shared/tools/bcryptAdapter"

interface Usuario {
    username: string
    password: string
    type: 'admin' | 'recrutador' | 'candidato'
}

const users: Usuario[] = []

class UsuarioController {
    async signUp(req: Request, res: Response) {
        try {
            const { username, password } = req.body

            const hashSenha = await bcrypt.generateHash(password)

            const newUser: Usuario = {
                username,
                password: hashSenha,
                type: "candidato"
            }

            users.push(newUser)

            return httpHelper.success(res, newUser, 'Usuário cadastrado.', 201)
        } catch (error: any) {
            return httpHelper.badRequestError(res, error.toString())
        }
    }

    async logIn(req: Request, res: Response) {
        try {
            const { username, password } = req.body

            //testar credenciais

            //retornar se o login é válido ou não

        } catch (error: any) {
            return httpHelper.badRequestError(res, error.toString())
        }
    }
}

export const controller = new UsuarioController()