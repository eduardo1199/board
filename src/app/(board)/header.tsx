import { Input } from "@/components/input"
import { SearchIcon } from "lucide-react"
import { Suspense } from "react"
import { SearchInput } from "./components/search-input/search-input"
import { SignInButton } from "./components/sign-in-button"

export function Header() {
  return (
    <header className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="font-semibold text-xl">Product Roadmap</h1>
        <p className="text-sm text-navy-100">
          Follow the development progress of our entire platform.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute size-4 text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />

          <Suspense
            fallback={
              <Input
                type="text"
                placeholder="Search for features..."
                className="w-67.5 pl-8"
              />
            }
          >
            <SearchInput />
          </Suspense>
        </div>

        <SignInButton />
      </div>
    </header>
  )
}