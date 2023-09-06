import { Express } from 'express'
import { usuariosRoutes } from "../../app/features/usuarios/usuarios.routes"

export const appRoutes = (app: Express) => {


    app.use('/usuarios', usuariosRoutes)
}