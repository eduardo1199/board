import { IssueInteractionsResponseSchema } from "@/api/routes/schemas/issue-interactions"
import { clientEnv } from "@/env"

interface GetIssueInteractionsParams {
  issueIds: string[]
}

export async function getIssueInteractions({
  issueIds,
}: GetIssueInteractionsParams) {
  const url = new URL(`/api/issues/interactions`, clientEnv.NEXT_PUBLIC_API_URL)

  url.searchParams.set("issueIds", issueIds.join(","))

  const response = await fetch(url, {
    credentials: "include", // Include cookies in the request and HEART requests
  })
  const data = await response.json()

  return IssueInteractionsResponseSchema.parse(data)
}