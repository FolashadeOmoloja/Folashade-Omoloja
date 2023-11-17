import { Poppins } from 'next/font/google'
import NavBar from './NavBar'

const poppins= Poppins({
    subsets: ['latin'],
    weight:['400'],
    variable: '--font-poppins'
    
  })

const PortfolioDetails = () => {
  return (
    <section className=''>
       <NavBar/>
       <section className='bg-white h-full w-full mt-5 rounded-[20px] px-[62px]'>

       </section>
    </section>
  )
}

export default PortfolioDetails