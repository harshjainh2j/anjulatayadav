import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
<footer className='w-full border-t-2 border-solid border-dark sm:text-base'>
<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
    <span>{new Date().getFullYear()} &copy; All Rights Reserved </span>
    <div className='flex items-center lg:py-2'>
    Build with <span className='text-primary text-2xl px-1'>&#9825;</span> by &nbsp;<Link className='underline underline-offset-2' href="https://harshjaindevportfolio.netlify.app/">Harsh Jain</Link>
    </div>
    <Link href="https://wa.me/9425437959" target='_blank' className='underline underline-offset-2'>Say Hello</Link>
</Layout>

</footer>
  )
}

export default Footer
