import React from 'react'
import WorkFilter from './WorkFilter';
''
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
      <WorkFilter fontFamily={fontFamily}/>
      <section>
          <div>

          </div>
      </section>


    
</section>
  );
};


export default Work