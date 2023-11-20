const experience = [
  {
    date:'',
    company:'',
    description:'',
  },
  {
    date:'',
    company:'',
    description:'',
  },
]

const education = [
  {
    date:'',
    company:'',
    description:'',
  },
  {
    date:'',
    company:'',
    description:'',
  },
]

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
        <section className="flex gap-[50px]">
           <section>
                  <h3 className="h3-header">Experience</h3>
                  <div className="qualific">
                    {
                        experience.map(()=>{
                          return(
                            <div className="w-[290px] h-[120px] bg-[#ed240a4b] rounded-[20px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">

                            </div>
                          )
                        })
                    }
                  </div>
           </section>
           <section>
             <h3 className="h3-header">Education</h3>
           </section>
        </section>

        
   </section>
  )
}

export default Resume