import React from 'react';

const TeamCard = (props) => {
  return (
    <div className='bg-[#1C140F] w-auto h-auto m-2 text-center rounded-xl p-16'>
        <img src={props.image} alt="" />
        <div>
            <h1 className='text-white font-bold text-xl'>{props.name}</h1>
        </div>
    </div>
  )
}

export default TeamCard