import { initTRPC } from "@trpc/server";
export const t = initTRPC.create()
export const publicProcedure = t.procedure

const middleware = t.middleware 

const isAuth = middleware((opts) => {
    const { ctx, next } = opts
    return next({
        ctx : {
            user : "Papa Abdoulaye Pipo Ndoye"
        }
    })
})

export const PrivateProcedure = t.procedure.use(isAuth)