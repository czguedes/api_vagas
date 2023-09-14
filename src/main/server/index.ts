import 'reflect-metadata';
import DatabaseConnection from "../database/database.connection";
import { RedisConnection } from '../database/redis.connection';
import runServer from "./express.server";

Promise.all([DatabaseConnection.connect(), RedisConnection.connect()])
    .then(runServer)
    .catch((error) => console.log(error.toString()))