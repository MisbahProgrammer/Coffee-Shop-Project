import React from "react";

function Home() {
  return (
    <div className='w-full h-[100vh] bg-[url("public/coffee_image.png")] bg-cover'>
      <header className="flex items-center justify-around mx-auto p-5">
        <div>
          <img src="Bean Scene.png" alt="" />
        </div>
        <div>
          <ul className="md:flex md:items-center md:justify-center md:gap-14 text-white text-xl">
            <li>
              <a href="" className="hover:text-[#F9C06A]">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#F9C06A]">
                Menu
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#F9C06A]">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#F9C06A]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className=" text-white">
          <button className="mr-10 text-xl hover:text-[#F9C06A]">
            Sign In
          </button>
          <button className="text-xl text-black bg-[#F9C06A] py-3 px-5 rounded-full hover:text-white">
            Sign Up
          </button>
        </div>
      </header>
      {/* ----------------------------------------- */}
      <div className="flex items-left justify-around flex-col h-[50%] w-[30%] md:mt-52 md:ml-56 text-white playfair">
        <p className="text-2xl mb-5">We’ve got your morning covered with</p>
        <img src="Coffee.png" alt="" className="p-3 m-3" />
        <p className="playfair text-xl">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="bg-[#F9C06A]  playfair text-xl py-3 px-5 rounded-full w-40 text-black font-bold mt-5 hover:text-white">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Home;
