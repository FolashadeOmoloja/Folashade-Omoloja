import { RiHomeHeartLine } from "react-icons/ri";
import { MdOutlineLibraryBooks, MdWorkOutline } from "react-icons/md";
import { BsEmojiLaughingFill } from "react-icons/bs";
import Image from "next/image";
import { GrContact } from "react-icons/gr";
import { useState } from "react";
const navItem = [
    {  
        icon: <RiHomeHeartLine />,
        title: 'Home'
    },
    {  
        icon: <MdOutlineLibraryBooks />,
        title: 'Resume'
    },
    {  
        icon:<MdWorkOutline /> ,
        title: 'Work'
    },
    {
        icon: <GrContact />,
        title: 'Contact'

    }
]

interface Iprop {
    propUseState?: (value: string) => void;  
}

const NavBar:React.FC<Iprop> = ({propUseState}) => {
    const [active, setActive] = useState(0)
    const [showNav, setShowNav] = useState (true)
    const handleClick = (idx:number) =>{
        setActive(idx)
        if(propUseState){
            if (idx==0){
            propUseState('Home')
            } else if (idx==1){
            propUseState('Resume')   
            } else if (idx==2){
                propUseState('Work')
            } else if (idx==3){
                propUseState('Contact')
            }
        }
    }

    const handleShowNav = () =>{
        setShowNav(!showNav)
    }

   
  return (
   <nav className="flex justify-end">

     {
        showNav? (
            <ul className=" h-[100px] w-[500px] max-md:w-full rounded-[20px] gap-[40px] max-md:gap-5 max-xsm:gap-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-[#221d27] div-center cursor-pointer">
            {
                navItem.map((item, idx)=>{
                    return(
                        <li key={idx} className={`nav-class nav-item ${idx === active?'nav-active': ''}`} 
                        onClick={() => handleClick(idx)}
                        >
                          <span className="text-[24px] text-[#1A1003] dark:text-white nav-icon max-md:text-lg max-xsm:text-base">{item.icon}</span>
                          <span className="text-sm max-sm:text-xs">{item.title}</span>
                        </li>
                    )
                })
            }
        </ul>
        ): 
        (
            <ul className=" h-[100px] w-[500px] max-md:w-full rounded-[20px] gap-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] div-center cursor-pointer text-[24px] font-semibold bg-btngradient text-white max-sm:text-lg">
                     Click Me to Explore My Portfolio
                     <span className=""><BsEmojiLaughingFill /></span>
            </ul>
        )
     }
        <div 
        onClick={()=>handleShowNav()}
        >
          <Image src={"/bitmoji1.png"} alt={""} width={100} height={100} className="h-[100px w-[100px] cursor-pointer max-xxsm:hidden"/>   
           </div>
   </nav>
  )
}

export default NavBar