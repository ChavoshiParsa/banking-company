import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
