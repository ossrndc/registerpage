import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate, useLocation } from "react-router-dom";


const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  // console.log("Backend URL:", backendUrl);
  // Retrieve form data passed from Name.jsx
  const { formData } = location.state || {};

  const [captchaStatus, setCaptchaStatus] = useState(false);

  const [Token, setToken] = useState("");
  const onSuccess = (key) => {
    // console.log(key);
    setToken(key);
    setCaptchaStatus(true);
  };

  const [contactData, setContactData] = useState({
    contact: "",
    Email: "",
    Residence: "",
  });

  useEffect(() => {
    if (formData) {
      console.log("Form Data received");
    }
  }, [formData]);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@akgec\.ac\.in$/;
    if (!emailPattern.test(contactData.Email)) {
      alert(
        "Please enter a valid AKGEC email address (e.g., yourname@akgec.ac.in)"
      );
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Token }),
      });

      const result = await res.json();

      if (result.success) {
        alert("CAPTCHA verified!");
        // Merge formData and contactData into one flat object as per your schema
        const studentData = {
          ...formData,
          ...contactData, // ✅ Normalizing key
        };
        navigate("/payment", { state: { studentData, formData, contactData } });
      } else {
        alert("CAPTCHA verification failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Something went wrong.");
    }
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

      {/* Penguine Icon */}
      <div className="fixed top-20 left-4 md:top-40 md:left-60 z-50">
        <img
          src="/images/penguine.png"
          alt="Cross"
          className="w-16 sm:w-18 md:w-26 lg:w-30 h-auto max-w-full"
        />
      </div>
      {/* Dot Icon */}
      <div className="fixed top-140 left-2 md:top-100 md:left-20 z-50">
        <img
          src="/images/dot.png"
          alt="Cross"
          className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto max-w-full"
        />
      </div>
      {/* Cross Icon */}
      <div className="fixed top-50 right-4 md:top-20 md:right-30 z-50">
        <img
          src="/images/cross.png"
          alt="Cross"
          className="w-5 sm:w-8 md:w-10 lg:w-10 h-auto max-w-full"
        />
      </div>
      {/* JS Icon */}
      <div className="fixed top-140 right-4 md:top-120 md:right-30 z-50">
        <img
          src="/images/js.png"
          alt="Cross"
          className="w-16 sm:w-18 md:w-26 lg:w-30 h-auto max-w-full"
        />
      </div>
      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-[#92FAE0]">
        Register Yourself
      </h1>

      <div className="w-full max-w-[600px] mt-6 mx-auto rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Contact No */}
          <div>
            <label htmlFor="contact" className="block text-xl text-white">
              Contact Number
            </label>
            <input
              id="contact"
              type="tel"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              name="contact"
              value={contactData.contact}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="Email" className="block text-xl text-white">
              Email Address
            </label>
            <input
              id="Email"
              type="email"
              name="Email"
              value={contactData.Email}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-white border-[#92FAE0] rounded-lg outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative"
              required
            />
          </div>
          {/* Residency Status */}
          <div>
            <p className="text-xl text-white mb-2">Residency Status</p>
            <div className="flex gap-6 md:gap-20 text-white">
              <label className="flex items-center gap-2 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="Residence"
                  value="Hostler"
                  checked={contactData.Residence === "Hostler"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Hostler
              </label>
              <label className="flex items-center gap-2 text-xl cursor-pointer">
                <input
                  type="radio"
                  name="Residence"
                  value="Day Scholar"
                  checked={contactData.Residence === "Day Scholar"}
                  onChange={handleChange}
                  className="accent-[#92FAE0]"
                />
                Day Scholar
              </label>
            </div>
          </div>
          {/* ReCAPTCHA*/}
          <div className="w-full">
            <ReCAPTCHA
              sitekey="6LfpsR0rAAAAACNNYWuA0N-E0YYC04SsfpI3nqiQ"
              onChange={onSuccess}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 text-[#92FAE0] border text-xl border-[#92FAE0] active:scale-90 transition-transform duration-150 py-2 rounded-lg font-semibold outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
