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
    </section>
  )
}

export default PortfolioDetails