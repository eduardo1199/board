import { Suspense } from "react"
import { BoardContent } from "./templates/board-content"
import { listIssues } from "@/http/list-issues"

type HomeProps = {
  searchParams?: Promise<{ q?: string }>
}

export const generateMetadata = () => {
  return {
    title: 'Board'
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams
  
  const issues = await listIssues({ search: params?.q })

  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Suspense>
        <BoardContent issues={issues} />
      </Suspense>
    </main>
  )
}