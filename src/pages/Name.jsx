import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

const Name = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    Name: "",
    StudentNO: "",
    Gender: "",
    Branch: "",
    Domain: "",
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const fixMobileViewport = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      const viewport = document.querySelector("meta[name=viewport]");
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, height=device-height"
        );
      }
    };

    fixMobileViewport();
    window.addEventListener("resize", fixMobileViewport);
    window.addEventListener("orientationchange", fixMobileViewport);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", fixMobileViewport);
      window.removeEventListener("orientationchange", fixMobileViewport);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStudentId = () => {
    const studentIdRegex =
      /^(?:22|23|24)[\dDd-]{3,8}$/;
    if (!studentIdRegex.test(formData.StudentNO)) {
      alert("Invalid StudentID. Only for 2nd Year students!!");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStudentId()) {
      return;
    }

    navigate("/contact", { state: { formData } });
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div
  className="w-full mobile-container overflow-hidden md:overflow-auto p-6 md:p-20 flex flex-col"
  style={{
    minHeight: "calc(var(--vh, 1vh) * 100)",
    background: "linear-gradient(to bottom, black, rgb(6,58,60), rgb(52,116,119), white)",
    backgroundAttachment: "fixed", // keeps gradient stable
    backgroundSize: "cover",
  }}
>

      {/* OSS Logo */}
      <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
        <img
          src="/OSS.png"
          alt="OSS Logo"
          className="w-16 sm:w-20 md:w-28 h-auto invert max-w-full"
        />
      </div>
      <div className="absolute top-8 left-0 md:left-40 lg:left-80 xl:left-140 z-0">
        <img
          src="/images/element.png"
          alt="Element"
          className=""
        />
      </div>
      {/* Arrow Icon */}
      {/* <div className="fixed top-22 md:hidden xl:block right-10 md:top-36 md:right-60 z-60">
        
        <div className="flex items-center rotate-[310deg] md:rotate-[300deg]">
          
          <div className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[rgb(133,206,195)]"></div>
          <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[30px] border-l-[rgb(133,206,195)] sm:border-t-[28px] sm:border-b-[28px] sm:border-l-[42px] md:border-t-[40px] md:border-b-[40px] md:border-l-[60px]"></div>
        </div>
      </div> */}
      {/* <div className="fixed top-30 md:hidden xl:block right-0 sm:top-40 sm:-right-10 md:top-50 md:right-0 z-50 h-20 w-20 sm:h-48 sm:w-48 md:h-80 md:w-80">
        
        <img
          src="/images/line.png"
          alt="line"
          className="w-full h-full object-contain"
        />
      </div> */}
      {/* Penguine Icon */}
      {/* <div className="fixed hidden lg:block top-102 md:hidden xl:block left-6 md:top-30 -rotate-46 md:left-100 z-60">
        
        <img
          src="/images/penguine2.png"
          alt="Cross"
          className="w-10 sm:w-8 md:w-10 lg:w-18 h-auto max-w-full"
        />
      </div> */}
      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-white flex-shrink-0">
        "HOUR OF CODE 4.0"
      </h1>
      <div className="w-full max-w-[600px] mt-2 md:mt-6 mx-auto rounded-lg p-6 flex-1 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label htmlFor="Name" className="block text-xl text-white">
              Full Name
            </label>
            <input
              id="Name"
              type="text"
              name="Name"
              pattern="^\s*[A-Za-z]{2,}( +[A-Za-z]{2,})*\s*$"
              title="Enter a valid name (letters only, at least 2 characters each part)"
              value={formData.Name}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-70 relative"
              required
            />
          </div>

          {/* Student No */}
          <div>
            <label htmlFor="StudentNO" className="block text-xl text-white">
              Student No
            </label>
            <input
              id="StudentNO"
              type="text"
              name="StudentNO"
              maxLength="10"
              value={formData.StudentNO}
              onChange={handleChange}
              onBlur={validateStudentId}
              className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-70 relative"
              required
            />
            
          </div>

          {/* Gender */}
          <div>
            <p className="text-white tracking-tight text-xl mb-2">Gender</p>
            <div className="flex flex-wrap gap-6 md:gap-10 text-white">
              <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="Gender"
                  value="male"
                  checked={formData.Gender === "male"}
                  onChange={handleChange}
                  className="accent-black"
                />
                Male
              </label>
              <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="Gender"
                  value="female"
                  checked={formData.Gender === "female"}
                  onChange={handleChange}
                  className="accent-black"
                />
                Female
              </label>
            </div>
          </div>

          {/* Branch & Domain */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full">
              <label htmlFor="Branch" className="block text-xl text-white">
                Branch
              </label>
              <select
                id="Branch"
                name="Branch"
                value={formData.Branch}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-10 relative"
                required
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="CS">CS</option>
                <option value="CSE-AIML">CSE-AIML</option>
                <option value="AIML">AIML</option>
                <option value="CSE-DS">CSE-DS</option>
                <option value="CS-Hindi">CS-Hindi</option>
                <option value="IT">IT</option>
                <option value="CSIT">CSIT</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
                <option value="ME">ME</option>
                <option value="Civil">Civil</option>
              </select>
            </div>

            {/* <div className="w-full">
              <label htmlFor="Domain" className="block text-xl text-white">
                Domain
              </label>
              <select
                id="Domain"
                name="Domain"
                value={formData.Domain}
                onChange={handleChange}
                className="w-full px-4 py-3 border backdrop-blur-md text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] z-10 relative"
                required
              >
                <option value="">Select Domain</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
              </select>
            </div> */}
          </div>

          <button
            type="submit"
            className="w-full mt-4 text-black border-black outline-none bg-[rgb(210,206,206)] border text-xl px-4 backdrop-blur-md z-10 relative active:scale-90 transition-transform duration-150 py-2 rounded-lg font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Name;
