import type { Metadata } from 'next'
import { Pacifico, Poppins, Raleway } from 'next/font/google'
import './globals.css'
import ThemeProvider from './provider'



const raleway = Raleway({ subsets: ['latin'] })
const pacifico = Pacifico({
  subsets: ['latin'],
  weight:['400'],
  variable: '--font-pacifico'
  
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
      <body className={`${raleway.className} `}>
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
           {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
