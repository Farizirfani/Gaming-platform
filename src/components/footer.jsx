import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='md:flex flex-wrap p-6 justify-between'>
          <div className='flex-wrap md:p-4 p-2'>
            <h1 className='text-white font-bold text-xl'>LOGO</h1>
            <p className='text-white font-light py-4'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Quae, eveniet?</p>
            <p className='text-white text-sm font-thin py-2'>@LOGO</p>
          </div>
          <div className='flex-wrap text-white md:p-4 p-2'>
            <h1>Abouts us</h1>
            <br />
            <p>Zeus</p>
            <p>Portofolio</p>
            <p>Careers</p>
          </div>
          <div className='flex-wrap text-white md:p-4 p-2'>
            <h1>Contact us</h1>
            <br />
            <p>Lorem ipsum dolorexpedita inventore <br/> quas est tempore! Provident.</p>
            <br />
            <p>08xxxxx</p>
          </div>
        </div>
        <hr />
        <h1 className='text-center text-white font-thin p-3'>Copyright | All rights</h1>
    </div>
  )
}

export default Footer