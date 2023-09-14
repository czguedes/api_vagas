import 'dotenv/config'

export const redisEnv = {
    port: Number(process.env.REDIS_PORT!),
    host: process.env.REDIS_HOST!,
    user: process.env.REDIS_USER!,
    password: process.env.REDIS_PASS!
}