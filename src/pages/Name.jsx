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

  const studentIdRegex = /^(?:24\d{0,8}|25(?=.*[A-Za-z])(?=.*-)[A-Za-z0-9-]{0,8})$/;

  const handleStudentIdChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, StudentNO: value });

    if (value !== "" && !studentIdRegex.test(value)) {
      alert(
        "Invalid Student ID! Must start with 24 (digits only) or 25 (include at least 1 letter and 1 dash, max 10 characters)."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentIdRegex.test(formData.StudentNO)) {
      alert(
        "Invalid Student ID! Must start with 24 (digits only) or 25 (include at least 1 letter and 1 dash, max 10 characters)."
      );
      return;
    }

    // Reset the form (optional)
    // setFormData({
    //   Name: "",
    //   StudentNO: "",
    //   Gender: "",
    //   Branch: "",
    //   Domain: "",
    // });

    navigate("/contact", { state: { formData } });
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div
      className="w-full mobile-container overflow-hidden md:overflow-auto p-6 md:p-20 flex flex-col"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
        <img
          src="/OSS.png"
          alt="OSS Logo"
          className="w-16 sm:w-20 md:w-28 h-auto max-w-full"
        />
      </div>

      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-black flex-shrink-0">
        "INIT'25"
      </h1>

      <div className="w-full max-w-[600px] mt-2 md:mt-6 mx-auto rounded-lg p-6 flex-1 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-70 relative"
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
              maxLength="10"
              value={formData.StudentNO}
              onChange={handleStudentIdChange}
              className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-10 relative"
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
            </div>
          </div>

          {/* Branch & Domain */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full">
              <label htmlFor="Branch" className="block text-xl text-black">
                Branch
              </label>
              <select
                id="Branch"
                name="Branch"
                value={formData.Branch}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-10 relative"
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

            <div className="w-full">
              <label htmlFor="Domain" className="block text-xl text-black">
                Domain
              </label>
              <select
                id="Domain"
                name="Domain"
                value={formData.Domain}
                onChange={handleChange}
                className="w-full px-4 py-3 border backdrop-blur-md text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] z-10 relative"
                required
              >
                <option value="">Select Domain</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 text-black border-black outline-none bg-[rgb(133,206,195)] border text-xl px-4 backdrop-blur-md z-10 relative active:scale-90 transition-transform duration-150 py-2 rounded-lg font-semibold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Name;
