import React from 'react'

function Feedback() {
  return (
    <>
    <h1 className='text-2xl sm:text-4xl md:text-5xl text-[#603809] playfair text-center mt-5 sm:mt-10 md:mt-20'>Our coffee perfection feedback</h1>
    <p className='sm:text-xl playfair text-center mt-10'>Our customers has amazing things to say about us</p>
    <div className='md:w-[66%] md:h-[62vh] mx-auto bg-[#FFF9F1] relative mt-10'>
        <img src="string.png" alt="" className='pt-5 md:pt-20 md:pl-20 pl-5 pb-5 w-[15%]' />
        <p className='text-xl md:text-2xl text-center w-[90%] md:w-[70%] mb-5 mx-auto'>I had a fantastic experience at this coffee shop! The cappuccino was rich, creamy, and had the perfect balance of flavor. The chai latte was absolutely delightful, with a warm and soothing blend of spices. I also tried the macchiato, which was smooth and had just the right amount of sweetness. The espresso, with its bold and strong flavor, was a great pick-me-up. The shop itself has a cozy, welcoming atmosphere, and the staff were incredibly friendly and attentive. With such a wide variety of drinks to choose from, I’m definitely looking forward to my next visit!</p>
        <h3 className='text-3xl playfair text-center text-[#603809] font-bold mb-5'>Misbah ur Rehman</h3>
        <p className='text-center text-xl'>Project Manager</p>
        <img src="about.png" alt="" className='w-[200px] mx-auto absolute left-[20%] md:left-[43%]' />
    </div>
    </>
  )
}

export default Feedback