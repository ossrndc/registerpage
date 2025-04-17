import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contactNo: "",
    email: "",
    residency: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Reset the form
    setFormData({
      contactNo: "",
      email: "",
      residency: "",
    });
    navigate('/payment');
  };

  return (
    <div className="w-full min-h-screen p-6 md:p-20">
      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-[#92FAE0]">
        Register Yourself
      </h1>

      <div className="w-full max-w-[600px] mt-6 mx-auto rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Contact No */}
          <div>
            <label htmlFor="contactNo" className="block text-xl text-white">
              Contact Number
            </label>
            <input
              id="contactNo"
              type="tel"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xl text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none"
              required
            />
          </div>
          {/* Email via link */}
          <div>
            <label htmlFor="email" className="block text-xl text-white">
              Send Email Verificaton Link
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none"
              required
            />
          </div>

          {/* Residency Status */}
          <div>
            <p className="text-xl text-white mb-2">Residency Status</p>
            <div className="flex gap-6 text-white">
              <label className="flex items-center gap-2 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="residency"
                  value="Hostler"
                  checked={formData.residency === "Hostler"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Hostler
              </label>
              <label className="flex items-center gap-2 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="residency"
                  value="Day Scholar"
                  checked={formData.residency === "Day Scholar"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Day Scholar
              </label>
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

export default Contact;
