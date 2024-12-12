import dotenv from "dotenv";
import path from "path"

dotenv.config({path: path.join(process.cwd() + `/.env`)});

export const config = {
    nodeEnv: process.env.NODE_ENV,
    dbUrl: process.env.DB_URL,
    port: process.env.PORT
}