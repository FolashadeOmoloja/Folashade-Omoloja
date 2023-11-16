import React from 'react'
import Image from 'next/image'

const SideBar = () => {
  return (
    <section>
        <div className='w-[150px] h-[150px] flex justify-center items-center mx-auto  rounded-[20px] overflow-hidden bg-[#FF9C1A]'>
        <Image
        src="/shades.png"
        alt="avatar"
        height={150}
        width={150}
        layout="intrinsic"
        quality="100"
      />
        </div>
    </section>
  )
}

export default SideBar