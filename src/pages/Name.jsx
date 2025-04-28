import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
    console.log("Form Data:", formData);

    // Reset the form
    setFormData({
      Name: "",
      StudentNO: "",
      Gender: "",
      Branch: "",
      Year: "",
    });

    navigate('/contact', { state: { formData } }); // Navigate to the contact page
  };

  return (
    <div className="w-full min-h-screen p-6 md:p-20">
      {/* OSS Logo */}
<div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
  <img 
    src="/OSS.png" 
    alt="OSS Logo" 
    className="w-16 sm:w-20 md:w-28 h-auto max-w-full"
  />
</div>

{/* Cross Icon */}
<div className="fixed top-30 left-4 md:top-50 md:left-40 z-50">
  <img 
    src="/images/cross.png" 
    alt="Cross" 
    className="w-5 sm:w-8 md:w-10 lg:w-10 h-auto max-w-full"
  />
</div>
{/* Triangle Icon */}
<div className="fixed top-56 right-4 md:top-30 md:right-40 z-50">
  <img 
    src="/images/triangle.png" 
    alt="Cross" 
    className="w-16 sm:w-18 md:w-26 lg:w-30 h-auto max-w-full"
  />
</div>
{/* Dot Icon */}
<div className="fixed top-140 right-2 md:top-90 md:right-20 z-50">
  <img 
    src="/images/dot.png" 
    alt="Cross" 
    className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto max-w-full"
  />
</div>
      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-[#92FAE0]">
        Register Yourself
      </h1>

      <div className="w-full max-w-[600px] mt-6 mx-auto rounded-lg p-6">
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
              value={formData.Name}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative"
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
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative"
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
              <label htmlFor="Branch" className="block text-xl text-white">
                Branch
              </label>
              <select
                id="Branch"
                name="Branch"
                value={formData.Branch}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-white border-[#92FAE0] bg-[#180B3Fe0] backdrop-blur-md rounded-lg outline-none z-10 relative"
                required
              >
                <option value="" className="bg-[#180B3F] text-white">
                  Select Branch
                </option>
                <option value="CSE" className="bg-[#180B3F] text-white">
                  CSE
                </option>
                <option value="CS" className="bg-[#180B3F] text-white">
                  CS
                </option>
                <option value="CSE-AIML" className="bg-[#180B3F] text-white">
                  CSE-AIML
                </option>
                <option value="AIML" className="bg-[#180B3F] text-white">
                  AIML
                </option>
                <option value="CSE-DS" className="bg-[#180B3F] text-white">
                  CSE-DS
                </option>
                <option value="CS-Hindi" className="bg-[#180B3F] text-white">
                  CS-Hindi
                </option>
                <option value="IT" className="bg-[#180B3F] text-white">
                  IT
                </option>
                <option value="CSIT" className="bg-[#180B3F] text-white">
                  CSIT
                </option>
                <option value="ECE" className="bg-[#180B3F] text-white">
                  ECE
                </option>
                <option value="EE" className="bg-[#180B3F] text-white">
                  EE
                </option>
                <option value="ME" className="bg-[#180B3F] text-white">
                  ME
                </option>
                <option value="Civil" className="bg-[#180B3F] text-white">
                  Civil
                </option>
              </select>
            </div>

            {/* Year */}
            <div className="w-full">
              <label htmlFor="year" className="block text-xl text-white">
                Year
              </label>
              <select
                id="Year"
                name="Year"
                value={formData.Year}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-white border-[#92FAE0] bg-[#180B3Fe0] backdrop-blur-md rounded-lg outline-none z-10 relative"
                required
              >
                <option value="" className="bg-[#180B3F] text-white">
                  Select Year
                </option>
                <option value="1st" className="bg-[#180B3F] text-white">
                  1st
                </option>
                <option value="2nd" className="bg-[#180B3F] text-white">
                  2nd
                </option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 text-[#92FAE0] border text-xl border-[#92FAE0] px-4 outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative active:scale-90 transition-transform duration-150 py-2 rounded-lg font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Name;