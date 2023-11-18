"use client"
import { Poppins } from 'next/font/google'
import NavBar from './NavBar'
import { useState } from 'react'
import About from './About'
import Resume from './Resume'
import Work from './Work'
import Contact from './Contact'

const poppins= Poppins({
    subsets: ['latin'],
    weight:['400'],
    variable: '--font-poppins'
    
  })

const PortfolioDetails = () => {
  const [display, setDisplay] = useState('Home')
  return (
    <section className=''>
       <NavBar propUseState={setDisplay}/>
       <section className='bg-white h-[687px] w-full mt-3 rounded-[20px]  py-8'>
             {
              display === 'Home'?(
                <About fontFamily={poppins.className}/>
              ): display === 'Resume'?(
              <Resume/>
              ): display === 'Work'?(
                <Work/>
              ):  display === 'Contact'?(
                <Contact/>
              ): null
             }     
       </section>
    </section>
  )
}

export default PortfolioDetails