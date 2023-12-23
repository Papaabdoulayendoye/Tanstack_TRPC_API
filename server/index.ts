import express from 'express'
import cors from 'cors'
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { AppRouter } from './router';

const app = express()

app.use(cors({origin : 'http://localhost:5173'}))

app.use('/trpc', createExpressMiddleware({
    router : AppRouter
}))

app.listen(3000, () => {
    console.log("SERVER IS RUNNING");
})