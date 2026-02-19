

// import { useState, useEffect } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useNavigate, useLocation } from "react-router-dom";
// import scanner from "../assets/scanner.png";

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { executeRecaptcha } = useGoogleReCaptcha(); 
//   const [isRevealed, setIsRevealed] = useState(false);

//   const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
//   const { formData } = location.state || {};

//   const [contactData, setContactData] = useState({
//     contact: "",
//     Email: "",
//     Residence: "",
//     transactionId: "", // Added transactionId to state
//   });

//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emailPattern = /^[a-z]{3,}(?:22|23|24|25)[\dDd-]{3,8}@akgec\.ac\.in$/;
//     if (!emailPattern.test(contactData.Email)) {
//       alert("Please enter a valid AKGEC email address.");
//       return;
//     }

//     if (!executeRecaptcha) {
//       alert("reCAPTCHA not yet ready.");
//       return;
//     }

//     const token = await executeRecaptcha("form_submit");

//     const payload = {
//       Token: token,
//       formData,
//       contactData,
//     };

//     try {
//       const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const result = await res.json();

//       if (result.success) {
//         alert("CAPTCHA verified!");
//         const studentData = { ...formData, ...contactData };
//         navigate("/registered", { state: { studentData } });
//       } else if (
//         result.message &&
//         result.message.toLowerCase().includes("already registered")
//       ) {
//         alert("User is already registered.");
//       } else {
//         alert(result.message || "Registration failed.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden p-6 md:p-20">
//       <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
//         <img
//           src="/OSS.png"
//           alt="OSS Logo"
//           className="w-16 sm:w-20 md:w-28 h-auto invert max-w-full"
//         />
//       </div>
//       <div className="absolute top-8 left-0 md:left-40 lg:left-80 z-0 xl:left-140">
//         <img
//           src="/images/element.png"
//           alt="Element"
//           className=""
//         />
//       </div>
//       <h1 className="text-3xl text-center mt-16 md:mt-0 text-white font-bold">"HOUR OF CODE 4.0"</h1>

//       <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto mt-6 flex flex-col relative z-50 gap-6">
//         <div>
//           <label className="text-white text-xl block mb-1">Contact Number</label>
//           <input
//             type="tel"
//             name="contact"
//             pattern="[6-9]{1}[0-9]{9}"
//             maxLength="10"
//             required
//             value={contactData.contact}
//             onChange={handleChange}
//             className="w-full px-4 py-2 z-50 rounded-lg bg-gray-200 relative text-black border border-black"
//           />
//         </div>

//         <div>
//           <label className="text-white text-xl block mb-1">Email Address</label>
//           <input
//             type="email"
//             name="Email"
//             placeholder="studentxxxxxxx@akgec.ac.in"
//             required
//             value={contactData.Email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 z-50 rounded-lg bg-gray-200 text-black border border-black"
//           />
//         </div>

//         <div>
//           <p className="text-white text-xl mb-2">Residency Status</p>
//           <div className="flex gap-6 text-white">
//             <label className="flex items-center gap-2 text-lg">
//               <input
//                 type="radio"
//                 name="Residence"
//                 value="Hostler"
//                 checked={contactData.Residence === "Hostler"}
//                 onChange={handleChange}
//                 className="accent-black"
//               />
//               Hostler
//             </label>
//             <label className="flex items-center gap-2 text-lg">
//               <input
//                 type="radio"
//                 name="Residence"
//                 value="Day Scholar"
//                 checked={contactData.Residence === "Day Scholar"}
//                 onChange={handleChange}
//                 className="accent-black"
//               />
//               Day Scholar
//             </label>
//           </div>
//         </div>

//         {/* --- Transaction ID Field --- */}
//         <div>
//           <label className="text-white text-xl block mb-1">Transaction ID</label>
//           <input
//             type="text"
//             name="transactionId"
//             placeholder="T123456789..."
//             required
//             value={contactData.transactionId}
//             onChange={handleChange}
//             className="w-full px-4 py-2 z-50 rounded-lg bg-gray-200 text-black border border-black"
//           />
//         </div>

//         <div className="flex flex-col items-center gap-3 mt-2 py-4 bg-black/30 rounded-2xl border border-white/10 backdrop-blur-sm">
//           <p className="text-white text-sm font-semibold uppercase tracking-[0.2em]">Scan to Proceed</p>
//           <div 
//             onClick={() => setIsRevealed(true)}
//             className="relative cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-white/30 p-1"
//           >
//             <img 
//               src={scanner} 
//               alt="Scanner" 
//               className={`w-32 h-32 object-contain transition-all duration-700 ${isRevealed ? "blur-0 opacity-100" : "blur-lg opacity-40"}`} 
//             />
//             {!isRevealed && (
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <span className="text-[10px] text-white font-bold bg-black/70 px-3 py-2 rounded-lg border border-white/20 animate-pulse text-center">
//                   TAP TO REVEAL
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-gray-300 border border-black text-black text-lg font-semibold rounded-lg hover:bg-gray-400 active:scale-95 z-50 transition-transform"
//         >
//           SUBMIT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;





// import { useState, useEffect } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useNavigate, useLocation } from "react-router-dom";
// import scanner from "../assets/scanner.png";

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { executeRecaptcha } = useGoogleReCaptcha(); 
//   const [isRevealed, setIsRevealed] = useState(false);
//   const [isZoomed, setIsZoomed] = useState(false);

//   const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
//   const { formData } = location.state || {};

//   const [contactData, setContactData] = useState({
//     contact: "",
//     Email: "",
//     Residence: "",
//     transactionId: "", 
//   });

//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const txId = contactData.transactionId.trim().toUpperCase();
//     const utrRegex = /^[A-Z0-9]+$/;

//     if (!txId || txId.length < 10 || !utrRegex.test(txId)) {
//       alert("Please enter a valid Transaction ID / UTR Number (e.g., HDBI520355).");
//       return;
//     }

//     const emailPattern = /^[a-z]{3,}(?:22|23|24|25)[\dDd-]{3,8}@akgec\.ac\.in$/;
//     if (!emailPattern.test(contactData.Email)) {
//       alert("Please enter a valid AKGEC email address.");
//       return;
//     }

//     if (!executeRecaptcha) {
//       alert("reCAPTCHA not yet ready.");
//       return;
//     }

//     const token = await executeRecaptcha("form_submit");
//     const payload = { Token: token, formData, contactData: { ...contactData, transactionId: txId } };

//     try {
//       const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const result = await res.json();
//       if (result.success) {
//         const studentData = { ...formData, ...contactData };
//         navigate("/registered", { state: { studentData } });
//       } else {
//         alert(result.message || "Registration failed.");
//       }
//     } catch (err) {
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-4 md:py-8" style={{ minHeight: "100vh" }}>
//       <div className="absolute inset-0 z-0 opacity-100" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       <div className="relative z-10 w-full max-w-[850px]">
//         <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic">Commit 3.0</h1>

//         <div className="bg-[#bfdbfe] border-[4px] border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
//           <div className="bg-[#10b981] border-b-[4px] border-black p-3 flex justify-between items-center">
//             <div className="text-2xl">⭐</div>
//             <div className="flex gap-2">
//               <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#2dd4bf]"></div>
//               <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#fbbf24]"></div>
//               <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#f43f5e]"></div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">Contact Number</label>
//                 <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black" />
//               </div>

             
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">AKGEC Email</label>
//                 <input 
//                   type="email" 
//                   name="Email" 
//                   placeholder="e.g. name23120xx@akgec.ac.in" 
//                   required 
//                   value={contactData.Email} 
//                   onChange={handleChange} 
//                   className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black placeholder:text-black/30" 
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <p className="text-md font-black text-black uppercase">Residency Status</p>
//               <div className="flex gap-4">
//                 {["Hostler", "Day Scholar"].map((res) => (
//                   <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer transition-all font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black translate-y-1'}`}>
//                     <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
//                     {res}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
//               <div className="flex flex-col items-center gap-1">
//                 <p className="text-[10px] font-black uppercase text-black/60">Tap QR to Zoom</p>
//                 <div onClick={() => { if (!isRevealed) setIsRevealed(true); else setIsZoomed(true); }} className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
//                   <img src={scanner} alt="QR" className={`w-20 h-20 md:w-24 md:h-24 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
//                   {!isRevealed && <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black bg-black/10">REVEAL</div>}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase tracking-tight">UTR / Transaction ID</label>
//                 <input type="text" name="transactionId" placeholder="e.g. HDBI520355" required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black" />
//               </div>
//             </div>

//             <button type="submit" className="w-full py-4 bg-[#f43f5e] border-[4px] border-black text-white text-2xl font-black rounded-2xl transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase">Finish Registration</button>
//           </form>
//         </div>
//       </div>

//       {isZoomed && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setIsZoomed(false)}>
//           <div className="relative bg-white p-6 rounded-3xl border-[6px] border-black shadow-[15px_15px_0px_rgba(26,185,129,1)] max-w-sm w-full animate-in zoom-in-95 duration-200">
//             <button className="absolute -top-12 right-0 text-white text-5xl font-black">&times;</button>
//             <img src={scanner} alt="Zoomed QR" className="w-full h-auto rounded-lg" />
//             <p className="text-black text-center font-black mt-4 text-xl uppercase italic">Scan to Pay</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


// import { useState, useEffect } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useNavigate, useLocation } from "react-router-dom";
// import scanner from "../assets/scanner.png";

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { executeRecaptcha } = useGoogleReCaptcha(); 
//   const [isRevealed, setIsRevealed] = useState(false);
//   const [isZoomed, setIsZoomed] = useState(false);

//   const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
//   const { formData } = location.state || {};

//   const [contactData, setContactData] = useState({
//     contact: "",
//     Email: "",
//     Residence: "",
//     transactionId: "", 
//   });

//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Standardize and validate Transaction ID
//     const txId = contactData.transactionId.trim().toUpperCase();
//     const utrRegex = /^[A-Z0-9]+$/;

//     if (!txId || txId.length < 13 || !utrRegex.test(txId)) {
//       alert("Please enter a valid Transaction ID / UTR Number (e.g., HDBI520355).");
//       return;
//     }

//   const emailPattern = /^[a-z]{3,}(?:24|25)[0-9Dd-]{3,8}@akgec\.ac\.in$/;

//     if (!emailPattern.test(contactData.Email)) {
//       alert("Please enter a valid AKGEC email address.");
//       return;
//     }

//     if (!executeRecaptcha) {
//       alert("reCAPTCHA not yet ready.");
//       return;
//     }

//     const token = await executeRecaptcha("form_submit");
    
//     // Payload using the standardized txId
//     const payload = { Token: token, formData, contactData: { ...contactData, transactionId: txId } };

//     try {
//       const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const result = await res.json();
      
//       if (result.success) {
//         // FIX: Ensuring studentData uses the same uppercased txId as the payload
//         const studentData = { ...formData, ...contactData, transactionId: txId };
//         navigate("/registered", { state: { studentData } });
//       } else {
//         alert(result.message || "Registration failed.");
//       }
//     } catch (err) {
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-4 md:py-8" style={{ minHeight: "100vh" }}>
//       <div className="absolute inset-0 z-0 opacity-100" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       <div className="relative z-10 w-full max-w-[850px]">
//         <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic">Commit 3.0</h1>

//         <div className="bg-[#bfdbfe] border-[4px] border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
//           <div className="bg-[#10b981] border-b-[4px] border-black p-3 flex justify-between items-center">
//             <div className="text-2xl">⭐</div>
//             <div className="flex gap-2">
//               <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#2dd4bf]"></div>
//               <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#fbbf24]"></div>
//               <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#f43f5e]"></div>
//             </div>
//           </div>
//           <div className="fixed top-4 left-4 z-50">
//         <img
//           src="/OSS.png"
//           alt="OSS Logo"
//           className="w-16 md:w-20 h-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] invert"/>
//         </div>

//           <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">Contact Number</label>
//                 <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black" />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">AKGEC Email</label>
//                 <input 
//                   type="email" 
//                   name="Email" 
//                   placeholder="e.g. name25120xx@akgec.ac.in" 
//                   required 
//                   value={contactData.Email} 
//                   onChange={handleChange} 
//                   className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black placeholder:text-black/30" 
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <p className="text-md font-black text-black uppercase">Residency Status</p>
//               <div className="flex gap-4">
//                 {["Hostler", "Day Scholar"].map((res) => (
//                   <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer transition-all font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black translate-y-1'}`}>
//                     <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
//                     {res}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
//               <div className="flex flex-col items-center gap-1">
//                 <p className="text-[10px] font-black uppercase text-black/60">Tap QR to Zoom</p>
//                 <div onClick={() => { if (!isRevealed) setIsRevealed(true); else setIsZoomed(true); }} className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
//                   <img src={scanner} alt="QR" className={`w-20 h-20 md:w-24 md:h-24 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
//                   {!isRevealed && <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black bg-black/10">REVEAL</div>}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase tracking-tight">UTR / Transaction ID</label>
//                 <input type="text" name="transactionId" placeholder="e.g. HDBI520355" required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black" />
//               </div>
//             </div>

//             <button type="submit" className="w-full py-4 bg-[#f43f5e] border-[4px] border-black text-white text-2xl font-black rounded-2xl transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase">Finish Registration</button>
//           </form>
//         </div>
//       </div>

//       {isZoomed && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setIsZoomed(false)}>
//           <div className="relative bg-white p-6 rounded-3xl border-[6px] border-black shadow-[15px_15px_0px_rgba(26,185,129,1)] max-w-sm w-full animate-in zoom-in-95 duration-200">
//             <button className="absolute -top-12 right-0 text-white text-5xl font-black">&times;</button>
//             <img src={scanner} alt="Zoomed QR" className="w-full h-auto rounded-lg" />
//             <p className="text-black text-center font-black mt-4 text-xl uppercase italic">Scan to Pay</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


import { useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useNavigate, useLocation } from "react-router-dom";
import scanner from "../assets/scanner.png";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha(); 
  const [isRevealed, setIsRevealed] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
  const { formData } = location.state || {};

  const [contactData, setContactData] = useState({
    contact: "",
    Email: "",
    Residence: "",
    transactionId: "", 
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const txId = contactData.transactionId.trim().toUpperCase();
    const utrRegex = /^[A-Z0-9]+$/;

    // Standardized UTR/Transaction ID length check
    if (!txId || txId.length < 13 || !utrRegex.test(txId)) {
      alert("Please enter a valid Transaction ID / UTR Number (minimum 13 characters).");
      return;
    }

    const emailPattern = /^[a-z]{3,}(?:24|25)[0-9Dd-]{3,8}@akgec\.ac\.in$/;
    if (!emailPattern.test(contactData.Email)) {
      alert("Please enter a valid AKGEC email address.");
      return;
    }

    if (!executeRecaptcha) {
      alert("reCAPTCHA not yet ready.");
      return;
    }

    const token = await executeRecaptcha("form_submit");
    const payload = { Token: token, formData, contactData: { ...contactData, transactionId: txId } };

    try {
      // console.log("Sending payload to server:", payload);
      const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      // console.log("Server response:", result);
      
      if (result.success) {
        const studentData = { ...formData, ...contactData, transactionId: txId };
        navigate("/registered", { state: { studentData } });
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-4 md:py-8" style={{ minHeight: "100vh" }}>
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 opacity-100" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
      {/* OSS Logo */}
      <div className="fixed top-4 left-4 z-50">
        <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-20 h-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] invert"/>
      </div>

      <div className="relative z-10 w-full max-w-[850px]">
        <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic">Commit 3.0</h1>

        <div className="bg-[#bfdbfe] border-[4px] border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
          {/* Header Bar */}
          <div className="bg-[#10b981] border-b-[4px] border-black p-3 flex justify-between items-center">
            <div className="text-2xl">⭐</div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#2dd4bf]"></div>
              <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#fbbf24]"></div>
              <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#f43f5e]"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-md font-black text-black uppercase">Contact Number</label>
                <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-md font-black text-black uppercase">AKGEC Email</label>
                <input type="email" name="Email" placeholder="e.g. name25120xx@akgec.ac.in" required value={contactData.Email} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black placeholder:text-black/30" />
              </div>
            </div>

            {/* Residency Selection */}
            <div className="flex flex-col gap-2">
              <p className="text-md font-black text-black uppercase">Residency Status</p>
              <div className="flex gap-4">
                {["Hostler", "Day Scholar"].map((res) => (
                  <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer transition-all font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black translate-y-1'}`}>
                    <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
                    {res}
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] font-black uppercase text-black/60">Tap QR to Zoom</p>
                <div onClick={() => { if (!isRevealed) setIsRevealed(true); else setIsZoomed(true); }} className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <img src={scanner} alt="QR" className={`w-20 h-20 md:w-24 md:h-24 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
                  {!isRevealed && <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black bg-black/10">REVEAL</div>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-md font-black text-black uppercase tracking-tight">UTR / Transaction ID</label>
                <input type="text" name="transactionId" placeholder="e.g. HDBI520355" required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl outline-none bg-white font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)]" />
              </div>
            </div>

            {/* --- WHATSAPP SUPPORT BANNER --- */}
            <div className="bg-white/60 border-[3px] border-black p-3 rounded-2xl text-center">
                <p className="text-[11px] md:text-xs font-black text-black uppercase tracking-tighter">
                    Payment issues? WhatsApp us: <a href="https://wa.me/918318055601" className="text-[#1d4ed8] underline decoration-2 underline-offset-2">8318055601</a>
                </p>
            </div>

            <button type="submit" className="w-full py-4 bg-[#f43f5e] border-[4px] border-black text-white text-2xl font-black rounded-2xl transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase hover:translate-y-1 hover:shadow-none">Finish Registration</button>
          </form>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setIsZoomed(false)}>
          <div className="relative bg-white p-6 rounded-3xl border-[6px] border-black shadow-[15px_15px_0px_rgba(26,185,129,1)] max-w-sm w-full animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsZoomed(false)} className="absolute -top-12 right-0 text-white text-5xl font-black">&times;</button>
            <img src={scanner} alt="Zoomed QR" className="w-full h-auto rounded-lg" />
            <p className="text-black text-center font-black mt-4 text-xl uppercase italic">Scan to Pay</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;