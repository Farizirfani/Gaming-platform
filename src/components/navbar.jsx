import React, { useEffect, useState } from 'react'



const Navbar = () => {


        const [changeColor, setChangeColor] = useState(false);

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


return (
    <>
        <div className={changeColor ? `bg-active flex justify-between top-0 sticky xl:h-20 xl:py-4 xl:px-6 z-50` : 'bg-nonactive flex justify-between top-0 sticky xl:h-20 xl:py-4 xl:px-6 z-50'} >
            <div className="logo text-white text-2xl font-bold">
                <h1>Logo</h1>
            </div>
            <div className='flex justify-evenly gap-10 content-center'>
                <div >
                    <a className='flex justify-evenly text-white hover:border-b-4 border-indigo-600 border-solid' href="#a">testing</a>
                </div>
                <div className='flex justify-evenly text-white'>
                    <h1>testing</h1>
                </div>
                <div className='flex justify-evenly text-white'>
                    <h1>testing</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar