import React from 'react'
import ToggleThemeButton from './ToggleThemeButton'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight:['400'],
 
  
})
const Header = () => {
  return (
    <header className='flex items-center justify-between mt-4'>
      <div className={`${pacifico.className} text-[24px] my-3 h-[82px] flex items-center`}>
         <span>Folashade <span className='bg-text'>Omoloja</span></span> 
      </div>
    <ToggleThemeButton/>
    </header>
  )
}

export default Header