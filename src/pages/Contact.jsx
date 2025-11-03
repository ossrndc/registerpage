import { useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useNavigate, useLocation } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha(); 

  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
  console.log("Backend URL:", backendUrl);
  const { formData } = location.state || {};

  const [contactData, setContactData] = useState({
    contact: "",
    Email: "",
    Residence: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-z]{3,}(?:22|23|24)[\dDd-]{3,8}@akgec\.ac\.in$/;
    if (!emailPattern.test(contactData.Email)) {
      alert("Please enter a valid AKGEC email address.");
      return;
    }

    if (!executeRecaptcha) {
      alert("reCAPTCHA not yet ready.");
      return;
    }

    // ✅ Get the token from Google reCAPTCHA v3
    const token = await executeRecaptcha("form_submit");

    const payload = {
      Token: token,
      formData,
      contactData,
    };

    try {
      const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        alert("CAPTCHA verified!");
        const studentData = { ...formData, ...contactData };
        navigate("/registered", { state: { studentData } });
      } else if (
        result.message &&
        result.message.toLowerCase().includes("already registered")
      ) {
        alert("User is already registered.");
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden p-6 md:p-20">
      <h1 className="text-3xl text-center text-white font-bold">"HOUR OF CODE 4.0"</h1>

      <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto mt-6 flex flex-col gap-6">
        <div>
          <label className="text-white text-xl block mb-1">Contact Number</label>
          <input
            type="tel"
            name="contact"
            pattern="[6-9]{1}[0-9]{9}"
            maxLength="10"
            required
            value={contactData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-black"
          />
        </div>

        <div>
          <label className="text-white text-xl block mb-1">Email Address</label>
          <input
            type="email"
            name="Email"
            placeholder="studentxxxxxxx@akgec.ac.in"
            required
            value={contactData.Email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-black"
          />
        </div>

        <div>
          <p className="text-white text-xl mb-2">Residency Status</p>
          <div className="flex gap-6 text-white">
            <label className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                name="Residence"
                value="Hostler"
                checked={contactData.Residence === "Hostler"}
                onChange={handleChange}
              />
              Hostler
            </label>
            <label className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                name="Residence"
                value="Day Scholar"
                checked={contactData.Residence === "Day Scholar"}
                onChange={handleChange}
              />
              Day Scholar
            </label>
          </div>
        </div>

        {/* ✅ No visible captcha box needed for v3 */}

        <button
          type="submit"
          className="w-full py-3 bg-gray-300 border border-black text-black text-lg font-semibold rounded-lg hover:bg-gray-400 active:scale-95 transition-transform"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
