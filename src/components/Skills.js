import React from 'react'
import {motion} from 'framer-motion'

const Skill=({name,x,y,className=""})=>{
    return(
        <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 cursor-pointer  shadow-dark absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold ${className} `}
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        >
        {name}
      </motion.div> 
    )
}
const Skills = () => {
  return (
    <>
      <h2 className='mt-64 text-8xl font-bold w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center  bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer  shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 '
        whileHover={{scale:1.05}}
        >
        Electronics
      </motion.div>
        <Skill name={"Wimax"} x="-25vw" y="2vw"/>
        <Skill name={"MPLS"} x="-5vw" y="-10vw"/>
        <Skill name={"QoS in LTE"} x="20vw" y="6vw"/>
        <Skill name={"Wireless Networking"} x="0vw" y="12vw"/>
        <Skill name={"Internet of Things"} x="-20vw" y="-15vw"/>
        <Skill name={"  Network Protocols"} x="18vw" y="-13vw"/>
        <Skill name={"Conference Coordination"} x="32vw" y="-5vw" className=" xs:hidden"/>
        <Skill name={"PhD Supervision"} x="0vw" y="-20vw"/>
        <Skill name={"Technical Paper Writing"} x="-25vw" y="18vw" className=' xs:hidden'/>
        <Skill name={"Teaching/Mentoring"} x="18vw" y="18vw"/>
      </div>
    </>
  )
}

export default Skills
