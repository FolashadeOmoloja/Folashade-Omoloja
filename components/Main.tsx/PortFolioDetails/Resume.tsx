const experience = [
  {
    date:'2023-01 – 2023-06',
    company:'Hitec City Technologies',
    description:'As a front-end developer, I built reusable components and  functional pages for the company using best practices.',
  },
  {
    date:'2022-08 –2023-03',
    company:'Women Techsters Fellowship,Tech4dev',
    description:'As a women techsters fellow, I collaborated with a team to build modern responsive web applications using best practices',
  },
]

const education = [
  {
    date:'2022-08 – 2023-03',
    company:'Women Techsters Fellowship, Class of 2023 - Tech4dev',
    description:'Software Development - Front end',
  },
  {
    date:'2016-12 – 2023-08',
    company:'UNIVERSITY OF LAGOS – LAGOS, NIGERIA',
    description:'Bachelor of Science: Civil and Environmental Engineering',
  },
]

const technicalSkills=[
  'HTML 5', 'CSS 3', 'JavaScript', 'React.js', 'TypeScript','Next js' ,'Tailwind Css','Styled-Components',  "Bootstrap", 'Git', 'Api Consumption'
]
const softSkills=[
'Agile Methodologies','Effective Communication' ,'Time Management', 'Flexibility', 'Problem Solving', 'Leadership', 'Technical writing', 'Content Creation'
]

interface Iprop {
      fontFamily?: any;
 }

const Resume:React.FC<Iprop> = ({fontFamily}) => {
  return (
   <section className="px-[62px] max-xlg:px-[20px]">
        <div className={`${fontFamily} flex items-center gap-8 mb-4  max-sm:flex-col max-sm:items-start max-sm:gap-1`}>
            <h2 className='header-title'>Resume</h2>
            <div className='header-line'></div>
        </div>
        <section className="flex justify-between max-lg:flex-col max-lg:gap-8">
           <section>
                  <h3 className="h3-header">Experience</h3>
                  <div className="qualific qualific-1 flex flex-col gap-5">
                    {
                        experience.map((item,idx)=>{
                          return(
                            <div className="resume-box " key={idx}>
                              <span className="text-[#1A1003] dark:text-[#d3d3d3]">{item.date}</span>
                              <span className="font-semibold">{item.company}</span>
                              <p>{item.description}</p>
                            </div>
                          )
                        })
                    }
                  </div>
           </section>
           <section>
             <h3 className="h3-header">Education</h3>
             <div className="qualific-2 flex flex-col gap-5" >
                    {
                        education.map((item,idx)=>{
                          return(
                            <div className="resume-box" key={idx}>
                              <span className="text-[#1A1003] dark:text-[#d3d3d3]">{item.date}</span>
                              <span className="font-semibold">{item.company}</span>
                              <p>{item.description}</p>
                            </div>
                          )
                        })
                    }
                  </div>
           </section>
        </section>
        <section className="flex justify-between max-lg:flex-col max-lg:gap-8 mt-5">
           <section>
                  <h3 className="h3-header mb-1 max-lg:mb-5">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {
                        technicalSkills.map((item,idx)=>{
                          return(
                            <div className="skills"  key={idx}>
                              <span>{item}</span>
                            </div>
                          )
                        })
                    }
                  </div>
           </section>
           <section>
             <h3 className="h3-header mb-1 max-lg:mb-5">Soft Skills</h3>
             <div className="flex flex-wrap gap-2">
                    {
                        softSkills.map((item,idx)=>{
                          return(
                            <div className="skills"  key={idx}>
                              <span>{item}</span>
                            </div>
                          )
                        })
                    }
                  </div>
           </section>
        </section>

        
   </section>
  )
}

export default Resume