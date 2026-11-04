import { Button } from "@/components/button"
import { Card } from "@/components/card"
import { Section } from "@/components/section"
import { listIssues } from "@/http/list-issues"
import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"

type HomeProps = {
  searchParams?: Promise<{ q?: string }>
}

export async function BoardContent({ searchParams }: HomeProps) {
  const params = await searchParams

  console.log(params?.q)
  const issues = await listIssues({ search: params?.q })

  return (
    <>
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>

          <Section.IssueCount>{issues.backlog.length}</Section.IssueCount>
        </Section.Header>

        {/* Content */}
        <Section.Content>
          {issues.backlog.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.backlog.map((issue) => (
              <Card.Root href={'/issue/' + issue.issueNumber} key={issue.id}>
                <Card.Header>
                  <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">6</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Todo
          </Section.Title>

          <Section.IssueCount>{issues.todo.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.todo.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.todo.map((issue) => (
              <Card.Root href={'/issue/' + issue.issueNumber} key={issue.id}>
                <Card.Header>
                  <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">6</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            In Progress
          </Section.Title>

          <Section.IssueCount>{issues.in_progress.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.in_progress.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.in_progress.map((issue) => (
              <Card.Root href={'/issue/' + issue.issueNumber} key={issue.id}>
                <Card.Header>
                  <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">6</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Done
          </Section.Title>

          <Section.IssueCount>{issues.done.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.done.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.done.map((issue) => (
              <Card.Root href={'/issue/' + issue.issueNumber} key={issue.id}>
                <Card.Header>
                  <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">6</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>
    </>

  )
}
