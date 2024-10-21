import React from 'react'
import Card from './Card.json'
import Cards from './Cards'
function Why() {
  return (
    <div className='mt-44'>
        <h1 className='text-[#603809] text-7xl text-center p-3 playfair my-10 '>Why are we different?</h1>
        <p className='text-xl text-center playfair my-5'>We don’t just make your coffee, we make your day!</p>
        <div className='flex items-center justify-center gap-5 w-[80%] mx-auto mt-10'>
        {
            Card.map((data)=>{
                return(
                    <Cards key={data.id} data={data} />
                )
            })
        }
        </div>
        <div className='w-[30%] text-center mx-auto gap-5'>
        <p className='text-xl playfair'>Great ideas start with great coffee, Lets help you achieve that 
        <span className='text-[#603809] playfair text-5xl'> Get started today.</span></p>
        <button className='bg-[#F9C06A] text-xl playfair font-bold py-3 px-6 rounded-full mt-10'>Join us</button>
        </div>

    </div>
  )
}

export default Why