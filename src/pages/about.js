import Head from 'next/head'
import React,{useRef,useEffect} from 'react'
import Animatedtext from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/about.jpeg"
import {motion,useMotionValue,useSpring,useInView} from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Transition from '@/components/Transition'

const AnimatedNumbers=({value})=>{
const ref=useRef(null);
const motionValue=useMotionValue(0);
const springValue=useSpring(motionValue,{duration: 3000});
const inview = useInView(ref);
  useEffect(()=>{
  if(inview){
    motionValue.set(value);
  }
  },[inview,motionValue,value])

  useEffect(()=>{
    springValue.on("change", (latest)=>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    });
  },[value,springValue])
  return (
<span ref={ref}>

</span>
  )
}

const about = () => {
  return (
    <>
    <Head>
      <title>Anjulata Yadav | About</title>
      <meta name="description" content="Dr. (Mrs.) Anjulata Yadav is a distinguished professor at SGSITS Indore, with over two decades of experience in academia and research. She holds a PhD in her field and has been an integral part of the institution since 2005, where she has made significant contributions to both teaching and research.

Her expertise lies in cutting-edge areas such as the Internet of Things (IoT), Wireless Networking, Quality of Service (QoS) in LTE, WiMAX, and MPLS. Dr. Yadav’s research has greatly impacted these domains, as evidenced by her extensive list of publications in international and national journals, conference proceedings, and book chapters.

As a dedicated mentor, Dr. Yadav has guided numerous PhD scholars under the banner of RGPV, helping shape the next generation of researchers. Her role extends beyond the classroom and the lab, as she has actively organized and coordinated various conferences, workshops, and seminars, providing a platform for knowledge exchange and professional development.

Dr. Yadav is also a sought-after speaker and expert, having delivered numerous invited lectures and chaired sessions at various prestigious conferences. Her leadership in testing and consultancy projects further underscores her commitment to advancing both theoretical and applied aspects of her research areas.

Dr. (Mrs.) Anjulata Yadav’s contributions to academia and research have made her a respected figure in her field, and her ongoing work continues to influence the development of next-generation technologies."/>
    </Head>
    <Transition/>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <Animatedtext className='text-5xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'  text="Passion fuels Purpose!"/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 '>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
            <p className='font-medium'>
            Dr. (Mrs.) Anjulata Yadav is a distinguished professor at SGSITS Indore, with over two decades of experience in academia and research. She holds a PhD in her field and has been an integral part of the institution since 2005, where she has made significant contributions to both teaching and research.
            </p>
          
            <p className='font-medium py-4'>
            As a dedicated mentor, Dr. Yadav has guided numerous PhD scholars under the banner of RGPV, helping shape the next generation of researchers. Her role extends beyond the classroom and the lab, as she has actively organized and coordinated various conferences, workshops, and seminars, providing a platform for knowledge exchange and professional development.
            </p>
            {/* <p className='font-medium py-4'>
            Dr. Yadav is also a sought-after speaker and expert, having delivered numerous invited lectures and chaired sessions at various prestigious conferences. Her leadership in testing and consultancy projects further underscores her commitment to advancing both theoretical and applied aspects of her research areas.
            </p>
            <p className='font-medium py-4'>
            Dr. (Mrs.) Anjulata Yadav’s contributions to academia and research have made her a respected figure in her field, and her ongoing work continues to influence the development of next-generation technologies.
            </p> */}
          </div>
        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 ' >

          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
          <Image  src={ProfilePic} alt="AnjulataYadav" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className='w-full h-auto rounded-2xl' />
        </div>
        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl-items-center md:order-3'>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={50}/>+
            </span>
            <h2 className='text-lg font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Technical Publications</h2>
          </div>

          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={100}/>+
            </span>
            <h2 className='text-lg font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Students Mentored</h2>
          </div>

          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={25}/>+
            </span>
            <h2 className='text-lg font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
          </div>

          </div> 
        </div>
        <Skills/>
        <Experience/>
      </Layout>
    </main></>
  )
}

export default about
