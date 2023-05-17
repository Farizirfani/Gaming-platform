import React from 'react';

const TeamCard = (props) => {
  return (
    <div className='bg-[#1C140F] w-auto h-auto m-2 text-center flex-wrap rounded-xl px-16 py-10'>
        <div className='flex justify-center'>
            <img src={props.image} alt="" />
        </div>
        <div className='text-white'>
            <h1 className='font-bold text-xl'>{props.name}</h1>
            <p className='font-light'>{props.title}</p>
        </div>
    </div>
  )
}

export default TeamCard