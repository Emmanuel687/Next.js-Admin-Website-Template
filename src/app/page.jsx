import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/client')
  // The following return is technically not needed due to the redirect,
  // but it's good practice to always return something from a component
  return null
}