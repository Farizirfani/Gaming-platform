import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Navbar from '../../components/navbar'

// Image
import BannerSpiderman from '../../assets/image/banner-spiderman.png'
import BannerStray from '../../assets/image/banner-stray.png'
import Fanny from '../../assets/image/fanny.png'
import Hello from '../../assets/image/hello.png'


const Portfolio = () => {
  return (
    <div className='canvas-portofolio'>
      <div className="main-portofolio  h-auto">
        <Navbar />
        <div>
          <div className='text-center text-white'>
            <p className='py-4 text-white'> <Link to='/'>Home</Link>   {'>'} <span className='text-purple-700'> Services </span></p>
            <h1 className='md:text-3xl p-3 font-semibold md:py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, praesentium.</h1>
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
        <div className='md:px-[110px] p-6'>
          <div className='lg:flex justify-center lg:justify-between items-center md:py-14'>
            <div className='max-w-[670px]'>
              <img src={BannerSpiderman} alt="" />
            </div>
            <div className='text-white'>
              <h1 className='lg:text-2xl p-2 font-semibold'>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor.</h1>
              <p className='font-light p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Suscipit, doloribus.</p>
              <div className='flex-wrap p-2'>
                <div className='flex content-center items-center'>
                  <i className="fa-solid fa-check text-[#0b0308] bg-green-600 px-[4px] py-[3px] rounded-full"></i>
                  <p className='p-2'>Lorem, ipsum dolor.</p>
                </div>
                <div className='flex content-center items-center'>
                  <i className="fa-solid fa-check text-[#0b0308] bg-green-600 px-[4px] py-[3px] rounded-full"></i>
                  <p className='p-2'>Lorem, ipsum dolor.</p>
                </div>
                <div className='flex content-center items-center'>
                  <i className="fa-solid fa-check text-[#0b0308] bg-green-600 px-[4px] py-[3px] rounded-full"></i>
                  <p className='p-2'>Lorem, ipsum dolor.</p>
                </div>
                <div className='flex content-center items-center'>
                  <i className="fa-solid fa-check text-[#0b0308] bg-green-600 px-[4px] py-[3px] rounded-full"></i>
                  <p className='p-2'>Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:flex  justify-center lg:justify-between items-center md:py-14'>
            <div className='text-white'>
              <h1 className='text-2xl'>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Nobis, earum!</h1>
              <p className='w-1/2 md:py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam eaque perspiciatis quisquam alias praesentium voluptatibus ipsum vel quod. Voluptate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, rerum.</p>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ex quos possimus aliquam reprehenderit!</p>
              <button className='bg-[#34085f] hover:bg-[#21093a] md:my-3 text-white py-3 px-6 rounded-lg'>Read more</button>
            </div>
            <div className='lg:max-w-[400px] w-auto'>
              <img src={BannerStray} alt="" />
            </div>
          </div>
          <div className='lg:flex justify-center lg:justify-between items-center md:py-14'>
            <div  className='lg:max-w-[400px] w-auto' >
              <img src={Fanny} alt="" />
            </div>
            <div className='text-white  lg:w-1/2'>
              <h1 className='text-2xl'>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Nobis, earum!</h1>
              <p className=' md:py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam eaque perspiciatis quisquam alias praesentium voluptatibus ipsum vel quod. Voluptate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, rerum.</p>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ex quos possimus aliquam reprehenderit!</p>
              <button className='bg-[#34085f] hover:bg-[#21093a] md:my-3 text-white py-3 px-6 rounded-lg'>Read more</button>
            </div>
          </div>
          <div className='lg:flex  justify-center lg:justify-between items-center md:py-14'>
            <div className='text-white'>
              <h1 className='text-2xl'>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Nobis, earum!</h1>
              <p className='w-1/2 md:py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam eaque perspiciatis quisquam alias praesentium voluptatibus ipsum vel quod. Voluptate! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, rerum.</p>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ex quos possimus aliquam reprehenderit!</p>
              <button className='bg-[#34085f] hover:bg-[#21093a] md:my-3 text-white py-3 px-6 rounded-lg'>Read more</button>
            </div>
            <div>
              <img className='lg:max-w-[400px] w-auto' src={Hello} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio