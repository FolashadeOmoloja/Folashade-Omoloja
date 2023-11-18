import React from 'react'


interface Iprop {
     propUseState?: (value: boolean) => void;  
 }

const About:React.FC<Iprop> = ({propUseState}) => {
  return (
    <div>About</div>
  )
}

export default About