import React from 'react'

import PhoneIcons from '../../assets/icons/phone-icon.png'


export default function Utility() {
    return(
        <div className="utility-home h-auto">
            <div className='bg-home h-screen'>
                <div className='p-4 m-2 justify-center content-center'>
                    <h1 className='text-center text-white text-2xl font-semibold py-10'>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Doloremque, dicta?</h1>
                    <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla repudiandae, officiis voluptate eos rem?</p>
                    <div className=' flex justify-center place-items-center xl:m-2 xl:py-20'>            
                        <div className="flex flex-wrap xl:gap-10 justify-center   p-2">
                            <Icons icon={PhoneIcons} title={"Mobile Phone"} />
                            <Icons icon={PhoneIcons} title={"Mobile Phone"} />
                            <Icons icon={PhoneIcons} title={"Mobile Phone"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Icons = (props) => {
    return(
        <div className='flex-col justify-center content-center place-content-center'>
            <div>

            <img className='bg-white rounded-full w-12 p-3' src={props.icon} alt="" />
            </div>
            <div>
                
            <h1 className='text-white xl:py-5'>{props.title}</h1>
            </div>
        </div>
    )
}