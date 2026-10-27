import { Suspense } from "react"
import { BoardContent } from "./templates/board-content"

type HomeProps = {
  searchParams?: Promise<{ q?: string }>
}

export const generateMetadata = () => {
  return {
    title: 'Board'
  }
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Suspense>
        <BoardContent searchParams={searchParams} />
      </Suspense>
    </main>
  )
}