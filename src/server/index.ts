import { initTRPC } from '@trpc/server'
import { z } from 'zod'
import superjson from 'superjson'

const t = initTRPC.create({ transformer: superjson })

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => `Hello ${input?.name || 'World'}!`),
})

export type AppRouter = typeof appRouter
