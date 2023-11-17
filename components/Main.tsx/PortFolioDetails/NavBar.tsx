"use client"
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

const NavBar = () => {
    const [active, setActive] = useState(-1)
    const [showNav, setShowNav] = useState (true)
    const handleClick = (idx:number) =>{
        setActive(idx)
    }

    const handleShowNav = () =>{
        setShowNav(!showNav)
    }

    console.log(active)
  return (
   <nav className="flex justify-end">

     {
        showNav? (
            <ul className=" h-[100px] w-[500px] max-md:w-full rounded-[20px] gap-[40px] max-md:gap-5 max-xsm:gap-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] div-center cursor-pointer">
            {
                navItem.map((item, idx)=>{
                    return(
                        <li key={idx} className={`bg-[#E1E8EF] w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] max-xsm:h-[50px] max-xsm:w-[50px] max-sm:rounded-[10px] max-xsm:rounded-[4px] rounded-[20px] flex-col gap-1 div-center nav-item ${idx === active?'nav-active': ''}`} 
                        onClick={() => handleClick(idx)}
                        >
                          <span className="text-[24px] text-[#1A1003] nav-icon max-md:text-lg max-xsm:text-base">{item.icon}</span>
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