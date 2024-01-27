import React, { useState } from "react";
import { FaBars, FaArrowRight } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSailing,
} from "react-icons/md";
import "./App.css";
import InteractiveShowcase from "./components/InteractiveShowcase";
import CardComponent from "./components/CardComponent";

const HomePage = () => {
  // State to track which nav link is hovered
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <>
      <div className="bg-[#E6E0F3] min-h-screen flex flex-col">
        {/* Navbar */}
        <div className="container mx-auto px-4 py-[1vw] flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Bold company name */}
            <div className="text-lg md:text-xl font-bold text-gray-800">
              HeyGen
            </div>
          </div>
          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex ml-[10vw] ">
            {["Use Cases", "Features", "Resources", "Pricing"].map(
              (text, index) => (
                <div
                  key={text}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  className={`flex items-center text-gray-800 px-3 py-2 rounded-md transition-colors hover:cursor-pointer ${
                    hoverIndex === index
                      ? "bg-[#dbd5ea] rounded-[10vw] text-[#7559ff]"
                      : ""
                  }`}
                >
                  {text !== "Pricing" ? (
                    <>
                      <p>{text}</p>
                      {hoverIndex === index ? (
                        <MdKeyboardArrowUp
                          className="ml-2  text-[#7559ff]"
                          size={20}
                        />
                      ) : (
                        <MdKeyboardArrowDown
                          className="ml-2 text-[#7559ff]"
                          size={20}
                        />
                      )}
                    </>
                  ) : (
                    <p>{text}</p>
                  )}
                </div>
              )
            )}
          </div>
          <div className="flex items-center space-x-4">
            {/* Contact Sales and Get Started buttons */}
            <a
              href="#"
              className="text-gray-800 hover:text-[#7559ff] transition-colors hidden md:block"
            >
              Contact Sales
            </a>
            <button className="bg-[#6E52FC] text-white py-4 px-4 rounded-lg shadow-md hover:bg-[#5e42ec] transition-colors">
              Get started
            </button>
            {/* Hamburger Menu Icon */}
            <div className="text-2xl md:hidden">
              <FaBars />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="container mx-auto  p-4 text-center flex-1 flex flex-col justify-center items-center mt-[2vw]">
          <h1 className="text-5xl md:text-7xl text-[#7559FF] font-bold mb-6">
            AI-powered video <br className="hidden md:block" />
            <span className="text-[#232833]">creations at scale</span>
          </h1>
          <p className="text-xl mb-8">
            Effortlessly produce studio quality videos{" "}
            <br className="hidden md:block" />
            with AI-generated avatars and voices.
          </p>
          <div>
            <button className="flex items-center bg-[#6E52FC] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#6245F0] transition-colors">
              Get started for free
              <FaArrowRight className="ml-2" />
            </button>
            <p className="xl:text-[80%] mt-[3%]">No credit card needed</p>
          </div>
          <div className="container mx-auto p-4">
            <div className="overflow-hidden relative">
              <div className="marquee flex animate-marquee space-x-4">
                {/* Placeholder divs for logos */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="min-w-max bg-[#E6E0F3] rounded flex items-center justify-center text-lg font-semibold h-24 w-24"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="min-h-screen">
            <InteractiveShowcase />
          </div>
          <div>
          <div className="min-h-[60vh] mt-20 relative flex ">

            
            <div className="flex flex-col">
              <CardComponent
                title1="Sales outreach"
                title2="that converts"
                description="Create personalized outreach videos at scale"
                imageUrl="path-to-your-cover-image.jpg" // Replace with your actual image path
              />
              <CardComponent
                title1="Content marketing"
                title2="that engage"
                description="Supercharge your content calendar with videos"
                imageUrl="path-to-your-cover-image.jpg" // Replace with your actual image path
              />
            </div>

            <div className="flex flex-col relative bottom-40 ">
              <CardComponent
                title1="Product marketing"
                title2="that resonates"
                description="Produce engaging & concise product videos"
                imageUrl="path-to-your-cover-image.jpg" // Replace with your actual image path
              />
              <CardComponent
                title1="Learning & development"
                title2="that teaches"
                description="Create training videos your team will actually watch"
                imageUrl="path-to-your-cover-image.jpg" // Replace with your actual image path
              />
            </div>
          </div>
          </div>

        </div>
        

        {/* Marquee effect */}
      </div>
    </>
  );
};

export default HomePage;
