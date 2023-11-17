import React from 'react'
import SideBar from './SideNav/SideBar'

const MainBody = () => {
  return (
    <main className='grid grid-cols-12 gap-5 mt-11'>
       <div className=' col-span-4'>
          <SideBar/>
       </div>
       <div className='border-orange-600  border  col-span-8 h-[786px]' ></div>
    </main>
  )
}

export default MainBody