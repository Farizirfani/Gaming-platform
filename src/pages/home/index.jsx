import React from 'react'

// components
import Navbar from '../../components/navbar'
import Comment from '../../components/comments'

// home-component
import Trending from './trendings'
import Utility from './utility'

// images
import JoyStick from '../../assets/image/joy_stick 1.png'
import Spiderman from '../../assets/image/banner-spiderman.png'

import Rp1 from '../../assets/image/rp-1.png'
import Rp2 from '../../assets/image/rp-2.png'
import Rp3 from '../../assets/image/rp-3.png'
import Rp4 from '../../assets/image/rp-4.png'
import Rp5 from '../../assets/image/rp-5.png'
import Rp6 from '../../assets/image/rp-6.png'


const Home = () => {
  return (
    <div className='canvas-home'>
        <div className="main-home">
            <Navbar />
            <div className="container-home xl:px-32">
                <div className="flex justify-between">
                    <div className='banner-home-1 w-1/3 content-center justify-center items-center'>
                        <p className='text-ungu-1 font-extrabold text-lg tracking-tight xl:pb-2'>3D game dev</p>
                        <h1 className='text-white font-bold text-5xl leading-relaxed'>Work that we produce for our clients</h1>
                        <p className='text-white xl:my-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolore nostrum ullam illo! Quo provident molestiae facere rem, molestias incidunt.</p>
                        <button className='text-white bg-gradient-1 p-3 rounded-full'>
                            Get more details
                        </button>
                    </div>
                    <div className='banner-home-2 w-1/2  xl:justify-end xl:items-end content-end  flex z-1 -bottom-40'>
                        <div className='w-4/6'>
                            <img src={JoyStick} alt="" />
                        </div>
                    </div>
                </div>
                <div  className="xl:py-16 " >
                    <Trending/>
                </div>
                <div className='text-center flex justify-center content-center xl:px-40 p-4'>
                    <h1 className=' text-white xl:text-3xl text-lg font-semibold leading-loose'>Lorem ipsum dolor sit amet elit. Consectetur est expedita similique at corrupti possimus.</h1>
                </div>
                <div className='lg:py-16'>
                    <div>
                        <h1 className='text-white font-semibold text-3xl'>Lorem ipsum</h1>
                        <p className='text-white w-1/2 font-thin leading-loose lg:py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam numquam dolor consequatur harum odit delectus accusamus officia voluptatem a.</p>
                    </div>
                    <div className='lg:py-10'>
                        <img src={Spiderman} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Utility />
            </div>
            <div className='recent-project h-auto xl:px-24 xl:py-16'>
                <div className='text-white text-center '>
                    <h1 className='text-3xl font-bold'>Our Recent Projects</h1>
                    <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quae. <br />Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex flex-wrap gap-4 content-center xl:py-6 justify-center'>
                    <div className=' '>
                        <img src={Rp1} alt="image_Rp" />
                    </div>
                    <div className=' '>
                        <img src={Rp2} alt="image_Rp" />
                    </div>
                    <div className=' '>
                        <img src={Rp3} alt="image_Rp" />
                    </div>
                    <div className=' '>
                        <img src={Rp4} alt="image_Rp" />
                    </div>
                    <div className=' '>
                        <img src={Rp5} alt="image_Rp" />
                    </div>
                    <div className=' '>
                        <img src={Rp6} alt="image_Rp" />
                    </div>
                </div>
                <div className='flex justify-center content-center'>
                    <button className='text-white hover:bg-zinc-900 bg-zinc-800 py-2 px-4 rounded-lg'>SEE ALL</button>
                </div>
            <div>
                <Comment />
            </div>
            </div>
        </div>
    </div>
)
}

export default Home