import React from 'react'
import SideBar from './SideNav/SideBar'

const MainBody = () => {
  return (
    <main className='grid grid-cols-12 gap-5'>
       <div className='border-orange-600  border  col-span-4 h-[470px]'>
          <SideBar/>
       </div>
       <div className='border-orange-600  border  col-span-8 h-[470px]' ></div>
    </main>
  )
}

export default MainBody