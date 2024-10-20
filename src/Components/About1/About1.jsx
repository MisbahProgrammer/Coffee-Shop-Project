import React from 'react'

function About1() {
  return (
    <div>
        <div className='flex items-center justify-center gap-16 relative'>
            <div className='w-[40%] p-5'>
                <h3 className='text-[#603809] playfair text-7xl'>Discover the best coffee</h3>
                <p className='text-xl my-5'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                <button className='bg-[#F9C06A] py-3 px-5 rounded-full w-32 text-black font-bold mt-5'>Learn More</button>
            </div>
            <div><img src="Mask group.png" className='w-[35vw]' alt="" /></div>
        </div>
        <div className='absolute top-[140%]'><img src="coffee_blast1.png" alt="" className='' /></div>
    </div>
  )
}

export default About1