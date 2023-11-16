import React from 'react'

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

const SideBarDetails = () => {
  return (
    <section className='h-full w-full bg-white px-6 rounded-[20px] text-center'>
        <h1 className='font-bold text-[24px]'>Folashade Omoloja</h1>
        <span className='mt-6 font-semibold text-[#0b090996]'>Front End Developer</span>
        <section className='flex mt-7 gap-2 mb-6'>
             {
                socialIcons.map((item, idx)=>{
                    return (
                        <div key={idx} className='w-[70px] h-[70px] bg-[#F2F7FC] div-center  rounded-lg'>
                        <a href={item.href}>
                            <img src={item.icon} alt={item.icon} className='w-5' />
                        </a>
                       </div>
                    )
                })
             }
        </section>
    </section>
  )
}

export default SideBarDetails