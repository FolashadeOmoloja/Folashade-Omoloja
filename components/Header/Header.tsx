import React from 'react'
import ToggleThemeButton from './ToggleThemeButton'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight:['400'],
 
  
})
const Header = () => {
  return (
    <header className='flex items-center justify-between my-4'>
      <div className={`${pacifico.className} text-[24px] max-xxsm:text-[20px] my-3 h-[70px] flex items-center`}>
         <span>Folashade <span className='bg-text'>Omoloja</span></span> 
      </div>
    <ToggleThemeButton/>
    </header>
  )
}

export default Header