import React from 'react'

import PhoneIcons from '../../assets/icons/phone-icon.png'
import PcIcons from '../../assets/icons/pc-icon.png'
import Ps4Icons from '../../assets/icons/ps4-icon.png'
import VrgIcons from '../../assets/icons/vr-glasses-icon.png'
import VrdIcons from '../../assets/icons/vr-design-icon.png'
import CubeIcons from '../../assets/icons/3d-cube-icon.png'


export default function Utility() {
    return(
        <div className="utility-home h-auto">
            <div className='bg-home h-auto'>
                <div className='p-4  justify-center content-center'>
                    <h1 className='text-center text-white text-2xl font-semibold py-10'>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Doloremque, dicta?</h1>
                    <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla repudiandae, officiis voluptate eos rem?</p>
                    <div className=' flex justify-center place-items-center xl:m-2 xl:py-20'>            
                        <div className="flex flex-wrap xl:gap-10 justify-center p-2">
                            <a href="3">
                                <Icons icon={PhoneIcons} title={"Mobile Phone"} />
                            </a>
                            <a href="3">
                                <Icons icon={PcIcons} title={"PC Game Development"} />
                            </a>
                            <a href="3">
                                <Icons icon={Ps4Icons} title={"PS Game Development"} />
                            </a>
                            <a href="3">
                                <Icons icon={VrgIcons} title={"Mobile Phone"} />
                            </a>
                            <a href="3">
                                <Icons icon={VrdIcons} title={"Mobile Phone"} />
                            </a>
                            <a href="3">
                                <Icons icon={CubeIcons} title={"Mobile Phone"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Icons = (props) => {
    return(
        <div className='flex-col justify-center content-center mb-2 xl:p-4 w-64 place-content-center hover:bg-black hover:bg-opacity-30 hover:rounded-md hover:-translate-y-1 duration-200'>
            <div className='flex justify-center'>
                <img className='bg-white rounded-full p-3' src={props.icon} alt="icons" />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-white xl:py-5 text-center'>{props.title}</h1>
            </div>
            <div className='flex justify-center'>
                <i className="fa-solid fa-arrow-right text-center text-ungu-1"></i>
            </div>
        </div>
    )
}