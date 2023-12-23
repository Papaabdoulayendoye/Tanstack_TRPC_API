import {publicProcedure, t} from '../trpc'
import z from 'zod'
export const AppRouter = t.router({
    Hello : publicProcedure.query(() => {
        return "Hello,World!"
    }),
    getUser : publicProcedure
        .input(z.object({name : z.string(), password : z.string().min(4,"must contain more than 4 caractere!")}))
        .mutation(({input}) => {
            return input
        })
})



export type AppRouterType = typeof AppRouter