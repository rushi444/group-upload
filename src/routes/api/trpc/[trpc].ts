import { createSolidAPIHandler } from 'solid-start-trpc'
import { appRouter as router } from '~/server'
import { createContext } from '~/server/context'

const handler = createSolidAPIHandler({ router, createContext })

export const GET = handler
export const POST = handler
