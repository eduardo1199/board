/* eslint-disable @next/next/no-img-element */
'use client'

import { authClient } from "@/lib/auth-client"
import { LoaderIcon, LogInIcon } from "lucide-react"

export function SignInButton() {
  const { data: session, isPending } = authClient.useSession()

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' })
  }

  async function handleSignOut() {
    await authClient.signOut()
  }

  if (isPending) {
    return (
      <div className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center">
        <LoaderIcon className="size-3.5 text-navy-200 animate-spin" />
      </div>
    )
  }

  if (session?.user) {
    return (
      <button
        type="button"
        className="size-8 rounded-full overflow-hidden cursor-pointer"
        onClick={handleSignOut}
      >
        <img src={session.user.image ?? ''} width={20} height={20} alt={session.user.name} className="size-8 rounded-full" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150 cursor-pointer"
      onClick={handleSignIn}
    >
      <LogInIcon className="size-3.5 text-navy-200" />
    </button>
  )
}