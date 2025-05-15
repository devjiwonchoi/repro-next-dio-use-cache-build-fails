import { unstable_cacheLife as cacheLife } from 'next/cache'
import { Suspense } from 'react'

async function doSomething(slug: string) {
  'use cache'
  console.log('doSomething', slug)
  cacheLife('hours')
  return slug
}

async function Handle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await doSomething(slug)
  return <p>Hello {result}</p>
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Handle params={params} />
    </Suspense>
  )
}
