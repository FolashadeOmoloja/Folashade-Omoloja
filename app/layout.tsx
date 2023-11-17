import type { Metadata } from 'next'
import { Pacifico, Poppins, Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'


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
      <body className={`${raleway.className} px-[100px] bg-[#F2F5F9] max-xlg:px-[20px] max-lg:px-[50px] max-sm:px-[20px]`}>
           <Header/>
           {children}
        </body>
    </html>
  )
}
