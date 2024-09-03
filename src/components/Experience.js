import React, { useRef } from 'react';
import Licon from './Licon';
import { motion, useScroll } from 'framer-motion';

const Details = ({ position, time, work }) => {
    const ref=useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <Licon reference={ref}/>
      <motion.div
      initial={{ y: 50}}
      whileInView={{ y: 0}}
      transition={{duration: 0.9, type:"spring"}}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}</h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm'>{time}</span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className='my-64 '>
      <h2 className='text-6xl font-bold w-full mb-32 text-center md:text-6xl xs:text-4xl md:mb-16'>Journal Publications</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] '
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
          <Details
            position="(k, m) Secret Image Sharing Scheme with Cheater Detection Using RSA Cryptosystem"
            time="May 2021"
            work="Harshita Pathak, Manish Panchal, Anjulata Yadav, P. D. Vyavahare, “(k, m) Secret Image Sharing Scheme with Cheater Detection Using RSA Cryptosystem”, International Journal of Innovative Research in Technology, Vol 7"
          />
          <Details
            position="QoS in WiMAX Hybrid Schedulers for Heterogeneous Traffic and their Performance Comparison"
            time="April 2020"
            work="Anjulata Yadav,  P. D. Vyavahare and P. P. Bansod, “QoS in WiMAX Hybrid Schedulers for Heterogeneous Traffic and their Performance Comparison”, International Journal of Electronics, SCI Journal (Journal Print ISSN: 0020-7217 Online ISSN: 1362-3060, Online published in Oct 2019), Vol 107, no. 4, pp.  561-575. "
          />
          <Details
            position="A Quality of Service (QoS) Aware Scheduling Algorithm to Boost QoS of Cell-Edge Users in LTE Networks"
            time="July 2019"
            work="Himani Lodwal, Anjulata Yadav, Manish Panchal “A Quality of Service (QoS) Aware Scheduling Algorithm to Boost QoS of Cell-Edge Users in LTE Networks” ‘International Journal of Recent Technology and Engineering (IJRTE)’, ISSN: 2277-3878 (Online), Volume-8 Issue-2, pp.  2589-2594."
          />
          <Details
            position="Proposed WiMAX Hybrid Scheduler with Split FTP Traffic and its Performance Evaluation"
            time="Nov. 2018"
            work="Anjulata Yadav,  P. D. Vyavahare, P. P. Bansod, “Proposed WiMAX Hybrid Scheduler with Split FTP Traffic and its Performance Evaluation”, International journal of Wireless and Microwave Technologies, 2018, vol 8, no. 6, 1-14."
          />
          <Details
            position="Energy Efficient Cooperative Relay Wireless Communication Networks: A Review"
            time="Jan. 2017"
            work="Preeti Jwala Ekka, Anurag Shrivastav, Anjulata Yadav “Energy Efficient Cooperative Relay Wireless Communication Networks: A Review”, IUP Journal of Telecommunications, Vol. IX, No. 1."
          />
            <Details
              position="A Review Paper On Burst Scheduling Algorithm For Wimax Ofdma System"
              time="Dec. 2016"
              work="Anand Jain, Anjulata Yadav, “A Review Paper On Burst Scheduling Algorithm For Wimax Ofdma System” International Journal of Industrial Electronics and Electrical Engineering, ISSN: 2347-6982 Volume-4, Issue-12"
            />
          <Details
            position="A Review On: Cooperation Between MNO’s for Green And Efficient Communication"
            time="Aug. 2016"
            work="Prateek  Singh, Jaya Dipti Lal, Anjulata Yadav,  “A Review On: Cooperation Between MNO’s for Green And Efficient Communication’’, International Journal Of Engineering Science And Computing vol.6, Issue no. 8, pp. 2828-2832, Aug 2016."
          />
          <Details
            position="Review of WiMAX Scheduling Algorithms and Their Classification"
            time="June. 2015"
            work="Anjulata Yadav,  P. D. Vyavahare, P. P. Bansod, “ Review of WiMAX Scheduling Algorithms and Their Classification”, Journal of The Institution of Engineers (India): Series B(Springer), Vol 96, No. 2"
          />
          <Details
            position="Sparse MIMO-OFDM Channel Estimation: A Review"
            time="May 2015"
            work="Shivanshu Payasi, Preeti Trivedi, Anjulata Yadav “Sparse MIMO-OFDM Channel Estimation: A Review”, The IUP Journal of Telecommunications, Vol.VII, No.2, pp"
          />
          <Details
            position="An Analytical Model for Best Effort Traffic in WiMAX Networks"
            time="April 2014"
            work='Swati Sahu, Anjulata Yadav, Shekhar Sharma, "An Analytical Model for Best Effort Traffic in WiMAX Networks", International Journal of Advanced foundation and Research in Computer (IJAFRC), vol. 1, issue 4, pp. 90-120'
          />
          {/* Add more <Details /> components with unique props as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
