import React from "react";

function Items({data}) {

  return (
    <div className="w-[90%] sm:h-[430px] mx-auto text-center bg-[#FFF9F1] border relative">
      <img src={data.img} alt="" className="w-full" />
      <h3 className="text-2xl text-[#603809] playfair">{data.name}</h3>
      <p className="text-xl playfair">{data.ingredients}</p>
      <p className="text-xl">{data.price}</p>
      <button className="bg-[#F9C06A] py-3 px-5 border-none rounded-full text-center absolute left-[33%] mt-3 font-bold">{data.btn}</button>
    </div>
  );
}

export default Items;
3