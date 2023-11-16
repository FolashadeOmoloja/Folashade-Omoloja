import React from 'react'
import ToggleThemeButton from './ToggleThemeButton'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight:['400'],
 
  
})
const Header = () => {
  return (
    <header className='flex justify-between mt-4'>
      <div className={`${pacifico.className} text-lg my-3 h-[82px]`}>
         <span>Folashade <span className='text-[#2ecc71]'>Omoloja</span></span> 
      </div>
    <ToggleThemeButton/>
    </header>
  )
}

export default Header