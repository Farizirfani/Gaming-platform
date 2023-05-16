import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'

import BannerStray from '../../assets/image/banner-stray.png'
import WorkCard from './work_card'

const About = () => {
  return (
    <div className='canvas-about'>
        <div className="main-about h-auto">
            <Navbar />
            <div className='h-auto  px-7'>
              <div className="xl:flex xl:justify-between content-center">
                <div className='text-white xl:px-32 py-3 '>
                  <p className='py-4'> <Link to='/'>Home</Link>   {'>'} <span className='text-purple-900'> About us</span></p>
                  <h1 className='md:text-3xl  text-lg font-bold w-3/4 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet.</h1>
                  <p className='md:w-1/2 w-auto font-light py-3'>Lorem ipsum dolor sit amet. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo, ab nostrum et totam eaque ullam beatae assumenda consequatur cupiditate?</p>
                  <button className='bg-gradient-1 xl:my-5 px-3 py-2 rounded-full'>Get in touch <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className=''>
                  <div className='xl:w-auto w-fit xl:p-0 p-5'>
                    <img src={BannerStray} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='py-16 xl:px-32 px-7'>
              <h1 className='text-white font-semibold text-xl sm:text-left text-center'>Why work with us</h1>
              <div>
                <WorkCard />
              </div>
            </div>
          <h1 className='text-white'>Hello brow ini dari about us</h1>
        </div>
    </div>
  )
}

export default About