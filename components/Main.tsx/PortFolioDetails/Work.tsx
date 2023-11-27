'use client'
import { useState } from 'react';
import WorkFilter from './WorkFilter';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import { GiBinoculars } from 'react-icons/gi';

const projects = [
  {
    title: 'Fastkar',
    image: "fastkar.png",
    githubLink: 'https://github.com/FolashadeOmoloja/FastKar',
    liveDemoLink: 'https://fast-kar.vercel.app',
    description: 'FastKar ensures seamless, efficient transportation services for convenience and peace of mind. Tech stack: Next js, Next-auth, tailwind css, leaftlet-map, typescript.',
    filterIdx: 1
  },
  {
    title: 'Quickpay',
    image: 'quickpay.png',
    githubLink: 'https://github.com/FolashadeOmoloja/Quick-Pay',
    liveDemoLink: 'https://quick-pay-beta.vercel.app/',
    description: 'Landing page for a payment platform Quickpay, for seamless payment of bills at convenience. Tech stack: Next js, typescript, framer-motion.',
    filterIdx: 1
  },

  {
    title: 'Planet Protectors',
    image: 'planet.png',
    githubLink: 'https://github.com/FolashadeOmoloja/Planet-Protectors',
    liveDemoLink: 'https://planetprotectors.netlify.app/home',
    description: 'A responsive web application built with React.js, Bootstrap, and React Table for a user-friendly interface and enhance functionality. It addresses the problem of plastic recycling.',
    filterIdx: 2
  },
  {
    title: 'My Old Portfolio',
    image: 'portfolio.PNG',
    githubLink: 'https://github.com/FolashadeOmoloja/My-portfolio',
    liveDemoLink: 'https://folashade-omoloja.netlify.app/',
    description: 'A responsive portfolio with React.js, email.js, css. Showcasing all my previous projects and a really beautiful user interface',
    filterIdx: 2
  },

  {
    title: 'Readym',
    image: 'Readym.PNG',
    githubLink: 'https://github.com/FolashadeOmoloja/Readym',
    liveDemoLink: 'https://readym.netlify.app/',
    description: 'Readym is a website built to improve reading culture by creating easy accessibility to informative books online, Technology used: Html, CSS and Bootstrap.',
    filterIdx: 3
  },
  {
    title: 'Notelify',
    image: 'notelify.png',
    githubLink: 'https://github.com/FolashadeOmoloja/Notelify',
    liveDemoLink: 'https://notelifyweb.netlify.app/',
    description: 'Notefily is a responsive functional web application built to help users store notes and create todo-lists, Tech stack: Html, CSS, Javascript.',
    filterIdx: 3
  },
  {
    title: 'RPS-gameplay',
    image: 'game.png',
    githubLink: 'https://github.com/FolashadeOmoloja/rock_paper_scissors_game',
    liveDemoLink: 'https://rps-gameplay.netlify.app',
    description: 'RPS-gameplay is a simple rock-paper-scissors game, built for recreational purposes and to let off steam <FaGrinWink/>! Tech stack: Html, CSS, and Javascript.',
    filterIdx: 3
  },

];



interface Iprop {
  fontFamily?: any;
}
const Work:React.FC<Iprop> = ({fontFamily}) => {
  const nextArr =projects.filter((project) => project.filterIdx == 1)
  const reactArr = projects.filter((project) => project.filterIdx == 2)
const javascriptArr=projects.filter((project) => project.filterIdx == 3)
const [projectArr, setProjectArr] =useState(projects)
const [filteredProjects, setFilteredProjects] = useState(projects);

const handleFilter = (filterIdx: number) => {
  if (filterIdx === 0) {
    setFilteredProjects(projects);
  } else {
    const filteredArr = projects.filter((project) => project.filterIdx === filterIdx);
    setFilteredProjects(filteredArr);
  }
};



  return (
    <section className="">
    <div className={`${fontFamily} flex items-center gap-8 mb-4  max-md:flex-col max-md:items-start max-md:gap-1 px-[62px] max-xlg:px-[20px]`}>
        <h2 className='header-title' >Portfolio</h2>
        <div className='header-line'></div>
    </div>
      <section className='px-[62px] max-xlg:px-[20px]'>
      <WorkFilter fontFamily={fontFamily} 
      handleFilter={handleFilter}
      propUseState={setProjectArr}
      />
      </section>
      <section className='mt-5 scrollbar sm:overflow-y-scroll pl-[62px] pr-[52px] mr-[10px] max-xlg:pl-[20px] max-xlg:pr-[10px] flex flex-wrap flex-grow gap-4 sm:h-[480px]  2xl:justify-center max-sm:justify-center '>
            {
              filteredProjects.map((project,idx)=>{
                return(
         <article
           className={`flex flex-col items-center justify-items-center text-[#57657A] gap-4 font-semibold w-[48%] h-[266px] 2xl:max-w-[300px] p-3 bg-[#F2F5F9]  rounded-[15px] transition-transform shadow-div max-sm:w-[300px]`}
           key={idx}
         >
           <div className="w-full h-200 rounded-15 relative overflow-hidden portfolio__img">
             <img src={project.image} alt="" className="w-full h-[166px] rounded-[15px] border border-[#ED250A]" />
             <div className="overlay">
               <a
                 href={project.liveDemoLink}
                 className="overlay__link"
                 target="_blank"
               >
                 <GiBinoculars />
               </a>
             </div>
           </div>
           <h3>{project.title}</h3>
           <div className="flex justify-between w-full ">
             <a
               href={project.githubLink}
               className=" text-sm div-center gap-1 "
               target="_blank"
             > 
               <BsGithub />
               <span>Github</span> 
             </a>
             <a
               href={project.liveDemoLink}
               className="text-sm div-center gap-1 bg-text"
               target="_blank"
             >
                     <BsLink45Deg className='text-[#ED250A]'/>
               <span>Live Demo </span>
         
             </a>
           </div>
         </article>

                )
              })
            }
      </section>


    
</section>
  );
};


export default Work