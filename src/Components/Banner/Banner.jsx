import React from 'react'

function Banner() {
  return (
    <div className=' bg-[url("public/Rectangle-14.png")] md:bg-cover bg-center bg-no-repeat w-full h-[50vh] -z-50 relative mt-20 overflow-hidden'>
      <div className='w-full h-[50vh] absolute bg-[#603809] opacity-55 z-0 '></div>
      <div className='w-full h-[50vh] absolute bg-[url("coffee_bean.png")] bg-no-repeat left-[74%] z-10 '></div>
      <img src="cup.png" alt="" className='md:w-[300px] w-[150px] h-auto absolute top-8 md:left-[78%] left-[60%] z-20 '/>
      <div className='z-10 p-5 sm:p-7 md:p-10 absolute w-[70%] md:w-[50%] md:top-20 md:left-20'>
        <h1 className='text-2xl font-bold sm:text-4xl md:text-7xl playfair text-white sm:mb-5 md:mb-10'>Get a chance to have an
        Amazing morning</h1>
        <p className='md:text-xl playfair text-white md:w-[50%] mb-5 md:mb-10'>We are giving you are one time opportunity to
        experience a better life with coffee.</p>
        <button className='bg-[#F9C06A] py-1 md:py-3 px-3 md:px-5 rounded-full font-bold'>Order Now</button>
        </div>
    </div>
  )
}

export default Banner