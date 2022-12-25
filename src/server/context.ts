import type { inferAsyncReturnType } from '@trpc/server'
import type { createSolidAPIHandlerContext } from 'solid-start-trpc'

import { prisma } from '~/lib/prisma-client'
import { redisClient as redis } from '~/lib/redis-client'

export const createContextInner = async (
  opts: createSolidAPIHandlerContext
) => {
  return {
    ...opts,
    prisma,
    redis,
  }
}

export const createContext = async (opts: createSolidAPIHandlerContext) => {
  return await createContextInner(opts)
}

export type IContext = inferAsyncReturnType<typeof createContext>
