import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'

import BannerStray from '../../assets/image/banner-stray.png'
import Fanny from '../../assets/image/fanny.png'
import Bill from '../../assets/image/Bill 1.png'
import Baverly from '../../assets/image/Beverly 1.png'
import Claudia from '../../assets/image/Claudia 1.png'
import Avatar from '../../assets/image/Avatar 1.png'


import WorkCard from './work_card'
import TeamCard from './team_card'

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
            <div className='bg-[#1C140F] h-auto lg:px-[136px] px-7'>
              <div className='text-white py-[25px]'>
                <i className="fa-solid fa-arrow-left text-2xl lg:text-[33px]"></i>
              </div>
              <div className='md:flex justify-center md:justify-between '>
                <div className='w-full m-1'>
                  <img className='' src={Fanny} alt="" />
                </div>
                <div className=' w-full xl:m-0 m-1 lg:w-4/5'>
                  <p className='py-6 text-white font-thin opacity-800'>Lorem ipsum dolor sit amet.</p>
                  <h1 className='text-white lg:text-2xl text-lg py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nulla! Lorem ipsum dolor sit amet.</h1>
                  <p className='text-white font-thin md:py-3 py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. eveniet explicabo nulla alias itaque accusamus corporis veritatis repudiandae perspiciatis debitis placeat eos, tempore officia exercitationem, beatae quibusdam! Temporibus, quia quae cum maiores obcaecati consequuntur? Ad consequatur sunt beatae possimus ullam, quisquam modi in deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, iste.</p>
                </div>
              </div>
            </div>
            <div className='lg:py-20 lg:px-32'>
              <h1 className='text-white'>Our Team</h1>
              <div className='md:flex md:justify-evenly flex-wrap justify-center content-center items-center p-3'>
                <TeamCard image={Bill} name="Bill" />
                <TeamCard image={Baverly} name="Baverly"  />
                <TeamCard image={Claudia} name="Claudia"  />
                <TeamCard image={Avatar}  name="Avatar" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default About