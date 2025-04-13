import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}>
        <Background />
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
