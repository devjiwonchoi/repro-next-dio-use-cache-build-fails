import { Suspense } from 'react'

async function doSomething(slug: string) {
  'use cache'
  console.log('doSomething', slug)
  return slug
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const result = await doSomething(slug)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>Hello {result}</p>
    </Suspense>
  )
}
