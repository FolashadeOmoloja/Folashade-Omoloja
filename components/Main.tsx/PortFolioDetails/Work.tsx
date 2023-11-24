import React from 'react'
import WorkFilter from './WorkFilter';

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
    image: 'planet.PNG',
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
    image: 'Readym.PNG',
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
    <section className="px-[62px] max-xlg:px-[20px]">
    <div className={`${fontFamily} flex items-center gap-8 mb-4  max-md:flex-col max-md:items-start max-md:gap-1`}>
        <h2 className='header-title' >Portfolio</h2>
        <div className='header-line'></div>
    </div>
      <WorkFilter fontFamily={fontFamily}/>
      <section>
          <div>

          </div>
      </section>


    
</section>
  );
};


export default Work