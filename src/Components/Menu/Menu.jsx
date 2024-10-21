import React from 'react'
import Items from './Items.json'
import Item from './Items.jsx'

function Menu() {
  return (
    <>
    <h1 className='text-[#603809] text-7xl text-center playfair mb-5'>Enjoy a new blend of coffee style</h1>
    <p className='text-center text-xl playfair mt-5 mb-10'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
    <div className='flex items-center w-[80%] mx-auto gap-5'>
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