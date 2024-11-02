import React from 'react'

function Footer() {
  return (
    <div className='w-full md:h-[60vh] bg-[url("fotter_image.png")] bg-no-repeat bg-cover -z-20'>
        <div className='w-full h-[60vh] hidden md:absolute bg-[url("Rectangle-7.png")] opacity-55 z-10 '></div>
        <div className='flex flex-col md:flex-row flex-wrap justify-between w-[80%] h-[100%] mx-auto pt-[10%]'>
        <div className='md:w-[25%] flex flex-col gap-10 z-50'>
            <img src="Bean Scene.png" alt="" className='md:w-[250px] bg-[#603809] p-5 rounded-lg' />
            <p className='text-xl md:text-white text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='w-[80%] flex gap-5 md:bg-transparent'>
                <img src="Group-50.png" alt="" className=''/>
                <img src="Group-51.png" alt="" className=''/>
                <img src="Group-52.png" alt="" className=''/>
                <img src="Group-53.png" alt="" className=''/>
            </div>
        </div>
        <div className='md:text-white z-50 '>
            <h3 className='playfair font-bold text-xl md:text-3xl mb-10'>About</h3>
            <ul className='text-xl playfair flex flex-row md:flex-col gap-5'>
                <li>Menu</li>
                <li>Features</li>
                <li>News & Blogs</li>
                <li>Help & Support</li>
            </ul>
        </div>
        <div className='md:text-white z-50'>
            <h3 className='playfair font-bold text-xl md:text-3xl mb-10'>Company</h3>
            <ul className='text-xl playfair flex flex-row md:flex-col gap-5'>
                <li>How we work</li>
                <li>Terms of Services</li>
                <li>Pricing</li>
                <li>FAQ</li>
                </ul>
        </div>
        <div className='md:text-white z-50'>
            <h3 className='playfair font-bold text-xl md:text-3xl mb-10'>Contact Us</h3>
            <ul className='md:text-xl playfair flex flex-row md:flex-col md:gap-5 gap-2'>
                <li>XYZ Building ,Road 123, City Abc - 01234 </li>
                <li>+1 1234 5678 9635</li>
                <li>beanscene@gmail.com</li>
                <li>www.beanscene.com</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer