import { FaReact } from "react-icons/fa";
import { MdAnimation, MdPhonelink } from "react-icons/md"
import { SiJavascript } from "react-icons/si";

const qualifications = [
  {heading:'REACT & NEXT.JS Developer',
   icon:<FaReact />,
   text: `As a front-end developer, my primary playground is React.js, and I am also well-versed in the intricacies of Next.js. I'm deeply passionate about creating dynamic and responsive user interfaces using the power of React's component-based architecture. With Next.js, I seamlessly extend these capabilities, leveraging server-side rendering and efficient routing to build performant web applications. From state management to reusable components, I excel in crafting seamless and efficient user experiences.`,
   color: 'text-[#3498db]'
   },
   {heading:'RESPONSIVE DESIGN ADVOCATE',
   icon:<MdPhonelink />,
   text: `In the ever-evolving landscape of web development, ensuring a seamless user experience across various devices is paramount. I am dedicated to crafting websites that not only look stunning on desktops but also adapt gracefully to tablets and smartphones. Through the implementation of responsive design principles, I guarantee that your web presence remains accessible and engaging across all platforms.`,
   color:'text-[#28d79f]'
 
   },
   {heading:'JAVASCRIPT Developer',
   icon:<SiJavascript />,
   text: `At the core of every interactive web experience is JavaScript, and I take pride in my proficiency with this versatile language. Whether it's enhancing user interfaces, handling asynchronous operations, or implementing requests, I leverage the full potential of JavaScript to bring websites to life. I'm constantly exploring new features and modern JavaScript frameworks to stay ahead in the dynamic world of front-end development.`,
   color:'text-[#ED250A]'
   },
   {heading:'ANIMATION ENTHUSIAST',
   icon:<MdAnimation />,
   text: `Bringing websites to life involves more than static elements. I have a knack for incorporating captivating animations and transitions to elevate the user experience. Leveraging tools like CSS animations and libraries such as Framer Motion, I add subtle motion that not only enhances usability but also adds that extra flair to capture user attention.`,
   color:'text-[#1e87e5]'
   },
 
]

interface Iprop {
      fontFamily?: any;
     propUseState?: (value: boolean) => void;  
 }

const About:React.FC<Iprop> = ({fontFamily}) => {
  return (
   <section>
        <div className={`${fontFamily} flex items-center gap-8 mb-4 px-[62px] max-lg:px-[20px] max-sm:flex-col max-sm:items-start max-sm:gap-1`}>
            <h2 className='text-[40px] tracking-[2.5%] leading-[40px] font-semibold max-sm:text-[32px]' >ABOUT ME</h2>
            <div className='bg-btngradient w-[250px] h-[2px] rounded-[20px] max-sm:w-[160px]'></div>
        </div>
        <p className='font-[500] leading-[30px] px-[62px] max-lg:px-[20px]'>Hello there! I'm Folashade, a Front end developer, solving problems one code at a time. I specialize in building Frontend applications, I take pride in my work and ensure I deliver the most accessible and most responsive application possible. It's not just about writing code; it's about building experiences that leave a lasting impression <img src="emoji.png" alt=""  className='w-5 h-5 inline-block'/>.</p>
        <section className='mt-[26px]  pl-[62px] pr-[52px] max-lg:px-[20px] max-xsm:px-[10px]'>
              <h3 className={`${fontFamily} font-semibold text-[32px] leading-[40px] tracking-[2.5%] mb-6 max-sm:text-[28px]`}>What I do </h3>
              <section className="scrollbar flex justify-between flex-col gap-5 overflow-y-scroll h-[350px] max-lg:h-full max-lg:overflow-auto qualific pr-[20px] max-lg:pr-0">
                {
                     qualifications.map((item, idx)=>{
                       return(
                        <div className="bg-[#ed240a4b] p-4 leading-5 rounded-[20px] min-h-[180px]  flex-col div-center qualific-div " key={idx}>
                              <div className="flex gap-5 items-center text-[24px] max-sm:text-xl max-sm:gap-3 max-xxsm:text-base  w-full mb-4 max-sm:mb-2">
                                <span className={`${item.color}`}>{item.icon}</span>
                                <h4 className={`font-semibold max-xxsm:font-bold ${fontFamily} uppercase w-full text-start`}>{item.heading}</h4>     
                              </div> 
                              <p className="tracking-[2.5%] text-sm  ">{item.text}</p> 
                        </div>
                       )
                     })
                }
              </section>
        </section>
        
   </section>
  )
}

export default About