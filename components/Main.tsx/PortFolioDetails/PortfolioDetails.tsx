"use client"
import { Poppins } from 'next/font/google'
import NavBar from './NavBar'

const poppins= Poppins({
    subsets: ['latin'],
    weight:['400'],
    variable: '--font-poppins'
    
  })

const PortfolioDetails = () => {
  return (
    <section className=''>
       <NavBar/>
       <section className='bg-white h-[687px] w-full mt-3 rounded-[20px] px-[62px] py-8'>
                  
       </section>
    </section>
  )
}

export default PortfolioDetails