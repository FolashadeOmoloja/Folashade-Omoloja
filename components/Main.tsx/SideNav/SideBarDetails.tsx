import { FiDownload } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";

const socialIcons = [
    {
        icon:'portfolio-icon.png',
        href:'https://folashade-omoloja.netlify.app/'
    },
    {
        icon:'linkedin.svg',
        href:'https://www.linkedin.com/in/folashade-omoloja/'
    },
    {
        icon:'gmail.png',
        href:'mailto: omolojashade@gmail.com'
    },
    {
        icon:'github.svg',
        href:'https://github.com/FolashadeOmoloja'
    }
]

const contactInfo = [

    {
        src: 'Location.svg',
        title: 'Address',
        link: 'Lagos, Nigeria'
    },
    {
        src: 'Email.svg',
        title: 'Email',
        link: 'omolojashade@gmail.com'
    },
]
// for the text, such as #d3d3d3, #a9a9a9, or #808080
const SideBarDetails = () => {
  return (
    <section className='h-full w-full bg-white dark:bg-[#221d27]  px-6 max-xxsm:px-4 pt-[90px] rounded-[20px]  text-center pb-[60px] relative top-[-75px]'>
        <h1 className='font-bold text-[24px] '>Folashade Omoloja</h1>
        <span className='mt-6 font-semibold text-[#0b090996] dark:text-[#d3d3d3]'>Front End Developer</span>
        <section className='flex mt-7 gap-2 justify-center'>
             {
                socialIcons.map((item, idx)=>{
                    return (
                        <a href={item.href} target="_blank" key={idx}>
                        <div  className='w-[70px] h-[70px] max-xxsm:w-[55px] max-xxsm:h-[55px] bg-[#F2F7FC] div-center  rounded-lg dark:bg-[#c9c8c8]'>
                            <img src={item.icon} alt={item.icon} className='w-5' />
                       </div>
                       </a>
                    )
                })
             }
        </section>
        <section className='mt-6 bg-[#F2F5F9] dark:bg-[#3c2f41] rounded-[20px] py-[33px] max-xxsm:bg-transparent'>
            {
                contactInfo.map((item, idx)=>{
                    return(
                    <div key={idx} className='flex flex-col  items-center pl-9 max-xlg:pl-[10px] max-xxsm:pl-0'>
                        <div  className='flex gap-3 items-center h-[63px] w-full mb-[18px] text-left max-lg:justify-center max-sm:justify-start'>
                             <img src={item.src} alt="" />
                             <div className='flex flex-col max-xlg:text-[14px]'>
                                <span className='text-[#0b090996] dark:text-[#d3d3d3]'>{item.title}</span>
                                <span className='font-semibold'>{item.link}</span>
                             </div>
   
                        </div>
                        <div className='bg-[#E3E3E3] w-[250px] h-[1px] max-sm:w-full'></div>
                    </div>
                    )
                })
            }
          <div>
          <div className="buttons flex flex-col gap-5 items-center mt-8">
               <a href="#contact" className=" cta ">
               <MdPhoneInTalk />
                  Let's talk
                </a>
              <a href='FOLASHADE_OMOLOJA_resume.pdf' className=" cta " download>
                  <FiDownload />
                  <span>
                  Download Resume
                  </span>
               </a>
            </div>
          </div>
        </section>
    </section>
  )
}

export default SideBarDetails