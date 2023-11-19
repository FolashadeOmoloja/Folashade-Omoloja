

interface Iprop {
      fontFamily?: any;
     propUseState?: (value: boolean) => void;  
 }

const Resume:React.FC<Iprop> = ({fontFamily}) => {
  return (
   <section className="px-[62px] max-lg:px-[20px]">
        <div className={`${fontFamily} flex items-center gap-8 mb-4  max-sm:flex-col max-sm:items-start max-sm:gap-1`}>
            <h2 className='text-[40px] tracking-[2.5%] leading-[40px] font-semibold max-sm:text-[32px] uppercase' >Resume</h2>
            <div className='bg-btngradient w-[250px] h-[2px] rounded-[20px] max-sm:w-[160px]'></div>
        </div>

        
   </section>
  )
}

export default Resume