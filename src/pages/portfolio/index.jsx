import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'

const Portfolio = () => {
  return (
    <div className='canvas-portofolio'>
      <div className="main-portofolio  h-auto">
        <Navbar />
        <div>
          <div className='text-center text-white'>
            <p className='py-4 text-white'> <Link to='/'>Home</Link>   {'>'} <span className='text-purple-700'> Services </span></p>
            <h1 className='text-3xl font-semibold md:py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, praesentium.</h1>
            <p className='text-lg font-light md:py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, iste.</p>
          </div>
          <div className='flex justify-center'>
            <div className='bg-[#150122] w-auto h-full rounded-xl md:flex md:justify-between justify-center'>
              <div className='flex lg:m-5 m-2 lg:px-12 px-6 py-5 md:border-r-2'>
                <div>
                  <i className="fa-solid fa-user text-[#34085f] bg-white px-[14px] py-[13px] rounded-full"></i>
                </div>
                <div className='px-5 text-center text-white'>
                  <h1 className='font-bold text-lg'>90+</h1>
                  <h1>Clients</h1>
                </div>
              </div>
              <div className='flex lg:m-5 m-2 lg:px-12 px-6 py-5 '>
                <div>
                  <i className="fa-solid fa-location-dot text-[#34085f] bg-white px-[14px] py-[12px] rounded-full"></i>
                </div>
                <div className='px-5 text-center text-white'>
                  <h1 className='font-bold text-lg'>30+</h1>
                  <h1>Countries</h1>
                </div>
              </div>
              <div className='flex lg:m-5 m-2 lg:px-12 px-6 py-5 md:border-l-2'>
                <div>
                  <i className="fa-solid fa-server text-[#34085f] bg-white px-[12px] py-[12px] rounded-full"></i>
                </div>
                <div className='px-5 text-center text-white'>
                  <h1 className='font-bold text-lg'>50+</h1>
                  <h1>Projects</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <h1 className='text-white'>testing</h1>
        </div>
      </div>
    </div>
  )
}

export default Portfolio