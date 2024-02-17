import React from 'react'

export const Task2 = () => {
  return (
    <div>
      <center>
        <div className='w-[1399px] h-[300px] border-amber-300 p-4 m-10 border-8'>
          <div className='flex'>
            <img src="/res/Frame.svg" alt="" className='m-6 p-3' />
            <div className='mt-4 pt-10 ml-[200px]'><p className='font-["Montserrat"] text-white text-[25px] font-semibold text-left'>
              Find the best Talent and best works based on
              <p>your skills from around the world.</p>
            </p>
              <button className='bg-[#DBFF00] hover:bg-[#DBFF11] text-black font-bold py-2 px-4 rounded-full w-[190px] ml-[320px] p-9'>Find Talent</button></div>
          </div>
        </div>

        <div className='mt-[300px] p-8'>
          <h1 className='text-white text-[53px] font-["Poppins"]'>Why <span className='text-[#DBFF00] font-extrabold'>Block</span> <b><span className='font-thin'>Opus</span></b></h1>
          <br />
          <p className='text-white w-[500px] text-[20px] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>


        <div className='flex mt-[100px] ml-[250px]'>
          <Card2 heading="Quality work" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
          <Card2 heading="Quality work" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
          <Card2 heading="Quality work" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
        </div>



        <div><h1 className='font-bold text-white text-[53px] mt-10'>People talk about us</h1></div>
      </center>
    </div>
  )
}





export const Card2 = ({ heading, para }) => {
  return (
    <div className='w-[500px]'>
      <center className='ml-6 p-10'>
        <img src="/res/Icon-jump.svg" alt="" />
        <h1 className='font-[Poppins] text-[28px] font-bold text-white mt-9'>{heading}</h1>
        <p className='w-[300px] text-white text-[20px] mt-8'>{para}</p>
      </center>
    </div>
  )
}
