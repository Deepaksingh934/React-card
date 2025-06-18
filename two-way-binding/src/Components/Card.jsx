import React from "react";

const Card = (e) => {

  return (
    <>
        <div className=" w-[20%] h-[40%] border py-5 m-5 rounded-xl flex flex-col items-center">
            <img className="w-32 h-32  rounded-full bg-pink-200 object-cover object-top" src={e.photo} alt="" />
            <h1 className='text-2xl mt-5 text-center font-semibold'>{e.user}</h1>
            <h2 className="text-blue-400 mt-3 text-2xl text-center font-sans">{e.prof}</h2>
            <h3 className="text-2xl mt-3 text-center">{e.city},{e.age}</h3>
            <button className="text-xl bg-emerald-600 px-5 py-2 mt-5  rounded-xl">Follow</button>
        </div>
    </>
  )
}

export default Card;
