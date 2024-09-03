import Animatedtext from '@/components/Animatedtext'
import Head from 'next/head'
import Layout from '@/components/Layout'
import React from 'react'
import Transition from '@/components/Transition'

const FeaturedProject=({title,summary})=>{
    return(
        <article className='w-full flex items-center justify-between relative z-1
        rounded-3xl border-solid  border-dark bg-light shadow-2xl py-12 rounded-br-2xl
         h-[300px]  border-2  p-8 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
    xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <div className='w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
            <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm '>{title}</h2>
            <p className='my-2 font-medium text-dark sm:text-sm '>{summary}</p>
            </div>
        </article>
    )
}

const Project=({title,summary})=>{
    return(
        <article className='w-full flex items-center justify-between relative 
        rounded-3xl border border-solid  border-dark bg-light shadow-2xl py-12 pl-6 xs:p-4  '>
     <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark 
     rounded-br-3xl md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] md:-right-2 '/>

            <div className='w-full flex flex-col items-start justify-between mt-4 '>
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
            <p className='my-2 font-medium text-dark '>{summary}</p>
            </div>
        </article>
    )
}

const technicalpaper = () => {
  return (
    <>
     <Head>
      <title>Anjulata Yadav | technicalpaper</title>
      <meta name="description" content="Dr. (Mrs.) Anjulata Yadav is a distinguished professor at SGSITS Indore, with over two decades of experience in academia and research. She holds a PhD in her field and has been an integral part of the institution since 2005, where she has made significant contributions to both teaching and research.

Her expertise lies in cutting-edge areas such as the Internet of Things (IoT), Wireless Networking, Quality of Service (QoS) in LTE, WiMAX, and MPLS. Dr. Yadav’s research has greatly impacted these domains, as evidenced by her extensive list of publications in international and national journals, conference proceedings, and book chapters.

As a dedicated mentor, Dr. Yadav has guided numerous PhD scholars under the banner of RGPV, helping shape the next generation of researchers. Her role extends beyond the classroom and the lab, as she has actively organized and coordinated various conferences, workshops, and seminars, providing a platform for knowledge exchange and professional development.

Dr. Yadav is also a sought-after speaker and expert, having delivered numerous invited lectures and chaired sessions at various prestigious conferences. Her leadership in testing and consultancy projects further underscores her commitment to advancing both theoretical and applied aspects of her research areas.

Dr. (Mrs.) Anjulata Yadav’s contributions to academia and research have made her a respected figure in her field, and her ongoing work continues to influence the development of next-generation technologies."/>
    </Head>
    <Transition/>
    <main>
    <Layout className="pt-16 w-full mb-16  flex flex-col items-center justify-center relative z-0">
<Animatedtext text="Imagination Trumps Knowledge"
className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
      <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
            
            <div className='col-span-12'>
            <FeaturedProject 
              title="The Effect of Frequency Slot Demand in Elastic Optical Network (EON)"
              summary='G. Baig, Anjulata Yadav and D. S. Yadav, "The Effect of Frequency Slot Demand in Elastic Optical Network (EON)," 2022 IEEE 11th International Conference on Communication Systems and Network Technologies (CSNT), 23-24 April 2022, Indore, India'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
            <Project title=" Novel Protocol for Prevention of Blackhole Attack in Wireless Sensor Network" summary='Shivani Shukla, Anjulata Yadav, Manish Panchal, P. D. Vyavahare, "A Novel Protocol for Prevention of Blackhole Attack in Wireless Sensor Network", IEEE International Conference on Advanced Networks and   Telecommunications Systems, 16-19 December 2019, Goa, India'/>
            </div>

            <div className='col-span-6 sm:col-span-12'>
            <Project title="Optimization of Throughput in  Radio Network under Different Wireless Channel using Genetic Algorithm" summary=" Mohd. Anas Khan, Preeti Trivedi, Anjulata Yadav, “ Optimization of Throughput in Cognitive Radio Network under Different Wireless Channel using Genetic Algorithm” International conference on social networking and computational intelligence(SCI2K19), March 2019."/>
            </div>

            <div className='col-span-12'>
            <FeaturedProject 
              title="A Hybrid Scheduler for QoS Provisioning in WiMAX and its Performance Evaluation"
              summary=" Anjulata Yadav,  P. D. Vyavahare and P. P. Bansod, “A Hybrid Scheduler for QoS Provisioning in WiMAX and its Performance Evaluation” IEEE International Conference on Advanced Networks and Telecommunications Systems, 16-19 December 2018, Indore, India"
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
            <Project title="A Time Domain Scheduler for LTE Network and its Performance Evaluation" summary="Anjulata Yadav,  P. D. Vyavahare and P. P. Bansod,  “A Time Domain Scheduler for LTE Network and its Performance Evaluation”, IV International Conference on Applied Mathematics, Modeling and Computational Science (AMMCS) , Canada, August, 2017"/>
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project title="Energy Efficient Wireless Sensor Network using Fuzzy Logic" summary="Swapna Modi, Manish Panchal, Anjulata Yadav, “Energy Efficient Wireless Sensor Network using Fuzzy Logic” International Conference on Current Trends in Computer, Electrical, Electronics and Communication (ICCTCEEC-2017), Mysore, 8-9 September 2017."/>
            </div>

            <div className='col-span-12'>
            <FeaturedProject 
              title="Service Priority Dependent Vehicle To Hotspot Communication Opportunistic Scheduling"
              summary="Riya Bansal, Anurag Shrivastava, Anjulata Yadav, “Service Priority Dependent Vehicle To Hotspot Communication Opportunistic Scheduling”, 11th International Conference on Industrial and Information Systems (ICIIS), Roorkee, India"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project title="An Improved Hybrid Scheduler for WiMAX and its Performance Evaluation" summary=" Anjulata Yadav, P. D. Vyavahare and P. P. Bansod, “An Improved Hybrid Scheduler for WiMAX and its Performance Evaluation”, 10th International Conference on Networking and Service (ICNS), Chamonix, France. pp 84-89, 20 April- 24 April 2014."/>
            </div>

            <div className='col-span-6 sm:col-span-12'>
            <Project title="Performance evaluation of various WiMAX schedulers under triple play services" summary="Anjulata Yadav,  P. D. Vyavahare and P. P. Bansod, ‘Performance evaluation of various WiMAX schedulers under triple play services’ Proc. of IEEE Third Asian Himalayas International Conference on Internet, AH-ICI2012 (session 5, No. 4)  23-25 November 2012,   Kathmandu, Nepal."/>
            </div>

            <div className='col-span-12'>
            <FeaturedProject 
              title="Light WiMAX Simulator For Mesh Networking"
              summary="Satish S. Rajput, Anjulata Yadav, Manish Panchal, “Light WiMAX Simulator For Mesh Networking,” A National Conference, Technologia 2012, Christian College of Engineering & Technology , Bhilai , Durg, Chhattisgarh , 1-2 March, 2012."
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project title="Uplink Scheduling Algorithms for QoS Support in Broadband Wireless Access Networks" summary="Ankit Maheshwari, Anjulata Yadav,” Uplink Scheduling Algorithms for QoS Support in Broadband Wireless Access Networks”, National Conference VIDYUTTI-11, Sidhant College Of Engineering, Pune, 28 Feb to 04 March 2011"/>
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project title="Study of Packet Reordering in TCP and TCP-DOOR Algorithm" summary="Indra Kumar Shah, Anjulata Yadav, Jaya Dipti Lal ,” Study of Packet Reordering in TCP and TCP-DOOR Algorithm”, National Conference on Recent Trends in Instrumentation Communication & Microelectronics, SVITS , Indore(MP), 9-10 Apr 2010"/>
            </div>
      </div>
    </Layout>         
    </main>
    </>
  )
}

export default technicalpaper
