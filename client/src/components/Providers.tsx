import { useState,PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../../api/utils";
import { httpBatchLink } from "@trpc/client";

export const Providers = ( {children} : PropsWithChildren) => {
    const [queryCLient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links : [
            httpBatchLink({
                url : 'http://localhost:3000/trpc'
            })
        ]
    }))
    return (
        <trpc.Provider client={trpcClient} queryClient={queryCLient}>
            <QueryClientProvider client={queryCLient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}
