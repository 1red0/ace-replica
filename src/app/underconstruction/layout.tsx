import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pagina Goala',
  description: '',
}

export default function UnderConstructionLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (

    <div className={inter.className}>{children}</div>
    
  )
}
