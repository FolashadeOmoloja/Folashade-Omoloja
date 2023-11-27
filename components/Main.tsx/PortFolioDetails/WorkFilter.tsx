import {useState} from 'react'

const items = [
    'All', 'NextJs', 'ReactJs', 'JavaScript'
]

interface Iprop {
    fontFamily?: any;
    propUseState?: (value: { title: string; image: string; githubLink: string; liveDemoLink: string; description: string; filterIdx: number; }[]) => void;  
    handleFilter?: (param:number) => void;
  }
const WorkFilter:React.FC<Iprop> = ({fontFamily, propUseState, handleFilter}) => {
    const [index, setIndex] = useState(0)
    
    const handleClick= (idx:number) =>{
        setIndex(idx)
        if(propUseState && handleFilter){
                handleFilter(idx)
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