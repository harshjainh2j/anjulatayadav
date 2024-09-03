import React from 'react'
import { Circle } from './Icons'

const Hireme = () => {
  return (
    <div className='fixed -left-20  -bottom-72 flex items-center justify-center md:hidden'>
      <div className='w-100 h-auto flex items-center justify-center relative '>
      <Circle className={"fill-dark animate-pulse"} />
      </div>
    </div>
  )
}

export default Hireme
