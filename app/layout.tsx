import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({
  subsets: ['latin'],
  weight:['400'],
  
})

export const metadata: Metadata = {
  title: 'Folashade Omoloja',
  description: `A front end developer portfolio showing all of Folashade's works and her experience`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
