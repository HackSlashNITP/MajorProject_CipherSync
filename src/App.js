import logo from './logo.svg';
import './App.css';
import { Card } from './Component/Card';

import SliderS from './Component/Slider';
import { Task2 } from './Component/Task2';

function App() {
  return (
    <div className='bg-[#10101E] h-max'>
      <div className='fixed top-7 left-5 z-[-5px] text-white'></div>
      <center><h1 className='text-white font-bold justify-center text-5xl font-[montserrat]'>Top skills categories</h1>
        <br />
        <div className='underline underline-offset-[10px]'>
          <nav
            className=' text-white flex justify-center'>
            <ul className='flex'>
              <li className=' underline m-[10px] hover:text-[#DBFF00] underline-offset-4 '>Development & IT</li>
              <li className='underline m-[10px] hover:text-[#DBFF00] underline-offset-4  '>Design & Creative</li>
              <li className='underline m-[10px] hover:text-[#DBFF00] underline-offset-4  '>Sales & Marketing</li>
              <li className='underline m-[10px] hover:text-[#DBFF00] underline-offset-4  '>Writing & Translation</li>
            </ul>

          </nav>
          <center><hr className='bg-white w-[760px]' /></center>
          <center className='mt-[50px] w-[525px]'>
            <p className='font-[montserrat] text-white text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </center>

        </div>

        <div className='mt-[100px] mb-[30px]'> <SliderS /></div>
        <hr className='bg-white w-[1190px] mt-[100px]' />
        <br />
        <br />
        <br />
      </center>


      <Task2 />
    </div>
  );
}

export default App;
