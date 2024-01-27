import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


const AvatarCard = ({ number, title, description, image }) => {
    return (
      <div className="flex flex-col mt-[5vw] items-center justify-start min-h-[80vh] gap-5 rounded-[2vw] w-1/4 bg-white shadow-lg">
        <div className="text-[8vw] relative  text-[#7559ff] text-start font-bold w-[80%]">{number}</div>
        <div className="text-3xl text-start relative bottom-[2vw] font-semibold w-[80%]">{title}</div>
        <div className="text-gray-600 relative bottom-[2vw] text-start w-[80%]">{description}</div>
        <div
          className="bg-cover h-[40%] border bg-center w-[80%]"
        >
            {/* image */}
        </div>
      </div>
    );
  };
  


const Avatars = () => {
  return (
    <>
   
    <div className='flex w-full'>

        <div className='w-[40%] flex flex-col items-center p-12'>
           <div className='text-[10vw] flex flex-col  '>
           <p className=''>How it</p>
           <p className='relative bottom-[5vw]'>Works</p>
           </div>
           <div>
            <div className='w-full flex justify-center '>
            <button className='flex justify-between items-center gap-6 bg-[#6549f1] text-white py-6 px-6 rounded-lg shadow-md hover:bg-[#755af7] transition-colors'>
                <div>
                    {/* image */} images
                </div>
                <p>Get started for free</p>
                <FaArrowRight className='-ml-2'/>
                
            </button>
            </div>
            
           </div>
        </div>
        <div className='w-[60%]  flex flex-col justify-around text-start'>
            <div className='h-[60%] border '>
                <div className='relative -my-16  ml-[10vw] p-5 w-[50vw] h-[50vh] shadow-md  border-gray-300 rounded-[2vw]'>
                <button className="absolute top-8 left-8 bg-[#332E57] hover:bg-[#7559FF] text-white font-bold py-2 px-4 rounded-lg">
        Demo
      </button>
                </div>
                
            </div>
            <div className='text-3xl border text-center'>
            <p >Whether you're a professional or beginner, you can </p>
            <p >create stunning videos in minutes instead of hours.</p>
            
            </div>
            
            
    </div>
      
    </div>

<div className='border flex justify-center gap-9'>


    <AvatarCard number="01" title="Create or choose an avatar" description="Choose from over 100+ AI avatars or customize your own."/>
    <AvatarCard number="02" title="Record or choose a voice" description="Choose from a collection of high-quality voices or record your own."/>
    <AvatarCard number="03" title="Select a template or start from scratch" description="Select from an extensive array of ready-to-use templates for any scenario, or begin with a clean slate."/>



</div>

    </>
  )
}

export default Avatars
