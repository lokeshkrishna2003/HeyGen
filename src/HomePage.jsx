import React from 'react'

const HomePage = () => {
  return (
<>
<div className="bg-[#E6E0F3] min-h-screen flex flex-col justify-between">
    {/* navbar */}
      <header className="container mx-auto p-4">
        {/* Add navigation here if needed */}
      </header>
{/* mainheading */}
      <main className="container mx-auto p-4 text-center flex-1 flex flex-col justify-center items-center">
        <h1 className="text-7xl text-[#7559FF] font-bold mb-6"> 
          AI-powered video 
          <div>

        <span className='text-[#232833]'>creations at scale</span> 
          </div>
        </h1>
        <p className="text-xl mb-8">
          Effortlessly produce studio quality videos 
          <div>
          with AI-generated avatars and voices.
            </div>
        </p>
        <button className="bg-[#6E52FC] text-white py-3 px-6 rounded-lg shadow-md transform hover:bg-[#6245F0] duration-300"> {/* Replace #buttonColor with the exact button color */}
          Get started for free
        </button>
      </main>

      <footer className="container mx-auto p-4">
        <div className="marquee">
          <div className="flex space-x-4">
            {/* Add your logos here */}
            
            {/* Repeat your logos inside this div */}
          </div>
        </div>
      </footer>
    </div>
</>
  )
}

export default HomePage
