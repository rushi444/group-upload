import { trpc } from '~/lib/trpc-client'

const Home = () => {
  const res = trpc.hello.useQuery(() => ({ name: 'Rushi' }))
  console.log({ res })
  return <div class="font-bold underline">{res?.data || ''}</div>
}

export default Home
