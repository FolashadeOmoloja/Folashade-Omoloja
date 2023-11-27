import React from 'react'
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
    filterIdx: 0.4
  },
  {
    title: 'Quickpay',
    image: 'quickpay.png',
    githubLink: 'https://github.com/FolashadeOmoloja/Quick-Pay',
    liveDemoLink: 'https://quick-pay-beta.vercel.app/',
    description: 'Landing page for a payment platform Quickpay, for seamless payment of bills at convenience. Tech stack: Next js, typescript, framer-motion.',
    filterIdx: 0.2
  },

  {
    title: 'Planet Protectors',
    image: 'planet.PNG',
    githubLink: 'https://github.com/FolashadeOmoloja/Planet-Protectors',
    liveDemoLink: 'https://planetprotectors.netlify.app/home',
    description: 'A responsive web application built with React.js, Bootstrap, and React Table for a user-friendly interface and enhance functionality. It addresses the problem of plastic recycling.',
    filterIdx: 0.6
  },
  {
    title: 'Planet Protectors',
    image: 'portfolio.PNG',
    githubLink: 'https://github.com/FolashadeOmoloja/Planet-Protectors',
    liveDemoLink: 'https://planetprotectors.netlify.app/home',
    description: 'A responsive web application built with React.js, Bootstrap, and React Table for a user-friendly interface and enhance functionality. It addresses the problem of plastic recycling.',
    filterIdx: 0.6
  },

  {
    title: 'Readym',
    image: 'Readym.PNG',
    githubLink: 'https://github.com/FolashadeOmoloja/Readym',
    liveDemoLink: 'https://readym.netlify.app/',
    description: 'Readym is a website built to improve reading culture by creating easy accessibility to informative books online, Technology used: Html, CSS and Bootstrap.',
    filterIdx: 0.8
  },
  {
    title: 'Notelify',
    image: 'notelify.png',
    githubLink: 'https://github.com/FolashadeOmoloja/Notelify',
    liveDemoLink: 'https://notelifyweb.netlify.app/',
    description: 'Notefily is a responsive functional web application built to help users store notes and create todo-lists, Tech stack: Html, CSS, Javascript.',
    filterIdx: 1
  },
  {
    title: 'RPS-gameplay',
    image: 'game.png',
    githubLink: 'https://github.com/FolashadeOmoloja/rock_paper_scissors_game',
    liveDemoLink: 'https://rps-gameplay.netlify.app',
    description: 'RPS-gameplay is a simple rock-paper-scissors game, built for recreational purposes and to let off steam <FaGrinWink/>! Tech stack: Html, CSS, and Javascript.',
    filterIdx: 1.2
  },

];

interface Iprop {
  fontFamily?: any;
}
const Work:React.FC<Iprop> = ({fontFamily}) => {
  return (
    <section className="">
    <div className={`${fontFamily} flex items-center gap-8 mb-4  max-md:flex-col max-md:items-start max-md:gap-1 px-[62px] max-xlg:px-[20px]`}>
        <h2 className='header-title' >Portfolio</h2>
        <div className='header-line'></div>
    </div>
      <section className='px-[62px] max-xlg:px-[20px]'>
      <WorkFilter fontFamily={fontFamily}/>
      </section>
      <section className='mt-5 scrollbar overflow-y-scroll pl-[62px] pr-[52px] mr-[10px] max-xlg:pl-[20px] max-xlg:pr-[10px] flex flex-wrap flex-grow gap-4 h-[480px] last:mb-4'>
            {
              projects.map((project,idx)=>{
                return(
<article
  className={`flex flex-col items-center justify-items-center text-[#57657A] gap-4 font-semibold w-[48%]  p-3 bg-[#F2F5F9]  rounded-[15px] transition-transform shadow-div`}
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