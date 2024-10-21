import React from 'react'

function Cards({data}) {
  return (
    <div className='w-[25%] h-[300px] bg-[#fff8f0] p-5 border-[#FFEED8] border-[2px]'>
        <img src={data.img} className='text-center w-[30%] mx-auto mb-5' alt="" />
        <h3 className='playfair text-3xl text-[#603809] text-center p-3 mb-3'>{data.title}</h3>
        <p className='text-xl playfair text-center'>{data.details}</p>
    </div>
  )
}

export default Cards