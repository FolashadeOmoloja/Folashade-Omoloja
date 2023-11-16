import React from 'react'
import Image from 'next/image'
import SideBarDetails from './SideBarDetails'

const SideBar = () => {
  return (
    <section className=''>
        <div className='relative z-10 w-[150px] h-[150px] flex justify-center items-center mx-auto  rounded-full overflow-hidden bg-[#FF9C1A]'>
        <Image
        src="/shades.png"
        alt="avatar"
        height={150}
        width={150}
        layout="intrinsic"
        quality="100"
      />
        </div>
         <SideBarDetails/>
    </section>
  )
}

export default SideBar