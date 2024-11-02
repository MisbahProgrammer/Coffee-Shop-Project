import React from 'react'
import Card from './Card.json'
import Cards from './Cards'
function Why() {
  return (
    <div className='mt-10 sm:mt-20 md:mt-44 overflow-hidden'>
        <h1 className='text-[#603809] text-2xl sm:text-4xl md:text-7xl text-center p-3 playfair my-10 '>Why are we different?</h1>
        <p className='md:text-xl text-center playfair my-5'>We don’t just make your coffee, we make your day!</p>
        <div className='flex items-center md:flex-row flex-col overflow-hidden justify-center gap-5 w-[80%] mx-auto mt-10'>
        {
            Card.map((data)=>{
                return(
                    <Cards key={data.id} data={data} />
                )
            })
        }
        </div>
        <div className='md:w-[30%] text-center mx-auto gap-5'>
        <p className='md:text-xl playfair'>Great ideas start with great coffee, Lets help you achieve that <br></br>
        <span className='text-[#603809] playfair text-xl sm:text-3xl md:text-5xl'> Get started today.</span></p>
        <button className='bg-[#F9C06A] text-xl playfair font-bold py-3 px-6 rounded-full mt-10'>Join us</button>
        </div>

    </div>
  )
}

export default Why