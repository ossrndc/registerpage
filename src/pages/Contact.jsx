import { useState, useEffect } from "react";
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

    const emailPattern = /^[a-z]{3,}(?:23\d{0,8}|24\d{0,8}|25(?=.*[A-Za-z])(?=.*-)[A-Za-z0-9-]{0,8})@akgec\.ac\.in$/;
    if (!emailPattern.test(contactData.Email)) {
      alert(
        "Please enter a valid AKGEC email address (e.g., nameStudentId@akgec.ac.in)"
      );
      return;
    }

    try {
      const payload = {
        Token,
        formData,
        contactData,
      };
      const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      // console.log("Payload being sent to backend:", payload);
      // console.log(formData)
      if (result.success) {
        alert("CAPTCHA verified!");
        // Merge formData and contactData into one flat object as per your schema
        const studentData = {
          ...formData,
          ...contactData, 
        };
        navigate("/registered", {
          state: { studentData, formData, contactData },
        });
        // navigate("/payment", { state: { studentData, formData, contactData } });
        alert("You are registered for the event.");
      } else if (
        result.message &&
        result.message.toLowerCase().includes("already registered")
      ) {
        alert("User is already registered.");
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden p-6 md:p-20">
      {/* OSS Logo */}
      <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
        <img
          src="/OSS.png"
          alt="OSS Logo"
          className="w-16 sm:w-20 md:w-28 h-auto max-w-full"
        />
      </div>

      {/* Github Icon */}
      <div className="fixed top-30 md:hidden xl:block left-4 md:top-40 md:left-80 z-70">
        <img
          src="/images/github.png"
          alt="Cross"
          className="w-8 sm:w-18 md:w-16 lg:w-20 h-auto max-w-full"
        />
      </div>
      {/* Dot Icon */}
      {/* <div className="fixed top-130 md:hidden xl:block left-2 md:top-100 md:left-20 z-50">
        <img
          src="/images/dot.png"
          alt="Cross"
          className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto invert max-w-full"
        />
      </div> */}
      {/* Arrow Icon */}

      <div className="fixed top-22 md:hidden xl:block right-10 md:top-36 md:right-60 z-60">
        <div className="flex items-center rotate-[310deg] md:rotate-[300deg]">
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

      <div className="fixed md:hidden xl:block top-30 right-0 sm:top-40 sm:-right-10 md:top-50 md:right-0 z-50 h-20 w-20 sm:h-48 sm:w-48 md:h-80 md:w-80">
        <img
          src="/images/line.png"
          alt="line"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Penguine Icon */}
      <div className="fixed top-60 md:hidden xl:block right-6 md:top-58 rotate-4 md:right-110 z-60">
        <img
          src="/images/penguine2.png"
          alt="Cross"
          className="w-8 sm:w-8 md:w-10 lg:w-20 h-auto max-w-full"
        />
      </div>
      {/* JS Icon */}
      <div className="fixed hidden top-140 xl:block right-4 md:top-140 md:right-80 z-50">
        <img
          src="/images/js.png"
          alt="Cross"
          className="w-16 sm:w-18 md:w-26 lg:w-30 h-auto max-w-full"
        />
      </div>
      <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-black">
        "INIT'25"
      </h1>

      <div className="w-full max-w-[600px] mt-6 mx-auto rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Contact No */}
          <div>
            <label htmlFor="contact" className="block text-xl text-black">
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
              className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-70 relative"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="Email" className="block text-xl text-black">
              Email Address
            </label>
            <input
              id="Email"
              type="email"
              name="Email"
              placeholder="studentxxxxxxx@akgec.ac.in"
              value={contactData.Email}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] backdrop-blur-md z-10 relative"
              required
            />
          </div>
          {/* Residency Status */}
          <div>
            <p className="text-xl text-black mb-2">Residency Status</p>
            <div className="flex gap-6 mt-6 md:gap-20 text-black">
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
          {/* ReCAPTCHA */}
          <div className="w-full flex justify-center">
            <div className="recaptcha-wrapper">
              <ReCAPTCHA
                sitekey="6LfpsR0rAAAAACNNYWuA0N-E0YYC04SsfpI3nqiQ"
                onChange={onSuccess}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 md:mt-0 text-black border-black rounded-lg outline-none bg-[rgb(133,206,195)] border text-xl active:scale-90 transition-transform duration-150 py-2 font-semibold backdrop-blur-md z-10 relative"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
