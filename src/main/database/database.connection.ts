import { DataSource } from 'typeorm'
import { dataSource } from '../config/typeorm.config'

export default class DatabaseConnection {
    private static _connection: DataSource


    public static get connection(): DataSource {

        if (!this._connection) {
            throw new Error('Connection with database is lost.')
        }

        return this._connection
    }

    public static async connect() {
        if (!this._connection?.isInitialized) {
            this._connection = await dataSource.initialize()
        }

        console.log('Connection with database has been made.')
    }

}