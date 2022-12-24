import { exampleRouter } from './routers/example'
import { t } from './utils'

export const appRouter = t.mergeRouters(exampleRouter)

export type AppRouter = typeof appRouter
