import React from 'react'
interface Iprop {
  fontFamily?: any;
}
const Work:React.FC<Iprop> = ({fontFamily}) => {
  return (
    <section className="px-[62px] max-xlg:px-[20px]">
    <div className={`${fontFamily} flex items-center gap-8 mb-4  max-md:flex-col max-md:items-start max-md:gap-1`}>
        <h2 className='header-title' >Portfolio</h2>
        <div className='header-line'></div>
    </div>
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
      <section>
          <div>
            
          </div>
      </section>


    
</section>
  );
};


export default Work