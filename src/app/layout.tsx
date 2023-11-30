import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/footer.component'
import Navbar from '@/components/navbar/navbar.component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ACE Replica',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen bg-gray-100">
        <Navbar />
        <main>
          <div className={inter.className}>{children}</div>
        </main>
       <Footer />
        </div>
      </body>
    </html>
  )
}
