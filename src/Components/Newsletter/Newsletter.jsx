import React from 'react'

function Newsletter() {
  return (
    <div className='w-full h-[50vh] mt-48 md:mt-32 bg-[url("Rectangle-14.png")] bg-no-repeat bg-cover relative'>
        <div className='w-full h-[50vh] absolute bg-[#603809] opacity-55 z-0 '></div>
        <div className='absolute w-full'>
        <h3 className='text-xl sm:text-3xl md:text-6xl text-white playfair text-center mt-10 md:mt-28'>Subscribe to get the Latest News</h3>
        <p className='md:text-xl text-white playfair text-center mt-5 md:mt-10'>Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className='w-full text-center mt-3 md:mt-10'>
            <input type="text" placeholder='Enter your mail' className='md:p-5 p-2 border-none rounded-l-lg md:w-[25%]'/>
            <input type="submit" value="Subscribe" className='bg-[#F9C06A] p-2 md:py-5 md:px-5 font-bold playfair rounded-r-lg'/>
        </div>
        </div>
        <img src="pngwing-1.png" alt="" className='hidden md:absolute -bottom-36 z-50'/>
        <img src="pngwing-2.png" alt="" className='hidden md:absolute right-0 -bottom-36 z-50'/>
    </div>
  )
}

export default Newsletter