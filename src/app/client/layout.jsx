'use client'
import Header from "@/components/client/layout/Header"
import Footer from "@/components/client/layout/Footer"

export default function ClientLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}