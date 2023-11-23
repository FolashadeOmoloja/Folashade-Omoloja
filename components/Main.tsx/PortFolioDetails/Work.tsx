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
    <section>
            <div className='flex gap-5 mt-5 bg-[#F2F5F9] rounded-[20px] p-8' >
                <span>
                  All
                </span>
                <span>
                  Next js
                </span>
                <span>
                  React Js
                </span>
                <span>
                  Vanilla Javascript
                </span>
                <span>
                  Design
                </span>
            </div>
        </section>


    
</section>
  );
};


export default Work