import { DataSource } from "typeorm";
import { serverEnv } from "../../app/envs/server.env";

const rootDir = serverEnv.env === 'production' ? 'dist' : 'src'

export const dataSource = new DataSource({
    type: 'postgres',
    url: serverEnv.dbUrl,
    schema: 'public',
    entities: [rootDir + '/app/shared/entities/**/*'],
    migrations: [rootDir + '/app/shared/migrations/**/*'],
    logging: false,
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
});