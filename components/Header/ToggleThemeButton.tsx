'use client'

import { useState } from "react"

const ToggleThemeButton = () => {
    const [suntheme, setSunTheme ] = useState(false)
    const changeTheme = () =>{
           setSunTheme(!suntheme)
    }

    console.log(suntheme)
  return (
   <button className='w-14 h-14 flex items-center justify-center bg-[#ffdbb086] rounded-full relative'
   onClick={changeTheme}
   >
         {/* <div className='w-6 h-6 '>
            <img src="moon.png" alt="" className='w-full h-full '/>
         </div> */}
        <div className={`w-6 h-6  ${suntheme?'changeThemeBtn':''}`}>
            <img src="sun.png" alt="" className='w-full h-full '/>
         </div>
   
   </button>
  )
}

export default ToggleThemeButton