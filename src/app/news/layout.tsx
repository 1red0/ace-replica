import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Știri',
  description: '',
}

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

    <div className={inter.className}>{children}</div>
    
  )
}
