import { t } from './utils'
import { exampleRouter } from './routers/example'

export const appRouter = t.router({
    example: exampleRouter
})

export type AppRouter = typeof appRouter
