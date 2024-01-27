// InteractiveFeature.js
import React, { useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import {ReactTyped} from 'react-typed';


const InteractiveFeature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const avatars = [
    {
      id: 1,
      content: "Hey there! Welcome to HeyGen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you...",
      color: 'bg-purple-300',
    },
    {
      id: 2,
      content: "Discover the features of our platform. Tailor-made solutions for your video production needs...",
      color: 'bg-green-300',
    },
    {
      id: 3,
      content: "Join the revolution of video editing with HeyGen. It's simple, efficient, and powerful...",
      color: 'bg-blue-300',
    },
  ];
  const [background, setBackground] = useState(avatars[activeIndex].color);

  const handleAvatarClick = (index) => {
    setActiveIndex(index);
    setBackground(avatars[index].color);
  };

  return (
    <div className={`relative my-10  ml-[10vw] p-5 w-[50vw] h-[50vh] ${background} shadow-video  border-gray-300 rounded-[2vw]`}>
      {/* Lower container */}
      <button className="absolute flex justify-center items-center gap-3  top-4 left-4 bg-[#332E57] hover:bg-[#7559FF] text-white font-bold py-3 px-4 rounded-lg">
        Demo
        <CiPlay1 />
      </button>

      

      {/* Upper container with rounded divs */}
      <div className="absolute  top-[6vw] h-[90%] shadow-md flex flex-col gap-6 rounded-[10%] p-5 bg-[#EEE9F7] space-x-4 w-[20vw] -ml-[12vw] border">
        <div className='flex gap-3 '>
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`h-12 w-12 flex  justify-center items-center rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#7559FF] text-white shadow-custom' : 'bg-gray-200'}`}
            onClick={() => handleAvatarClick(index)}
          >
            {avatar.id}
          </div>
        ))}
        </div>
        <div>
        <div className='flex justify-start'>
            <p className='text-[#7559FF]'> Script</p>
        </div>
        </div>
        
        <div>
            {/* Content with Typed effect */}
        <ReactTyped
        strings={[avatars[activeIndex].content]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
        </div>
      
      </div>
    </div>
  );
};

export default InteractiveFeature;
