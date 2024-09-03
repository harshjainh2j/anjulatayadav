import React,{useState} from 'react'
import Link from 'next/link'
import Logo from './Logo'
import {  useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Facebook, Linkedin } from './Icons'
const CustomLink=({href,title,className=""})=>{
const router=useRouter()

  return(
    <Link href={href} className={`${className} relative group`} >
    {title}
    <span  className= {`inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href?'w-full':'w-0'} `}>&nbsp;</span>
   
    </Link>
  )
}
const CustomMobileLink=({href,title,className="",toggle})=>{
  const router=useRouter()
  const handleClick=()=>{
    toggle();
    router.push(href)
  }
  return(
    <button href={href} className={`${className} relative group my-2` } onClick={handleClick}>
    {title}
    <span  className= {`inline-block h-[1px]  bg-light absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href?'w-full':'w-0'} `}>&nbsp;</span>
   
    </button>
  )
}



const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }

  return (
<header className='w-full py-8 px-32 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 '>
  <button className='hidden lg:flex flex-col justify-center items-center' onClick={handleClick}>
    <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen?"rotate-45 translate-y-1":"-translate-y-0.5"}`}></span>
    <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen?"opacity-0":"opacity-100"}`}></span>
    <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen?"-rotate-45 -translate-y-1":"translate-y-0.5"}`}></span>
  </button>
<div className='w-full flex justify-between items-center  lg:hidden'>
<nav >
    <CustomLink href='/' title={"Home"} className='mr-4'/>
    <CustomLink href='/about' title={"About"} className='mx-4'/>
    <CustomLink href='/technicalpaper' title={" Technical Papers"} className='mx-4'/>
    <CustomLink href='/otherdetail' title={"Conferences"} className='ml-4'/>
</nav>
{/* for social media icons */}
{/* target="_blank" opens in new tab */}
<nav className='flex items-center justify-center flex-wrap '> 
<motion.a href="https://www.linkedin.com/in/anju-yadav-53baa429/" 
target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className="w-6 mr-4">
<Linkedin/></motion.a>
<motion.a href="https://www.facebook.com/anjulata.yadav.7" 
target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className="w-6 mr-4">
<Facebook/></motion.a>
</nav>
</div>
{isOpen? 
  <motion.div
  initial={{scale:0.5,opacity:0,x:"-50%",y:"-50"}}
  animate={{scale:1,opacity:1}}
  className='min-w-[70vw] flex flex-col justify-between items-center z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
<nav className='flex flex-col items-center justify-center' >
    <CustomMobileLink href='/' title={"Home"} className=' text-white' toggle={handleClick}/> 
    {/* change text color from text-white */}
    <CustomMobileLink href='/about' title={"About"} className=' text-white' toggle={handleClick}/>
    <CustomMobileLink href='/technicalpaper' title={"Technical Papers"} className=' text-white ' toggle={handleClick}/>
    <CustomMobileLink href='/otherdetail' title={"Conferences"} className=' text-white' toggle={handleClick}/>
</nav>
<nav className='flex items-center justify-center flex-wrap mt-2'> 
<motion.a href="https://www.linkedin.com/in/anju-yadav-53baa429/" 
target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className="w-6 mr-4 sm:mx-1">
<Linkedin/></motion.a>
<motion.a href="https://www.facebook.com/anjulata.yadav.7" 
target="_blank" whileTap={{scale:0.9}} whileHover={{y:-2}} className="w-6 mr-4 sm:mx-1">
<Facebook/></motion.a>
</nav>
</motion.div>
:null}
<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
<Logo/>
</div>
</header>
  )
}

export default Navbar
