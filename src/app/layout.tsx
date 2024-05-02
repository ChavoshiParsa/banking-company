import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/NavBar'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Banking Company',
  description: 'Developed by Parsa Chavoshi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={lexend.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
