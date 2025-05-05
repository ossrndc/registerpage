import React from 'react';
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";

const Registered = () => {
  return (
    <div className="w-full h-screen overflow-hidden px-4 py-4 md:px-10 md:py-6 flex flex-col justify-between items-center text-center relative">

      {/* OSS Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-16 z-50">
        <img src="/OSS.png" alt="OSS Logo" className="w-14 sm:w-20 md:w-28" />
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-[120px] left-4 md:top-[140px] md:left-[200px] z-10">
        <img src="/images/html.png" alt="HTML" className="w-10 sm:w-12 md:w-14" />
      </div>
      <div className="absolute top-[120px] right-4 md:top-[160px] md:right-[160px] z-10">
        <img src="/images/react.png" alt="React" className="w-12 sm:w-14 md:w-16" />
      </div>
      <div className="absolute bottom-[40px] right-4 md:right-10 z-10">
        <img src="/images/zigzag.png" alt="Zigzag" className="w-16 md:w-26" />
      </div>
      <div className="absolute bottom-[50px] left-4 z-10">
        <img src="/images/dot.png" alt="Dot" className="w-6 md:w-8" />
      </div>
      <div className="absolute bottom-[50px] left-16 z-10">
        <img src="/images/dot.png" alt="Dot" className="w-6 md:w-8" />
      </div>
      
      {/* Combined Image, Text and Social Links */}
  <div className="max-w-screen-md px-4 flex flex-col items-center space-y-2 md:space-y-4">
    {/* Laptop Image */}
    <div className="flex justify-center mt-20 md:mt-0 items-center">
      <img
        src="/images/laptop.png"
        alt="Laptop illustration"
        className="w-[300px] max-w-lg md:w-[600px] lg:w-[800px] lg:h-[500px]"
      />
    </div>

    {/* Text Content */}
    <div className="text-center">
      <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#92FAE0] leading-snug">
        You've Registered Successfully.
      </h1>
      <p className="text-lg sm:text-lg md:text-lg text-white mt-8 md:mt-2">
        For more information, check out our
        <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-2 py-1 rounded-md font-extrabold mx-1 inline-block">
          Team OSS
        </span>
        desk or contact us at <a href="tel:+918529715481">91-8529715481</a>
      </p>
    </div>

    {/* Social Links */}
    <div className="flex items-center gap-3 md:gap-6 mt-8 md:mt-0">
      <h2 className="text-lg md:text-lg font-semibold text-white">Let's Connect:</h2>
      <a
        href="https://www.instagram.com/team__oss/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-8 md:w-10 bg-white p-1 rounded-lg hover:scale-105 transition-transform"
          src={Instagram}
          alt="Instagram"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/team-oss/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-8 md:w-10 bg-white p-1 rounded-lg hover:scale-105 transition-transform"
          src={Linkedin}
          alt="LinkedIn"
        />
      </a>
    </div>
  </div>
</div>

    
  );
};

export default Registered;
