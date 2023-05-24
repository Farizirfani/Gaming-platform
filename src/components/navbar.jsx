import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'



const Navbar = () => {

        const [changeColor, setChangeColor] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        const [isTop, setIsTop] = useState(true);
        const { pathname } = useLocation();

        const changeBackgroundColor = () => {
            if (window.scrollY >= 1) {
                setChangeColor(true);
            } else {
                setChangeColor(false);
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        useEffect(() => {
            changeBackgroundColor();
            window.addEventListener("scroll", changeBackgroundColor);

            document.addEventListener('scroll', () => {
            const scrolled = document.documentElement.scrollTop;
            setIsTop(scrolled === 0);
            },[pathname]);
        })

return (
    <>
        <div className="mobile  top-0 sticky z-50">
            <div className={changeColor ? `bg-active ` : 'bg-nonactive'} >
                <div className= {`navbar ${isTop ? '' : 'navbar-scrolled'} xl:flex xl:justify-between content-center px-8 py-6 transition-transform items-center`}>
                    <div className="logo text-white text-2xl font-bold  flex justify-between  items-center">
                        <h1>LOGO</h1>
                        <button onClick={() => setIsOpen(!isOpen)} className='xl:hidden'>
                            <i class={` ${!isOpen ? 'block' : 'hidden'}  fa-solid fa-bars-staggered`}></i>
                            <i class={` ${isOpen ? 'block' : 'hidden'}  fa-solid fa-xmark`}></i>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'}  xl:flex xl:justify-evenly gap-x-10 content-center items-center`}>
                        <div >
                            <NavLink onClick={scrollToTop} className='flex justify-evenly text-white hover:text-purple-600' to='/'>
                                Home
                            </NavLink>
                        </div>
                        <div >
                            <NavLink onClick={scrollToTop} className='flex justify-evenly text-white hover:text-purple-600' to='/about'>
                                About us
                            </NavLink>
                        </div>
                        <div >
                            <NavLink onClick={scrollToTop} className='flex justify-evenly text-white hover:text-purple-600' to='/portfolio'>
                                Portofolio
                            </NavLink>
                        </div>
                        {/* <div >
                            <NavLink onClick={scrollToTop} className='flex justify-evenly text-white hover:text-purple-600' to='/news'>
                                News
                            </NavLink>
                        </div> */}
                        <div className=''>
                            <div className='text-white bg-[#7303C0] px-[19px] py-2 rounded-md flex justify-evenly neon'>
                                <a href="#a">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar