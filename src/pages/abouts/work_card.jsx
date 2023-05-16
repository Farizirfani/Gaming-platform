import React from 'react'

const WorkCard = () => {
  return (
  <>
    <div className='md:flex flex-nowrap lg:justify-between md:justify-center py-3'>
        <BoxWork title='lorem' header='lorem'  body='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, et?' />
        <BoxWork title='lorem' header='lorem'  body='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga.Lorem, sit amet consectetur adipisicing elit. Laudantium, et?' />
        <BoxWork title='lorem' header='lorem'  body='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga. dolor,  adipisicing elit. Laudantium, et?' />
    </div>
    
  </>
  )
}

const BoxWork = (props) =>{
    return(
    <div className='py-[25px] px-4 bg-[#1d140e] rounded-xl sm:w-[378px]  w-auto h-auto m-2'>
        <div className='my-[10px] text-center  w-1/2 '>
            <h1 className='text-white bg-indigo-950 rounded-md py-[2px] px-[4px]'>{props.title}</h1>
        </div>
        <div className='text-white p-2'>
            <h1 className='py-2 text-xl'>{props.header}</h1>
            <h1 className='font-extralight py-3'>{props.body}</h1>
        </div>
    </div>
    )
}

export default WorkCard