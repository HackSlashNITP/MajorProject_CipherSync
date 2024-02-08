import React from 'react'

export const Card = ({ name }) => {
  return (

    <a href="/">
      <div className="w-[285px] h-[300px] rounded-lg overflow-hidden shadow-lg bg-[#2563EB]">
        <img
          className="w-[285px] h-[195px] rounded-lg"
          src="\res\unsplash_L0nipfx-Ry4.jpg"
          alt="Sunset in the mountains"
        />
        <div className='flex ml-2 mt-6 '><h1 className="text-[23px] font-bold text-white font-['merriweather']">
          {name}
        </h1></div>

      </div>
    </a>


  )
}
