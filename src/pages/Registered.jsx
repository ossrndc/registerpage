import React from "react";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Registered = () => {
  return (
    <div className="w-full h-screen overflow-hidden px-4 py-4 md:px-10 md:py-6 flex flex-col justify-between items-center text-center relative">
      {/* OSS Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-16 z-50">
        <img src="/OSS.png" alt="OSS Logo" className="w-14 sm:w-20 md:w-28" />
      </div>

      {/* Decorative Icons */}
      <div className="absolute md:hidden top-[120px] left-4 md:top-[140px] md:left-[200px] z-10">
        <img
          src="/images/github.png"
          alt="HTML"
          className="w-10 sm:w-12 md:w-14"
        />
      </div>
      <div className="absolute bottom-[260px] hidden lg:block md:bottom-[100px] right-4 md:right-10 z-10">
        <img
          src="/images/zigzag.png"
          alt="Zigzag"
          className="w-12 invert md:w-26"
        />
      </div>

      {/* Arrow Icon */}
      <div className="fixed top-22 hidden xl:block left-10 md:top-76 md:left-70 z-60">
        <div className="flex items-center rotate-[310deg] md:rotate-[350deg]">
          <div className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[rgb(133,206,195)]"></div>

          <div
            className="w-0 h-0 
      border-t-[20px] border-t-transparent 
      border-b-[20px] border-b-transparent 
      border-l-[30px] border-l-[rgb(133,206,195)]
      sm:border-t-[28px] sm:border-b-[28px] sm:border-l-[42px]
      md:border-t-[40px] md:border-b-[40px] md:border-l-[60px]"
          ></div>
        </div>
      </div>

      <div className="fixed hidden xl:block bottom-0 left-0 rotate-40 sm:bottom-0 sm:-left-10 md:bottom-0 md:left-30 z-50 h-20 w-20 sm:h-48 sm:w-48 md:h-80 md:w-80">
        <img
          src="/images/line.png"
          alt="line"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Combined Image, Text and Social Links */}
      <div className="max-w-screen-md px-4 flex flex-col items-center space-y-2 md:space-y-4">
        {/* Laptop Image */}
        <div className="flex justify-center mt-18 md:mt-0 items-center">
          <img
            src="/images/done.png"
            alt="Laptop illustration"
            className="w-[300px] max-w-lg md:w-[600px] lg:w-[800px] lg:h-[500px]"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[rgb(133,206,195)] leading-snug">
            You've Registered Successfully. <br />{" "}
            <span className="md:text-xl text-black text-sm">
              *Check your spam folder(email)*
            </span>
          </h1>
          <p className="text-md sm:text-lg md:text-lg text-black mt-2 md:mt-2">
            For more information, check out our
            <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-2 py-1 rounded-md font-extrabold mx-1 inline-block">
              Team OSS
            </span>
            desk or contact us at{" "}
            <a href="tel:+918529715481">(91-8529715481)</a>
          </p>
        </div>

        
        <div className="flex items-center gap-3 md:gap-6 mt-2 md:mt-0">
          <h2 className="text-lg md:text-lg font-semibold text-black">
            Let's Connect :
          </h2>
          {/* <div className="border-2 border-gray-500 rounded-xl p-1"> */}
            <a
              href="https://www.instagram.com/team__oss?igsh=ZzB3d2R3ZW5wZ2dw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 h-6 w-6 md:h-12 md:w-8 transition hover:scale-120" />
            </a>
          {/* </div> */}
          
          {/* <div className="border-2 border-gray-500 rounded-xl p-1"> */}
            <a
              href="https://www.linkedin.com/company/team-oss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 h-6 w-6 md:h-12 md:w-8 transition hover:scale-120" />
            </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Registered;
