import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

import type { IContext } from './context'

export const t = initTRPC.context<IContext>().create({ transformer: superjson })

export const router = t.router
export const procedure = t.procedure
