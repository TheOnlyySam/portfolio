import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Salam Alta'ey | Portfolio",
  description: 'Building modern experiences with clean code and creative design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <Navbar />
        <ProgressBar/>
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
