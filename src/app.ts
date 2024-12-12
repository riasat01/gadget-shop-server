import express, { Application, Request, Response } from "express";
import cors from "cors"

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get(`/`, async (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: `server sends it's greetings`
    })
})

export default app;