'use client'

import { Input } from "@/components/input"
import { debounce, parseAsString, useQueryState } from "nuqs"

export function SearchInput() {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""))

  function handleSearchUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates:
        event.target.value.length !== 0 ? debounce(500) : undefined,
    })
  }

  return (
    <Input
      type="text"
      placeholder="Search for features..."
      className="w-67.5 pl-8"
      value={search}
      onChange={handleSearchUpdate}
    />
  )
}