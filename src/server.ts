import mongoose from "mongoose";
import app from "./app";
import {Server} from 'http'
import { config } from "./app/config";

let server: Server;

const main = async () => {
    try {
        await mongoose.connect(config?.dbUrl as string);
        app.listen(config?.port, () => {
            console.log(`server is running successfully at port ${config?.port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

main();