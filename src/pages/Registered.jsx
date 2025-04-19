import React, { useEffect } from 'react';
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Registered = () => {
  const location = useLocation();
  const { fullData } = location.state || {};

  useEffect(() => {
    const sendDataToBackend = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/v1/", {
          fullData,
        });

        if (res.data.success) {
          console.log("✅ Data sent to backend successfully!");
        } else {
          console.log("❌ Backend verification failed.");
        }
      } catch (err) {
        console.error("❌ Error sending data to backend:", err);
      }
    };

    if (fullData ) {
      sendDataToBackend();
    }
  }, [fullData,]);

  return (
    <div className="w-full h-screen px-4 py-8 md:px-10 md:py-16 flex flex-col gap-8 items-center justify-center text-center">
      
      {/* OSS Logo */}
      <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
        <img src="/OSS.png" alt="OSS Logo" className="w-14 sm:w-20 md:w-28" />
      </div>

      {/* Decorative Icons */}
      <div className="fixed top-[120px] left-4 md:top-[160px] md:left-[200px] z-50">
        <img src="/images/html.png" alt="HTML" className="w-10 sm:w-12 md:w-14" />
      </div>
      <div className="fixed top-[120px] right-4 md:top-[200px] md:right-[160px] z-50">
        <img src="/images/react.png" alt="React" className="w-12 sm:w-14 md:w-16" />
      </div>
      <div className="fixed top-[600px] right-4 md:top-[600px] md:right-10 z-50">
        <img src="/images/zigzag.png" alt="Zigzag" className="w-16 md:w-26" />
      </div>
      <div className="fixed top-[560px] left-2 md:top-[400px] md:left-20 z-50">
        <img src="/images/dot.png" alt="Dot" className="w-6 md:w-10" />
      </div>
      <div className="fixed top-[560px] left-10 md:top-[400px] md:left-40 z-50">
        <img src="/images/dot.png" alt="Dot" className="w-6 md:w-10" />
      </div>

      {/* Main Illustration */}
      <div className="w-full flex justify-center items-center">
        <img
          src="/images/laptop.png"
          alt="Laptop illustration"
          className="w-3/4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl lg:h-[500px]"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-2xl md:text-4xl font-bold text-[#92FAE0]">
        You've Registered Successfully.
      </h1>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6">
        <h1 className='text-xl md:text-2xl font-semibold text-white'>Let's Connect :</h1>
        <a
          href="https://www.instagram.com/team__oss/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 md:w-10 bg-white p-1 rounded-lg"
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
            className="w-8 md:w-10 bg-white p-1 rounded-lg"
            src={Linkedin}
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default Registered;
