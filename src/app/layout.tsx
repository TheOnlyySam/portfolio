import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/app/globals.css'  // <- THIS IS IMPORTANT

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salam Al Taey | Portfolio',
  description: 'Building modern experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0A0A] text-white`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
