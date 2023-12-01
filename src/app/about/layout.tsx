import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Despre noi',
  description: 'About us',
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

    <div className={inter.className}>{children}</div> 
    
  )
}
