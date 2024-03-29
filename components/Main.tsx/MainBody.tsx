import React from 'react'
import SideBar from './SideNav/SideBar'
import PortfolioDetails from './PortFolioDetails/PortfolioDetails'

const MainBody = () => {
  return (
    <main className='grid grid-cols-12 gap-5 mt-11'>
       <div className=' lg:col-span-4 col-span-12'>
          <SideBar/>
       </div>
       <div className=' col-span-12 lg:col-span-8  rounded-[20px] max-lg:mt-8  max-lg:mb-20 ' >
             <PortfolioDetails/>

       </div>
    </main>
  )
}

export default MainBody