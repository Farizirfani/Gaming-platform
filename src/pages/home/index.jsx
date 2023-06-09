import React from 'react'

// components
import Navbar from '../../components/navbar'
import Comment from '../../components/comments'
import Footer from '../../components/footer'

// home-component
import Trending from './trendings'
import Utility from './utility'

// images
import JoyStick from '../../assets/image/joy_stick 1.png'
import Spiderman from '../../assets/image/banner-spiderman.png'

// icons
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
            <div className="container-home md:px-32">
                <div className="flex flex-wrap-reverse md:justify-between justify-center">
                    <div className='banner-home-1 lg:w-1/2 text-left px-7'>
                        <p className='text-ungu-1 font-extrabold text-lg tracking-tight xl:pb-2'>3D game dev</p>
                        <h1 className='text-white font-bold xl:text-5xl text-3xl xl:leading-relaxed'>Work that <br/> we produce for our clients</h1>
                        <p className='text-white my-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolore nostrum ullam illo! Quo provident molestiae facere rem, molestias incidunt.</p>
                        <button className='text-white bg-gradient-1 p-3 rounded-full'>
                            Get more details
                        </button>
                    </div>
                    <div className='banner-home-2 xl:w-1/2 lg:w-1/2 flex justify-center content-center items-center xl:justify-end '>
                        <div className='xl:w-4/6 w-4/6 hidden lg:block'>
                            <img src={JoyStick} alt="" />
                        </div>
                    </div>
                </div>
                <div  className="xl:py-16 py-7 " >
                    <Trending/>
                </div>
                <div className='text-center flex justify-center content-center xl:px-40 p-4'>
                    <h1 className=' text-white xl:text-3xl text-lg font-semibold leading-loose'>Lorem ipsum dolor sit amet elit. Consectetur est expedita similique at corrupti possimus.</h1>
                </div>
                <div className='lg:py-16'>
                    <div>
                        <h1 className='text-white xl:text-start text-center my-2 font-semibold text-3xl'>Lorem ipsum</h1>
                        <p className='text-white xl:text-start text-center xl:p-0 p-2 xl:w-1/2 font-thin leading-loose lg:py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam numquam dolor consequatur harum odit delectus accusamus officia voluptatem a.</p>
                    </div>
                    <div className='xl:py-10 p-4'>
                        <img src={Spiderman} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Utility />
            </div>
            <div className='recent-project h-auto xl:px-24 xl:py-16 px-7 py-10'>
                <div className='text-white text-center '>
                    <h1 className='text-3xl font-bold'>Our Recent Projects</h1>
                    <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quae. <br />Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex flex-wrap gap-4 content-center md:py-6 justify-center'>
                    <div className='w-[264px] md:w-auto'>
                        <img src={Rp1} alt="image_Rp" />
                    </div>
                    <div className='w-[264px] md:w-auto '>
                        <img src={Rp2} alt="image_Rp" />
                    </div>
                    <div className='w-[264px] md:w-auto'>
                        <img src={Rp3} alt="image_Rp" />
                    </div>
                    <div className='w-[264px] md:w-auto'>
                        <img src={Rp4} alt="image_Rp" />
                    </div>
                    <div className='w-[264px] md:w-auto'>
                        <img src={Rp5} alt="image_Rp" />
                    </div>
                    <div className='w-[264px] md:w-auto'>
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
            <div>
                <Footer />
            </div>
        </div>
    </div>
)
}

export default Home