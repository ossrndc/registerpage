import React, { useState } from "react";

const Name = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentno: "",
    gender: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      studentno: "",
      gender: "",
      branch: "",
      year: "",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 md:p-20">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-[#92FAE0]">
        Register Yourself
      </h1>
      <div className="w-full max-w-[600px] h-auto mt-6 m-auto flex justify-center items-center rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-2xl text-white">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none"
              required
            />
          </div>

          {/* Student No */}
          <div>
            <label htmlFor="studentno" className="block text-xl text-white">
              Student No
            </label>
            <input
              id="studentno"
              type="text"
              name="studentno"
              maxLength="10"
              value={formData.studentno}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <p className="text-white tracking-tight text-xl mb-2">Gender</p>
            <div className="flex flex-wrap gap-4 text-white">
              <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Male
              </label>
              <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Female
              </label>
              <label className="flex items-center gap-1 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Other's
              </label>
            </div>
          </div>

          {/* Branch & Year */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Branch */}
            <div className="w-full">
              <label htmlFor="branch" className="block text-xl text-white">
                Branch
              </label>
              <input
                id="branch"
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none bg-transparent"
                required
              />
            </div>

            {/* Year */}
            <div className="w-full">
              <label htmlFor="year" className="block text-xl text-white">
                Year
              </label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-white border-[#92FAE0] bg-transparent rounded-lg outline-none"
                required
              >
                <option value="">Select Year</option>
                <option value="1st" className="bg-[#180B3F] text-white">
                  1st
                </option>
                <option value="2nd" className="bg-[#180B3F] text-white">
                  2nd
                </option>
                <option value="3rd" className="bg-[#180B3F] text-white">
                  3rd
                </option>
                <option value="4th" className="bg-[#180B3F] text-white">
                  4th
                </option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 text-[#92FAE0] border text-xl border-[#92FAE0] active:scale-90 transition-transform duration-150 py-2 rounded-lg font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Name;
