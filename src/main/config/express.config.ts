import cors from 'cors';
import 'dotenv';
import express from 'express';

export default function appServer() {
    const app = express()
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors())

    return app
}