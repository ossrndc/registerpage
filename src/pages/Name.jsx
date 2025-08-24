import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Name = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    StudentNO: "",
    Gender: "",
    Branch: "",
    Year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    // Reset the form
    setFormData({
      Name: "",
      StudentNO: "",
      Gender: "",
      Branch: "",
      Year: "",
    });

    navigate("/contact", { state: { formData } }); // Navigate to the contact page
  };

  return (
    <div className="w-full h-screen p-6 md:p-20">
      {/* OSS Logo */}
      <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
        <img
          src="/OSS.png"
          alt="OSS Logo"
          className="w-16 sm:w-20 md:w-28 h-auto max-w-full"
        />
      </div>
      {/* Arrow Icon */}
      {/* Arrow */}
      <div className="fixed top-22 md:hidden xl:block right-10 md:top-36 md:right-60 z-60">
        <div className="flex items-center rotate-[310deg] md:rotate-[300deg]">
          {/* Rectangle shaft */}
          <div className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[rgb(133,206,195)]"></div>

          {/* Triangle tip */}
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

      {/* Line Image */}
      <div className="fixed top-30 md:hidden xl:block right-0 sm:top-40 sm:-right-10 md:top-50 md:right-0 z-50 h-20 w-20 sm:h-48 sm:w-48 md:h-80 md:w-80">
        <img
          src="/images/line.png"
          alt="line"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Dot Icon */}
      <div className="fixed top-130 md:hidden xl:block left-4 invert md:top-90 md:left-20 z-50">
        <img
          src="/images/dot.png"
          alt="Cross"
          className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto max-w-full"
        />
      </div>
      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-black">
        "INIT'25"
      </h1>

      <div className="w-full max-w-[600px] mt-2 md:mt-6 mx-auto rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          {/* Name */}
          <div>
            <label htmlFor="Name" className="block text-xl text-black">
              Full Name
            </label>
            <input
              id="Name"
              type="text"
              name="Name"
              pattern="[A-Za-z]{2,}( [A-Za-z]{2,})?"
              title="Enter a valid name (letters only, at least 2 characters each part)"
              value={formData.Name}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-70 relative"
              required
            />
          </div>

          {/* Student No */}
          <div>
            <label htmlFor="StudentNO" className="block text-xl text-black">
              Student No
            </label>
            <input
              id="StudentNO"
              type="text"
              name="StudentNO"
              pattern="^\d{5}\S*$"
              maxLength="10"
              value={formData.StudentNO}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-10 relative"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <p className="text-black tracking-tight text-xl mb-2">Gender</p>
            <div className="flex flex-wrap gap-6 md:gap-10 text-black">
              <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="Gender"
                  value="male"
                  checked={formData.Gender === "male"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
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
                  className="accent-[#92FAE0]"
                />
                Female
              </label>
              {/* <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="Gender"
                  value="other"
                  checked={formData.Gender === "other"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Other
              </label> */}
            </div>
          </div>

          {/* Branch & Year */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Branch */}
            <div className="w-full">
              <label htmlFor="Branch" className="block text-xl text-black">
                Branch
              </label>
              <select
                id="Branch"
                name="Branch"
                value={formData.Branch}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-10 relative"
                required
              >
                <option value="" className="bg-[rgb(133,206,195)] text-black">
                  Select Branch
                </option>
                <option
                  value="CSE"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  CSE
                </option>
                <option value="CS" className="bg-[rgb(133,206,195)] text-black">
                  CS
                </option>
                <option
                  value="CSE-AIML"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  CSE-AIML
                </option>
                <option
                  value="AIML"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  AIML
                </option>
                <option
                  value="CSE-DS"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  CSE-DS
                </option>
                <option
                  value="CS-Hindi"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  CS-Hindi
                </option>
                <option value="IT" className="bg-[rgb(133,206,195)] text-black">
                  IT
                </option>
                <option
                  value="CSIT"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  CSIT
                </option>
                <option
                  value="ECE"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  ECE
                </option>
                <option value="EE" className="bg-[rgb(133,206,195)] text-black">
                  EE
                </option>
                <option value="ME" className="bg-[rgb(133,206,195)] text-black">
                  ME
                </option>
                <option
                  value="Civil"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  Civil
                </option>
              </select>
            </div>

            {/* Year */}
            <div className="w-full">
              <label htmlFor="year" className="block text-xl text-black">
                Year
              </label>
              <select
                id="Year"
                name="Year"
                value={formData.Year}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border backdrop-blur-md text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] z-10 relative"
                required
              >
                <option value="" className="bg-[rgb(133,206,195)] text-black">
                  Select Year
                </option>
                <option
                  value="1st"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  1st
                </option>
                <option
                  value="2nd"
                  className="bg-[rgb(133,206,195)] text-black"
                >
                  2nd
                </option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 text-black border-black outline-none bg-[rgb(133,206,195)] border text-xl px-4 backdrop-blur-md z-10 relative active:scale-90 transition-transform duration-150 py-1.5 md:py-2 rounded-lg font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Name;
