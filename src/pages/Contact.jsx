// import { useState, useEffect } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useNavigate, useLocation } from "react-router-dom";
// import { InitialLoader } from "./LoadingAnimation"; 
// import scanner from "../assets/scanner.png";

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { executeRecaptcha } = useGoogleReCaptcha(); 
  
//   // States
//   const [isLoading, setIsLoading] = useState(true);    
//   const [isSubmitting, setIsSubmitting] = useState(false); 

//   const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
//   const { formData } = location.state || {};

//   const [contactData, setContactData] = useState({
//     contact: "", 
//     Email: "", 
//     Residence: "", 
//     transactionId: "", 
//   });

//   // Initial cinematic load for Commit 3.0
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const txId = contactData.transactionId.trim().toUpperCase();
//     if (txId.length < 13) {
//       alert("Invalid Transaction ID. Minimum 13 characters required.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       if (!executeRecaptcha) return;
//       const token = await executeRecaptcha("form_submit");
      
//       const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           Token: token, 
//           formData, 
//           contactData: { ...contactData, transactionId: txId } 
//         }),
//       });
//       const result = await res.json();
      
//       if (result.success) {
//         // - Fixed casing issue for success page navigation
//         navigate("/registered", { 
//           state: { studentData: { ...formData, ...contactData, transactionId: txId } } 
//         });
//       } else {
//         alert(result.message || "Registration failed.");
//         setIsSubmitting(false); 
//       }
//     } catch (err) {
//       alert("Something went wrong with the server connection.");
//       setIsSubmitting(false);
//     }
//   };

//   if (isLoading) return <InitialLoader />;

//   return (
//     <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-8" style={{ minHeight: "100vh" }}>
      
//       {/* Background Grids */}
//       <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-20 h-auto invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"/>
//       </div>

//       <div className="relative z-10 w-full max-w-[850px]">
//         <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
//           Commit 3.0
//         </h1>

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
//                 <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">AKGEC Email</label>
//                 <input type="email" name="Email" placeholder="e.g. name25120xx@akgec.ac.in" required value={contactData.Email} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <p className="text-md font-black text-black uppercase">Residency</p>
//               <div className="flex gap-4">
//                 {["Hostler", "Day Scholar"].map((res) => (
//                   <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black'}`}>
//                     <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
//                     {res}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
//               <div className="flex flex-col items-center gap-1">
//                 <p className="text-[10px] font-black uppercase text-black/60">Scan QR</p>
//                 <div onClick={() => { if (!isRevealed) setIsRevealed(true); else setIsZoomed(true); }} className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white">
//                   <img src={scanner} alt="QR" className={`w-20 h-20 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">UTR / Transaction ID</label>
//                 <input type="text" name="transactionId" placeholder="e.g. HDBI520355" required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//             </div>

//             <div className="bg-white/60 border-[3px] border-black p-3 rounded-2xl text-center">
//                 <p className="text-[11px] md:text-xs font-black text-black uppercase tracking-tighter">
//                     Payment issues? WhatsApp: <a href="https://wa.me/918318055601" className="text-[#1d4ed8] underline font-black decoration-2">8318055601</a>
//                 </p>
//             </div>

//             <button 
//               type="submit" 
//               disabled={isSubmitting} 
//               className={`w-full py-4 border-[4px] border-black text-2xl font-black rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase transition-all flex items-center justify-center gap-3 ${
//                 isSubmitting 
//                 ? 'bg-[#10b981] shadow-none translate-y-1' 
//                 : 'bg-[#f43f5e] text-white hover:translate-y-1 hover:shadow-none active:scale-95' 
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Processing...
//                 </>
//               ) : (
//                 "Finish Registration"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import { useState, useEffect } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useNavigate, useLocation } from "react-router-dom";
// import { InitialLoader },LoadingAnimation from "./LoadingAnimation"; 
// import scanner from "../assets/scanner.png";

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { executeRecaptcha } = useGoogleReCaptcha(); 
  
//   // Logic Control States
//   const [isLoading, setIsLoading] = useState(true);    // Full-screen logo ONLY on page entry
//   const [isSubmitting, setIsSubmitting] = useState(false); // Controls button "Processing" state

//   const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
//   const { formData } = location.state || {};

//   const [contactData, setContactData] = useState({
//     contact: "", 
//     Email: "", 
//     Residence: "", 
//     transactionId: "", 
//   });

//   // Initial cinematic entrance - triggers ONCE on page load
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const txId = contactData.transactionId.trim().toUpperCase();
//     if (txId.length < 13) {
//       alert("Invalid Transaction ID. Minimum 13 characters required.");
//       return;
//     }

//     // Change button to "Processing" state (Full-screen loader stays false)
//     setIsSubmitting(true);

//     try {
//       if (!executeRecaptcha) return;
//       const token = await executeRecaptcha("form_submit");
      
//       const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           Token: token, 
//           formData, 
//           contactData: { ...contactData, transactionId: txId } 
//         }),
//       });
//       const result = await res.json();
      
//       if (result.success) {
//         navigate("/registered", { 
//           state: { studentData: { ...formData, ...contactData, transactionId: txId } } 
//         });
//       } else {
//         alert(result.message || "Registration failed.");
//         setIsSubmitting(false); // Revert button if failed
//       }
//     } catch (err) {
//       alert("Something went wrong with the server connection.");
//       setIsSubmitting(false);
//     }
//   };

//   // Only the InitialLoader remains a full-screen override for the first entry
//   if (isLoading) return <InitialLoader />;

//   return (
//     <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-8" style={{ minHeight: "100vh" }}>
      
//       <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       <div className="fixed top-4 left-4 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-20 h-auto invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"/>
//       </div>

//       <div className="relative z-10 w-full max-w-[850px]">
//         <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
//           Commit 3.0
//         </h1>

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
//                 <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="xxxxxxxxxx" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">AKGEC Email</label>
//                 <input type="email" name="Email" placeholder="e.g. namexxxxxxx@akgec.ac.in" required value={contactData.Email} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <p className="text-md font-black text-black uppercase">Residency Status</p>
//               <div className="flex gap-4">
//                 {["Hostler", "Day Scholar"].map((res) => (
//                   <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black'}`}>
//                     <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
//                     {res}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
//               <div className="flex flex-col items-center gap-1">
//                 <p className="text-[10px] font-black uppercase text-black/60">Scan QR to Pay</p>
//                 <div onClick={() => setIsRevealed(true)} className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white">
//                   <img src={scanner} alt="QR" className={`w-20 h-20 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase">UTR / Transaction ID</label>
//                 <input type="text" name="transactionId" placeholder="e.g. xxxxxxxxxxxxxx.." required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//             </div>

//             {/* DYNAMIC SUBMIT BUTTON WITH INLINE SPINNER */}
//             <button 
//               type="submit" 
//               disabled={isSubmitting} 
//               className={`w-full py-4 border-[4px] border-black text-2xl font-black rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase transition-all flex items-center justify-center gap-3 ${
//                 isSubmitting 
//                 ? 'bg-[#10b981] shadow-none translate-y-1' 
//                 : 'bg-[#f43f5e] text-white hover:translate-y-1 hover:shadow-none active:scale-95' 
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Processing...
//                 </>
//               ) : (
//                 "Finish Registration"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



// import { useState, useEffect } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useNavigate, useLocation } from "react-router-dom";
// import scanner from "../assets/scanner.png";

// import LoadingAnimation from "./LoadingAnimation"; 

// const Contact = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { executeRecaptcha } = useGoogleReCaptcha(); 
  
//   // Logic Control States
//   const [isLoading, setIsLoading] = useState(true);    // Logo Loader (Initial)
//   const [isSubmitting, setIsSubmitting] = useState(false); // Button Loader (Submit)
//    const [isRevealed, setIsRevealed] = useState(false);
//   const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
//   const { formData } = location.state || {};

//   const [contactData, setContactData] = useState({
//     contact: "", 
//     Email: "", 
//     Residence: "", 
//     transactionId: "", 
//   });

//   // Initial cinematic load for Commit 3.0 entry
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);


//   const handleChange = (e) => {
//     setContactData({ ...contactData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const txId = contactData.transactionId.trim().toUpperCase();
//     if (txId.length < 13) {
//       alert("Invalid Transaction ID. Minimum 13 characters required.");
//       return;
//     }

//     // ACTIVATE BUTTON PROCESSING STATE
//     setIsSubmitting(true);

//     try {
//       if (!executeRecaptcha) return;
//       const token = await executeRecaptcha("form_submit");
      
//       const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           Token: token, 
//           formData, 
//           contactData: { ...contactData, transactionId: txId } 
//         }),
//       });
//       const result = await res.json();
      
//       if (result.success) {
//         // Ensuring data sent to success page is perfectly synced
//         navigate("/registered", { 
//           state: { studentData: { ...formData, ...contactData, transactionId: txId } } 
//         });
//       } else {
//         alert(result.message || "Registration failed.");
//         setIsSubmitting(false); // Revert button if failed
//       }
//     } catch (err) {
//       alert("Something went wrong with the server connection.");
//       setIsSubmitting(false);
//     }
//   };

//   // Only the InitialLoader remains a full-screen override for the first entry
//   // if (isLoading) return <InitialLoader />;

//   return (
//     <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-8" style={{ minHeight: "100vh" }}>
      
//       {/* Background Grids */}
//       <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-20 h-auto invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"/>
//       </div>

//       <div className="relative z-10 w-full max-w-[850px]">
//         <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
//           Commit 3.0
//         </h1>

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
//                 <label className="text-md font-black text-black uppercase tracking-tight">Contact Number</label>
//                 <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="XXXXXXXXXX" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase tracking-tight">AKGEC Email</label>
//                 <input type="email" name="Email" placeholder="e.g. namexxxxxxx@akgec.ac.in" required value={contactData.Email} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <p className="text-md font-black text-black uppercase tracking-tight">Residency Status</p>
//               <div className="flex gap-4">
//                 {["Hostler", "Day Scholar"].map((res) => (
//                   <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black'}`}>
//                     <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
//                     {res}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
//               <div className="flex flex-col items-center gap-1">
//                 <p className="text-[10px] font-black uppercase text-black/60">Scan QR to Pay</p>
//                 <div onClick={() => setIsRevealed(true)} className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white">
//                   <img src={scanner} alt="QR" className={`w-20 h-20 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-md font-black text-black uppercase tracking-tight">UTR / Transaction ID</label>
//                 <input type="text" name="transactionId" placeholder="e.g. HDBI520355" required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-black text-black" />
//               </div>
//             </div>

//             {/* DYNAMIC SUBMIT BUTTON WITH INLINE SPINNER */}
//             <button 
//               type="submit" 
//               disabled={isSubmitting} 
//               className={`w-full py-4 border-[4px] border-black text-2xl font-black rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase transition-all flex items-center justify-center gap-3 ${
//                 isSubmitting 
//                 ? 'bg-[#10b981] shadow-none translate-y-1' 
//                 : 'bg-[#f43f5e] text-white hover:translate-y-1 hover:shadow-none active:scale-95' 
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Processing...
//                 </>
//               ) : (
//                 "Finish Registration"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useNavigate, useLocation } from "react-router-dom";
import scanner from "../assets/scanner.png";
// import { InitialLoader } from "./LoadingAnimation"; 

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha(); 
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false); 

  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "https://oss-ea26.onrender.com";
  const { formData } = location.state || {};

  const [contactData, setContactData] = useState({
    contact: "", Email: "", Residence: "", transactionId: "", 
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const txId = contactData.transactionId.trim().toUpperCase();
    if (txId.length < 13) {
      alert("Invalid Transaction ID. Minimum 13 characters required.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (!executeRecaptcha) return;
      const token = await executeRecaptcha("form_submit");
      
      const res = await fetch(`${backendUrl}/api/v1/recaptcha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          Token: token, formData, contactData: { ...contactData, transactionId: txId } 
        }),
      });
      const result = await res.json();
      
      if (result.success) {
        navigate("/registered", { 
          state: { studentData: { ...formData, ...contactData, transactionId: txId } } 
        });
      } else {
        alert(result.message || "Registration failed.");
        setIsSubmitting(false);
      }
    } catch (err) {
      alert("Something went wrong with the server connection.");
      setIsSubmitting(false);
    }
  };

  // if (isLoading) return <InitialLoader />;

  return (
    <div className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-8" style={{ minHeight: "100vh" }}>
      
      {/* --- FULL SCREEN QR ZOOM MODAL --- */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-4"
          onClick={() => setIsZoomed(false)} 
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 bg-[#f43f5e] text-white w-12 h-12 rounded-full border-4 border-black font-black flex items-center justify-center shadow-[4px_4px_0px_rgba(255,255,255,1)] active:scale-95 z-[210]"
            onClick={() => setIsZoomed(false)}
          >
            X
          </button>
          
          <div className="relative w-full max-w-[90vw] md:max-w-[500px] aspect-square bg-white p-4 border-[6px] border-[#facc15] rounded-3xl shadow-[0px_0px_50px_rgba(250,204,21,0.3)] flex flex-col items-center justify-center">
            <img src={scanner} alt="QR Full Screen" className="w-full h-full object-contain" />
            {/* <p className="absolute -bottom-12 left-0 w-full text-center font-black text-[#facc15] uppercase tracking-[0.2em] text-xl drop-shadow-lg">
              SCAN & PAY ₹100
            </p> */}
          </div>
        </div>
      )}

      {/* Background Grids & Logo */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
      <div className="fixed top-4 left-4 z-50">
        <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-20 h-auto invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"/>
      </div>

      <div className="relative z-10 w-full max-w-[850px]">
        <h1 className="text-4xl md:text-6xl text-center font-black text-black mb-4 uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
          Commit 3.0
        </h1>

        <div className="bg-[#bfdbfe] border-[4px] border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
          <div className="bg-[#10b981] border-b-[4px] border-black p-3 flex justify-between items-center">
            <div className="text-2xl">⭐</div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#2dd4bf]"></div>
              <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#fbbf24]"></div>
              <div className="w-5 h-5 rounded-full border-[3px] border-black bg-[#f43f5e]"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-md font-black text-black uppercase tracking-tight">Contact Number</label>
                <input type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="XXXXXXXXXX" required value={contactData.contact} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-md font-black text-black uppercase tracking-tight">AKGEC Email</label>
                <input type="email" name="Email" placeholder="e.g. namexxxxxxx@akgec.ac.in" required value={contactData.Email} onChange={handleChange} className="w-full px-4 py-2.5 border-[3px] border-black rounded-xl bg-white font-black text-black" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-md font-black text-black uppercase tracking-tight">Residency Status</p>
              <div className="flex gap-4">
                {["Hostler", "Day Scholar"].map((res) => (
                  <label key={res} className={`flex-1 flex items-center justify-center py-3 border-[4px] border-black rounded-2xl cursor-pointer font-black uppercase text-lg ${contactData.Residence === res ? 'bg-[#1d4ed8] text-white shadow-[6px_6px_0px_rgba(0,0,0,1)]' : 'bg-white text-black'}`}>
                    <input type="radio" name="Residence" value={res} checked={contactData.Residence === res} onChange={handleChange} className="hidden" />
                    {res}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-black/5 p-4 rounded-2xl border-2 border-dashed border-black/20">
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] font-black uppercase text-black/60">Tap to Zoom QR</p>
                <div 
                  onClick={() => {
                    if (!isRevealed) setIsRevealed(true);
                    else setIsZoomed(true); 
                  }} 
                  className="relative cursor-pointer rounded-lg border-[3px] border-black p-1 bg-white hover:scale-105 transition-transform"
                >
                  <img src={scanner} alt="QR" className={`w-20 h-20 transition-all duration-500 ${isRevealed ? "blur-0" : "blur-md opacity-30"}`} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-md font-black text-black uppercase tracking-tight">UTR / Transaction ID</label>
                <input type="text" name="transactionId" placeholder="e.g. HDBI520355" required value={contactData.transactionId} onChange={handleChange} className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-black text-black" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className={`w-full py-4 border-[4px] border-black text-2xl font-black rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase transition-all flex items-center justify-center gap-3 ${
                isSubmitting 
                ? 'bg-[#10b981] shadow-none translate-y-1' 
                : 'bg-[#f43f5e] text-white hover:translate-y-1 hover:shadow-none active:scale-95' 
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                "Finish Registration"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;