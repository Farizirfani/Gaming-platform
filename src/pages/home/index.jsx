import React from 'react'
import JoyStick from '../../assets/image/joy_stick 1.png'
import Trending from '../../components/trendings'

const Home = () => {
  return (
    <div className='canvas-home'>
        <h1 className='logo'>ini dari logo</h1>
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
                <div className='banner-home-2 w-1/2  justify-end items-end content-end flex z-1 -bottom-40'>
                    <div className='w-4/6'>
                        <img src={JoyStick} alt="" />
                    </div>
                </div>
            </div>
            <div  className="py-16" >
                <Trending/>
            </div>
            <div className='text-center px-40'>
                <h1 className=' text-white text-3xl font-semibold leading-loose'>Lorem ipsum dolor sit amet elit. Consectetur est expedita similique at corrupti possimus.</h1>
            </div>
        </div>
    </div>
)
}

export default Home