import {useState} from 'react'

const items = [
    'All', 'NextJs', 'ReactJs', 'JavaScript'
]

interface Iprop {
    fontFamily?: any;
    allArr?:{ title: string; image: string; githubLink: string; liveDemoLink: string; description: string; filterIdx: number; }[];
    reactArr?:{ title: string; image: string; githubLink: string; liveDemoLink: string; description: string; filterIdx: number; }[];
    nextArr?:{ title: string; image: string; githubLink: string; liveDemoLink: string; description: string; filterIdx: number; }[];
    javascriptArr?:{ title: string; image: string; githubLink: string; liveDemoLink: string; description: string; filterIdx: number; }[];
    propUseState?: (value: { title: string; image: string; githubLink: string; liveDemoLink: string; description: string; filterIdx: number; }[]) => void;  
  }
const WorkFilter:React.FC<Iprop> = ({fontFamily, propUseState,allArr,reactArr,nextArr,javascriptArr}) => {
    const [index, setIndex] = useState(0)
    
    const handleClick= (idx:number) =>{
        setIndex(idx)
        if(propUseState){
          if(idx===0){
             allArr?propUseState(allArr):null
          } else if(idx===1){
            nextArr?propUseState(nextArr):null
         } else if(idx===2){
          reactArr?propUseState(reactArr):null
         } else if(idx===3){
        javascriptArr?propUseState(javascriptArr):null
        }
        }

    } 
 
  return (
    <section className='w-full flex justify-center'>
    <ul className='flex gap-8 mt-5 bg-[#F2F5F9] rounded-[50px] px-8 py-3 w-[450px] justify-between max-sm:flex-col max-sm:gap-0 div-center max-sm:rounded-[20px]' >

             {
                  items.map((item,idx)=>{
                    return (
                        <li className={`filter-span ${fontFamily} ${idx === index?'filter-active': ''}`} key={idx} onClick={()=>handleClick(idx)}>
                                 {
                                    item
                                 }
                        </li>
                    )
                  })
             }
    </ul>
</section>
  )
}

export default WorkFilter