import { RiHomeHeartLine } from "react-icons/ri";
import { MdOutlineLibraryBooks, MdWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";
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
  return (
   <nav className="flex justify-end">
        <ul className="border  h-[100px] w-[500px] rounded-[20px] flex gap-[40px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            {
                navItem.map((item, idx)=>{
                    return(
                        <li key={idx} className="bg-[#E1E8EF] w-[80px] h-[80px] rounded-[20px] flex-col gap-1 div-center text-sm">
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </li>
                    )
                })
            }
        </ul>
   </nav>
  )
}

export default NavBar