import { z } from 'zod'
import { procedure, router } from '../utils'

export const exampleRouter = router({
  hello: procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return `Hello ${input?.name || 'World'}`
    }),
})
