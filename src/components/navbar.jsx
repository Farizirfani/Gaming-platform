import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {


        const [changeColor, setChangeColor] = useState(false);
        const [isOpen, setIsOpen] = useState(false);

        const changeBackgroundColor = () => {
            if (window.scrollY >= 1) {
                setChangeColor(true);
            } else {
                setChangeColor(false);
            }
        };

        useEffect(() => {
            changeBackgroundColor();
            window.addEventListener("scroll", changeBackgroundColor)
        })

        // change activer 


return (
    <>
        <div className="mobile  top-0 sticky z-50">
            <div className={changeColor ? `bg-active ` : 'bg-nonactive'} >
                <div className='xl:flex xl:justify-between content-center px-8 py-6 transition-transform'>
                    <div className="logo text-white text-2xl font-bold  flex justify-between  items-center">
                        <h1>Logo</h1>
                        <button onClick={() => setIsOpen(!isOpen)} className='xl:hidden'>
                            <i class={` ${!isOpen ? 'block' : 'hidden'}  fa-solid fa-bars-staggered`}></i>
                            <i class={` ${isOpen ? 'block' : 'hidden'}  fa-solid fa-xmark`}></i>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'}  xl:flex xl:justify-evenly gap-x-10 content-center`}>
                        <div >
                            <Link className='flex justify-evenly text-white hover:border-b-4 border-indigo-600 border-solid' to='/'>
                                Home
                            </Link>
                        </div>
                        <div >
                            <Link className='flex justify-evenly text-white hover:border-b-4 border-indigo-600 border-solid' to='/about'>
                                About us
                            </Link>
                        </div>
                        <div >
                            <Link className='flex justify-evenly text-white hover:border-b-4 border-indigo-600 border-solid' to='/portfolio'>
                                Portofolio
                            </Link>
                        </div>
                        <div >
                            <Link className='flex justify-evenly text-white hover:border-b-4 border-indigo-600 border-solid' to='/news'>
                                News
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar