import React from 'react'

const WorkFilter = () => {
  return (
    <section className='w-full flex justify-center'>
    <div className='flex gap-8 mt-5 bg-[#F2F5F9] rounded-[50px] px-8 py-3 w-[500px] justify-center max-sm:flex-col max-sm:gap-0 div-center ' >
        <span className='filter-span'>
          All
        </span>
        <span className='filter-span'>
          Next js
        </span>
        <span className='filter-span'>
          React Js
        </span>
        <span className='filter-span'>
          Javascript
        </span>
        <span className='filter-span'>
          Design
        </span>
    </div>
</section>
  )
}

export default WorkFilter