import { mount, StartClient } from 'solid-start/entry-client'

import { trpc, client, queryClient } from '~/lib/trpc-client'
mount(
  () => (
    <trpc.Provider client={client} queryClient={queryClient}>
      <StartClient />
    </trpc.Provider>
  ),
  document
)
