import React from 'react'
import Items from './Items.json'
import Item from './Items.jsx'

function Menu() {
  return (
    <>
    <h1 className='text-[#603809] text-2xl sm:text-4xl md:text-7xl text-center playfair mb-5'>Enjoy a new blend of coffee style</h1>
    <p className='text-center md:text-xl playfair px-5 sm:mt-2 md:mt-5 sm:mb-5 md:mb-10'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
    <div className='flex md:flex-row flex-col w-[80%] mx-auto gap-20 md:gap-5 mt-5'>
        {
            Items.map((items)=>{
                return(
                <Item key={items.id} data={items}/>
                )
            })
        }
    </div>
    </>
  )
  
}

export default Menu