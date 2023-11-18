import React from 'react'


interface Iprop {
      fontFamily?: any;
     propUseState?: (value: boolean) => void;  
 }

const About:React.FC<Iprop> = ({fontFamily}) => {
  return (
   <section>
        <div className={`${fontFamily} flex items-center gap-8 mb-4`}>
            <h2 className='text-[40px] tracking-[2.5%] leading-[40px] font-semibold' >ABOUT ME</h2>
            <div className='bg-btngradient w-[250px] h-[2px] rounded-[20px]'></div>
        </div>
        <p className='font-[500] leading-[30px]'>Hello there! I'm Folashade, a Front end developer, solving problems one code at a time. I specialize in building Frontend applications, I take pride in my work and ensure I deliver the most accessible and most responsive application possible. It's not just about writing code; it's about building experiences that leave a lasting impression <img src="emoji.png" alt=""  className='w-5 h-5 inline-block'/>.</p>
        <section className='mt-[26px]'>
              <h3 className={`${fontFamily} font-semibold text-[32px] leading-[40px] tracking-[2.5%] mb-6`}>What I do </h3>
        </section>
        
   </section>
  )
}

export default About