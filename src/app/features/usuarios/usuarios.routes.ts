import { Router } from "express"
import { controller } from "./controllers/controller.usuario"

export const usuariosRoutes = () => {
    const route = Router()

    route.post('/signup', controller.signUp)
    route.post('/login', controller.logIn)
}