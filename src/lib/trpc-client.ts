import { QueryClient } from '@tanstack/solid-query'
import type { AppRouter } from '~/server'
import { createTRPCSolid } from 'solid-trpc'
import { httpBatchLink } from '@trpc/client'
import superjson from 'superjson'

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCSolid<AppRouter>()
export const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
  transformer: superjson,
})
export const queryClient = new QueryClient()
