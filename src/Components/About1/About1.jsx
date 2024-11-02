import React from 'react'

function About1() {
  return (
    <div>
        <div className='flex items-center md:justify-center flex-col-reverse md:flex-row gap-10  md:gap-16 relative'>
            <div className='md:w-[40%] p-5 text-center'>
                <h3 className='text-[#603809] playfair w-full text-center text-4xl mb-10 md:text-7xl'>Discover the best coffee</h3>
                <p className='p-10 md:p-0 md:w-[90%] md:text-2xl mt-5 '>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                <button className='bg-[#F9C06A] py-3 md:float-left px-5 rounded-full text-2xl w-44 text-black font-bold mt-10'>Learn More</button>
            </div>
            <div><img src="Mask group.png" className='w-[80%] md:w-[35vw] mx-auto' alt="" /></div>
        </div>
        <div className='hidden md:absolute top-[140%]'><img src="coffee_blast1.png" alt="" className='' /></div>
    </div>
  )
}

export default About1