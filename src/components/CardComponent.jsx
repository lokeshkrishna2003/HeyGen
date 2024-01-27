import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa"; // Ensure you have @heroicons/react installed
import { CiPlay1 } from "react-icons/ci";



const CardComponent = ({ title1,title2, description, imageUrl ,backGround }) => {
  return (
    <div className={`w-[40vw]  rounded-[2vw] overflow-hidden shadow-lg border bg-[${backGround}] text-gray-900 m-4`}>
      {/* Image section - leave it empty or use a cover image */}
      <div className= "h-72 bg-cover bg-center" >
        {/* image */}                        
      </div>

      <div className="bg-[#0b071d] p-5 flex flex-col justify-start items-start ">
        {/* Text section */}
        <div className="w-[18vw]  ml-4 mt-1">
          {/* Title */}
          <div className="font-bold text-start text-[#ffffff] text-3xl mb-1">
{title1}
<p className="text-[#bbacff]">{title2}</p>
          </div>

        </div>

        {/* Action section */}
        <div className="px-4 flex justify-between pb-2  w-full">
          <p className="text-[#bcc1cc] w-[19vw] text-start  text-base">{description}</p>
          <button className="bg-[#6E52FC] hover:bg-[#6245F0] text-white font-bold py-2 px-4 rounded-[0.9vw] inline-flex items-center">
            Get started
          <FaArrowRight size={10} className="ml-2" />
          </button>
          <button className="bg-[#150f36] text-white font-bold py-2 px-4 rounded-[0.9vw] inline-flex items-center">
            <CiPlay1 size={18} PlayclassName="w-4 h-4 mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
