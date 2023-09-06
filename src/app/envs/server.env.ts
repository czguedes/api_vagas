import 'dotenv/config'

export const serverEnv = {
    port: process.env.PORT as string,
    dbUrl: process.env.DB_URL as string,
    env: process.env.NODE_ENV as string
}