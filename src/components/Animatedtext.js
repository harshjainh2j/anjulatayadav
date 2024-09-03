import React from 'react'
import {motion, stagger} from "framer-motion"

const quote={
  initial:{
    opacity:1,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      delay:0.5,
      staggerChildren:0.12,
    }
  }
}
const singleWord={
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
}

 const Animatedtext = ({text,className=""}) => {
  return (
   
      <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className} `}
        variants={quote}
        initial="initial"
        animate="animate"
        >
        {text.split(" ").map((char,index)=>(
        <motion.span className='inline-block'
        variants={singleWord}
      
        key={char+index}>{char}&nbsp;</motion.span>
        ))}
        </motion.h1>
        </div>

  ) 

}

export default Animatedtext
