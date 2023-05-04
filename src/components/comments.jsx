import React from 'react'

const Comment = () => {
  return (
    <div className='xl:py-16'>
        <div className='xl:my-6'>
            <h1 className='text-white text-2xl py-3'>Lorem, ipsum.</h1>
            <p className='text-white py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt saepe facilis maxime.</p>
        </div>
        <div className='box-comment w-auto rounded-md'>
          <div className='p-6 xl:flex flex-wrap justify-center items-center  xl:justify-between content-center'>
              <div className='text-white'>
                <h1 className='text-xl font-bold'>Stay in the loop</h1>
                <p className='font-thin py-2'>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Accusantium, aspernatur.</p>
              </div>
              <div className='bg-white px-3 mx-2 py-2 rounded-md'>
                <input className='py-1 ' type="text" placeholder='Enter Email addres' />
                <button className='mx-3 bg-purple-700 px-2 py-1 text-white rounded-md'>continue</button>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Comment