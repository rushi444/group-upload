import { z } from 'zod'
import cuid from 'cuid'

import { procedure, router } from '../utils'

export const pollsRouter = router({
  create: procedure
    .input(
      z.object({
        topic: z.string(),
        votesPerVoter: z.number().min(1).max(5),
        name: z.string(),
      })
    )
    .mutation(() => {
      const userId = cuid()
      const pollId = cuid()
      console.log({ userId, pollId })
      return 'Create'
    }),
  join: procedure
    .input(
      z.object({
        pollId: z.string(),
        name: z.string(),
      })
    )
    .mutation(() => {
      const userId = cuid()
      return 'Join'
    }),
  rejoin: procedure
    .input(
      z.object({
        pollId: z.string(),
        userId: z.string(),
        name: z.string(),
      })
    )
    .mutation(() => 'Rejoin'),
})
