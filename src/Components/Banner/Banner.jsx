import React from 'react'

function Banner() {
  return (
    <div className=' bg-[url("public/Rectangle-14.png")] bg-cover bg-no-repeat w-full h-[50vh] -z-50 relative mt-20 overflow-hidden'>
      <div className='w-full h-[50vh] absolute bg-[#603809] opacity-55 z-0 '></div>
      <div className='w-full h-[50vh] absolute bg-[url("coffee_bean.png")] bg-no-repeat left-[74%] z-10 '></div>
      <img src="cup.png" alt="" className='w-[300px] h-auto absolute top-8 left-[78%] z-20 '/>
      <div className='z-10 p-10 absolute w-[50%] top-20 left-20'>
        <h1 className='text-7xl playfair text-white mb-10'>Get a chance to have an
        Amazing morning</h1>
        <p className='text-xl playfair text-white w-[50%] mb-10'>We are giving you are one time opportunity to
        experience a better life with coffee.</p>
        <button className='bg-[#F9C06A] py-3 px-5 rounded-full font-bold'>Order Now</button>
        </div>
    </div>
  )
}

export default Banner