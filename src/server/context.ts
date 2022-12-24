import type { inferAsyncReturnType } from '@trpc/server'
import type { createSolidAPIHandlerContext } from 'solid-start-trpc'

import { prisma } from '~/lib/prisma-client'

export const createContextInner = async (
  opts: createSolidAPIHandlerContext
) => {
  return {
    ...opts,
    prisma,
  }
}

export const createContext = async (opts: createSolidAPIHandlerContext) => {
  return await createContextInner(opts)
}

export type IContext = inferAsyncReturnType<typeof createContext>
