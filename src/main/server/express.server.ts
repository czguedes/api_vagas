import { Request, Response } from "express"
import { serverEnv } from "../../app/envs/server.env"
import appServer from "../config/express.config"
import { appRoutes } from "./app.routes"

export default function runServer() {
    const app = appServer()

    app.listen(serverEnv.port, () => {
        console.log(`Server is running at port ${serverEnv.port}`)
    })

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({
            status: true,
            message: 'API is online.'
        })
    })
    appRoutes(app)
}