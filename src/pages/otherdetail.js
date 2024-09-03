import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Animatedtext from '@/components/Animatedtext'
import { motion } from 'framer-motion'
import Transition from '@/components/Transition'

const Article=({title,date})=>{
  return (
    <motion.li 
    initial={{y:200 }}
    whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}} 
    viewport={{once:true}} className='relative w-full p-4 py-6 my-4  rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col'>
      <h2 className='capitalize text-xl font-semibold hover:underline sm:self-start sm:pl-0 xs:text-sm'>{title}</h2>
      <span className='text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )

}

const otherdetail = () => {
  
  return (
    <>
        <Head>
      <title>Anjulata Yadav | conferences</title>
      <meta name="description" content="Dr. (Mrs.) Anjulata Yadav is a distinguished professor at SGSITS Indore, with over two decades of experience in academia and research. She holds a PhD in her field and has been an integral part of the institution since 2005, where she has made significant contributions to both teaching and research.

Her expertise lies in cutting-edge areas such as the Internet of Things (IoT), Wireless Networking, Quality of Service (QoS) in LTE, WiMAX, and MPLS. Dr. Yadav’s research has greatly impacted these domains, as evidenced by her extensive list of publications in international and national journals, conference proceedings, and book chapters.

As a dedicated mentor, Dr. Yadav has guided numerous PhD scholars under the banner of RGPV, helping shape the next generation of researchers. Her role extends beyond the classroom and the lab, as she has actively organized and coordinated various conferences, workshops, and seminars, providing a platform for knowledge exchange and professional development.

Dr. Yadav is also a sought-after speaker and expert, having delivered numerous invited lectures and chaired sessions at various prestigious conferences. Her leadership in testing and consultancy projects further underscores her commitment to advancing both theoretical and applied aspects of her research areas.

Dr. (Mrs.) Anjulata Yadav’s contributions to academia and research have made her a respected figure in her field, and her ongoing work continues to influence the development of next-generation technologies."/>
    </Head>
    <Transition/>
    <main>
      <Layout className='pt-16 '>
      <Animatedtext text="Confrences that brings the change" className='mb-16 text-6xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
      <h2 className='font-bold text-4xl w-full text-center xs:text-lg '>All Confrences</h2>
      <ul className='mt-8'>
  <Article
    title="Coordinator of 'Future Skills Training on Robotics and Automation' for students of SGSITS under TEQIP III"
    date="Aug–Oct 2020" />
  <Article
    title="Coordinator of two-day workshop on 'Technical Report Writing and Presentation Development using LaTeX' under TEQIP III"
    date="Mar 23-24, 2018" />
  <Article
    title="Coordinator of two-week ISTE workshop on 'Basic Electronics,' under NMEICT conducted by IIT Bombay at SGSITS"
    date="Jun 28–Jul 8, 2011" />
  <Article
    title="Coordinator of 'Code Level Training on Qualnet' under TEQIP II"
    date="Mar 23 & May 24, 2013" />
  <Article
    title="Chaired session 'Applied Problems and Methods in Research and Education (APMRE)' in International Conference AMMCS 2017, Waterloo University and Wilfrid Laurier University, Canada"
    date="Aug 22, 2017" />
  <Article
    title="Member of ICNS 2020 Technical Program Committee, The Sixteenth International Conference on Networking and Services, Venice, Italy"
    date="May 24–29, 2020" />
  <Article
    title="Chaired session 'Applied Problems and Methods in Research and Education (APMRE)' in International Conference AMMCS 2017, Waterloo University and Wilfrid Laurier University, Canada"
    date="Aug 22, 2017" />
  <Article
    title="Expert lecture on 'Introduction to Robotics' in Future Skills Training on Robotics and Automation for students of SGSITS under TEQIP III"
    date="Aug 17, 2020" />
</ul>

      </Layout>
    </main>
    </>
  )
}

export default otherdetail
