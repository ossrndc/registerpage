// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import LoadingAnimation from "./LoadingAnimation";
// import  scanner from "../assets/scanner.png" ;

// const Name = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     Name: "",
//     StudentNO: "",
//     Gender: "",
//     Branch: "",
//     Domain: "",
//   });


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     const fixMobileViewport = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//       const viewport = document.querySelector("meta[name=viewport]");
//       if (viewport) {
//         viewport.setAttribute(
//           "content",
//           "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, height=device-height"
//         );
//       }
//     };

//     fixMobileViewport();
//     window.addEventListener("resize", fixMobileViewport);
//     window.addEventListener("orientationchange", fixMobileViewport);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", fixMobileViewport);
//       window.removeEventListener("orientationchange", fixMobileViewport);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateStudentId = () => {
//     const studentIdRegex =
//       /^(?:22|23|24|25)[\dDd-]{3,8}$/;
//     if (!studentIdRegex.test(formData.StudentNO)) {
//       alert("Invalid StudentID. Only for 2nd, 3rd and 4th Year students!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateStudentId()) {
//       return;
//     }

//     navigate("/contact", { state: { formData } });
//   };

//   if (isLoading) {
//     return <LoadingAnimation />;
//   }

//   return (
//     <div
//   className="w-full mobile-container overflow-hidden md:overflow-auto p-6 md:p-20 flex flex-col"
//   style={{
//     minHeight: "calc(var(--vh, 1vh) * 100)",
//     background: "linear-gradient(to bottom, black, rgb(6,58,60), rgb(52,116,119), white)",
//     backgroundAttachment: "fixed",
//     backgroundSize: "cover",
//   }}
// >

//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
//         <img
//           src="/OSS.png"
//           alt="OSS Logo"
//           className="w-16 sm:w-20 md:w-28 h-auto invert max-w-full"
//         />
//       </div>
//       <div className="absolute top-8 left-0 md:left-40 lg:left-80 xl:left-140 z-0">
//         <img
//           src="/images/element.png"
//           alt="Element"
//           className=""
//         />
//       </div>
//       {/* Arrow Icon */}
//       {/* <div className="fixed top-22 md:hidden xl:block right-10 md:top-36 md:right-60 z-60">
        
//         <div className="flex items-center rotate-[310deg] md:rotate-[300deg]">
          
//           <div className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[rgb(133,206,195)]"></div>
//           <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[30px] border-l-[rgb(133,206,195)] sm:border-t-[28px] sm:border-b-[28px] sm:border-l-[42px] md:border-t-[40px] md:border-b-[40px] md:border-l-[60px]"></div>
//         </div>
//       </div> */}
//       {/* <div className="fixed top-30 md:hidden xl:block right-0 sm:top-40 sm:-right-10 md:top-50 md:right-0 z-50 h-20 w-20 sm:h-48 sm:w-48 md:h-80 md:w-80">
        
//         <img
//           src="/images/line.png"
//           alt="line"
//           className="w-full h-full object-contain"
//         />
//       </div> */}
//       {/* Penguine Icon */}
//       {/* <div className="fixed hidden lg:block top-102 md:hidden xl:block left-6 md:top-30 -rotate-46 md:left-100 z-60">
        
//         <img
//           src="/images/penguine2.png"
//           alt="Cross"
//           className="w-10 sm:w-8 md:w-10 lg:w-18 h-auto max-w-full"
//         />
//       </div> */}
//       <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-white flex-shrink-0">
//         "HOUR OF CODE 4.0"
//       </h1>
//       <div className="w-full max-w-[600px] mt-2 md:mt-6 mx-auto rounded-lg p-6 flex-1 flex flex-col justify-center">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           {/* Name */}
//           <div>
//             <label htmlFor="Name" className="block text-xl text-white">
//               Full Name
//             </label>
//             <input
//               id="Name"
//               type="text"
//               name="Name"
//               pattern="^\s*[A-Za-z]{2,}( +[A-Za-z]{2,})*\s*$"
//               title="Enter a valid name (letters only, at least 2 characters each part)"
//               value={formData.Name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-70 relative"
//               required
//             />
//           </div>

//           {/* Student No */}
//           <div>
//             <label htmlFor="StudentNO" className="block text-xl text-white">
//               Student No
//             </label>
//             <input
//               id="StudentNO"
//               type="text"
//               name="StudentNO"
//               maxLength="10"
//               value={formData.StudentNO}
//               onChange={handleChange}
//               onBlur={validateStudentId}
//               className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-70 relative"
//               required
//             />
            
//           </div>

//           {/* Gender */}
//           <div>
//             <p className="text-white tracking-tight text-xl mb-2">Gender</p>
//             <div className="flex flex-wrap gap-6 md:gap-32 z-50 text-white">
//               <label className="flex items-center gap-1 text-xl cursor-pointer">
//                 <input
//                   type="radio"
//                   name="Gender"
//                   value="male"
//                   checked={formData.Gender === "male"}
//                   onChange={handleChange}
//                   className="accent-black"
//                 />
//                 Male
//               </label>
//               <label className="flex items-center gap-1 text-xl z-50 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="Gender"
//                   value="female"
//                   checked={formData.Gender === "female"}
//                   onChange={handleChange}
//                   className="accent-black"
//                 />
//                 Female
//               </label>
//             </div>
//           </div>

//           {/* Branch & Domain */}
//           <div className="flex flex-col md:flex-row gap-4 justify-between">
//             <div className="w-full">
//               <label htmlFor="Branch" className="block text-xl text-white">
//                 Branch
//               </label>
//               <select
//                 id="Branch"
//                 name="Branch"
//                 value={formData.Branch}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-10 relative"
//                 required
//               >
//                 <option value="">Select Branch</option>
//                 <option value="CSE">CSE</option>
//                 <option value="CS">CS</option>
//                 <option value="CSE-AIML">CSE-AIML</option>
//                 <option value="AIML">AIML</option>
//                 <option value="CSE-DS">CSE-DS</option>
//                 <option value="CS-Hindi">CS-Hindi</option>
//                 <option value="IT">IT</option>
//                 <option value="CSIT">CSIT</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EE">EE</option>
//                 <option value="ME">ME</option>
//                 <option value="Civil">Civil</option>
//               </select>
//             </div>

//             {/* <div className="w-full">
//               <label htmlFor="Domain" className="block text-xl text-white">
//                 Domain
//               </label>
//               <select
//                 id="Domain"
//                 name="Domain"
//                 value={formData.Domain}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border backdrop-blur-md text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] z-10 relative"
//                 required
//               >
//                 <option value="">Select Domain</option>
//                 <option value="developer">Developer</option>
//                 <option value="designer">Designer</option>
//               </select>
//             </div> */}
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-4 text-black border-black outline-none bg-[rgb(210,206,206)] border text-xl px-4 backdrop-blur-md z-10 relative active:scale-90 transition-transform duration-150 py-2 rounded-lg font-semibold"
//           >
//             Next
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Name;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import LoadingAnimation from "./LoadingAnimation";
// import scanner from "../assets/scanner.png";

// const Name = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   // State to track if the scanner is revealed
//   const [isRevealed, setIsRevealed] = useState(false);

//   const [formData, setFormData] = useState({
//     Name: "",
//     StudentNO: "",
//     Gender: "",
//     Branch: "",
//     Domain: "",
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     const fixMobileViewport = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//       const viewport = document.querySelector("meta[name=viewport]");
//       if (viewport) {
//         viewport.setAttribute(
//           "content",
//           "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, height=device-height"
//         );
//       }
//     };

//     fixMobileViewport();
//     window.addEventListener("resize", fixMobileViewport);
//     window.addEventListener("orientationchange", fixMobileViewport);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", fixMobileViewport);
//       window.removeEventListener("orientationchange", fixMobileViewport);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateStudentId = () => {
//     const studentIdRegex = /^(?:22|23|24|25)[\dDd-]{3,8}$/;
//     if (!studentIdRegex.test(formData.StudentNO)) {
//       alert("Invalid StudentID. Only for 2nd, 3rd and 4th Year students!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateStudentId()) {
//       return;
//     }
//     navigate("/contact", { state: { formData } });
//   };

//   if (isLoading) {
//     return <LoadingAnimation />;
//   }

//   return (
//     <div
//       className="w-full mobile-container overflow-hidden md:overflow-auto p-6 md:p-20 flex flex-col"
//       style={{
//         minHeight: "calc(var(--vh, 1vh) * 100)",
//         background: "linear-gradient(to bottom, black, rgb(6,58,60), rgb(52,116,119), white)",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover",
//       }}
//     >
//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-16 sm:w-20 md:w-28 h-auto invert max-w-full" />
//       </div>

//       <div className="absolute top-8 left-0 md:left-40 lg:left-80 xl:left-140 z-0">
//         <img src="/images/element.png" alt="Element" className="" />
//       </div>

//       <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-white flex-shrink-0">
//         "HOUR OF CODE 4.0"
//       </h1>

//       <div className="w-full max-w-[600px] mt-2 md:mt-6 mx-auto rounded-lg p-6 flex-1 flex flex-col justify-center">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           {/* Name Input */}
//           <div>
//             <label htmlFor="Name" className="block text-xl text-white">Full Name</label>
//             <input
//               id="Name"
//               type="text"
//               name="Name"
//               pattern="^\s*[A-Za-z]{2,}( +[A-Za-z]{2,})*\s*$"
//               title="Enter a valid name"
//               value={formData.Name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-10 relative"
//               required
//             />
//           </div>

//           {/* Student No Input */}
//           <div>
//             <label htmlFor="StudentNO" className="block text-xl text-white">Student No</label>
//             <input
//               id="StudentNO"
//               type="text"
//               name="StudentNO"
//               maxLength="10"
//               value={formData.StudentNO}
//               onChange={handleChange}
//               onBlur={validateStudentId}
//               className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-10 relative"
//               required
//             />
//           </div>

//           {/* Gender Selection */}
//           <div>
//             <p className="text-white tracking-tight text-xl mb-2">Gender</p>
//             <div className="flex flex-wrap gap-6 md:gap-32 z-10 text-white">
//               <label className="flex items-center gap-1 text-xl cursor-pointer">
//                 <input type="radio" name="Gender" value="male" checked={formData.Gender === "male"} onChange={handleChange} className="accent-black" />
//                 Male
//               </label>
//               <label className="flex items-center gap-1 text-xl cursor-pointer">
//                 <input type="radio" name="Gender" value="female" checked={formData.Gender === "female"} onChange={handleChange} className="accent-black" />
//                 Female
//               </label>
//             </div>
//           </div>

//           <div className="w-full">
//             <label htmlFor="Branch" className="block text-xl text-white">Branch</label>
//             <select
//               id="Branch"
//               name="Branch"
//               value={formData.Branch}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border text-black border-black rounded-lg outline-none bg-[rgb(175,181,181)] backdrop-blur-md z-10 relative"
//               required
//             >
//               <option value="">Select Branch</option>
//               <option value="CSE">CSE</option>
//               <option value="CS">CS</option>
//               <option value="CSE-AIML">CSE-AIML</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
             
//             </select>
//           </div>

//           {/* SCANNER SECTION */}
//             <div className="flex flex-col items-center gap-2 mt-4 relative z-50">
//               <p className="text-white text-lg font-medium">Scan to Proceed</p>
//               <div 
//                 onClick={() => {
//                   console.log("Scanner clicked!"); 
//                   setIsRevealed(!isRevealed);
//                 }}
//                 className="relative cursor-pointer overflow-hidden rounded-xl border-2 border-white/30 hover:border-white/60 transition-all p-4 bg-white/10 backdrop-blur-sm pointer-events-auto"
//               >
//                 <img 
//                   src={scanner} 
//                   alt="Scanner" 
//                   className={`w-44 h-44 object-contain transition-all duration-700 ease-in-out ${
//                     isRevealed ? "blur-0 scale-100" : "blur-2xl scale-90 opacity-50"
//                   }`} 
//                 />
    
//     {!isRevealed && (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-white font-bold text-sm bg-black/60 px-4 py-2 rounded-full border border-white/20 shadow-lg animate-pulse">
//           Click to Reveal
//         </span>
//       </div>
//     )}
//   </div>
// </div>

//           <button
//             type="submit"
//             className="w-full mt-4 text-black border-black outline-none bg-[rgb(210,206,206)] border text-xl px-4 backdrop-blur-md z-10 relative active:scale-95 transition-transform duration-150 py-2 rounded-lg font-semibold"
//           >
//             Next
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Name;






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import LoadingAnimation from "./LoadingAnimation";

// const Name = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     Name: "",
//     StudentNO: "",
//     Gender: "",
//     Branch: "",
//     Domain: "",
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     const fixMobileViewport = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };

//     fixMobileViewport();
//     window.addEventListener("resize", fixMobileViewport);
//     window.addEventListener("orientationchange", fixMobileViewport);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", fixMobileViewport);
//       window.removeEventListener("orientationchange", fixMobileViewport);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateStudentId = () => {
//     const studentIdRegex = /^(?:24|25)[\dDd-]{3,8}$/;
//     if (!studentIdRegex.test(formData.StudentNO)) {
//       alert("Invalid StudentID. Only for 1st, 2nd Year students!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateStudentId()) {
//       return;
//     }
//     navigate("/contact", { state: { formData } });
//   };

//   if (isLoading) {
//     return <LoadingAnimation />;
//   }

//   return (
//     <div
//       className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans selection:bg-emerald-400"
//       style={{
//         minHeight: "calc(var(--vh, 1vh) * 100)",
//       }}
//     >
//       {/* 1. Retro Grid Overlay */}
//       <div 
//         className="absolute inset-0 z-0 opacity-100"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #000 1px, transparent 1px),
//             linear-gradient(to bottom, #000 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//         }}
//       ></div>

//       {/* 2. Color Block Shapes */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 z-50">
//         <img
//           src="/OSS.png"
//           alt="OSS Logo"
//           className="w-16 md:w-20 h-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] invert"
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className="w-full max-w-[800px] relative z-10 px-4">
        
//         <h1 className="text-5xl md:text-8xl text-center font-black text-black mb-6 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic">
//           Commit 3.0
//         </h1>

//         <div className="bg-[#bfdbfe] border-[4px] border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)]">
//           {/* Window Header */}
//           <div className="bg-[#10b981] border-b-[4px] border-black p-4 flex justify-between items-center">
//             <div className="text-3xl drop-shadow-md">⭐</div>
//             <div className="flex gap-3">
//               <div className="w-6 h-6 rounded-full border-[3px] border-black bg-[#2dd4bf]"></div>
//               <div className="w-6 h-6 rounded-full border-[3px] border-black bg-[#fbbf24]"></div>
//               <div className="w-6 h-6 rounded-full border-[3px] border-black bg-[#f43f5e]"></div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="p-8 md:p-10 flex flex-col gap-8">
            
//             {/* Row 1: Name & Student No */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="Name" className="text-xl font-black text-black uppercase tracking-tight">Full Name</label>
//                 <input
//                   id="Name"
//                   type="text"
//                   name="Name"
//                   placeholder="Enter Name"
//                   value={formData.Name}
//                   onChange={handleChange}
//                   // Force text color to black for visibility
//                   className="w-full px-5 py-4 border-[4px] border-black rounded-2xl outline-none bg-white font-black text-black text-lg shadow-[4px_4px_0px_rgba(0,0,0,0.1)] focus:bg-emerald-50 transition-colors placeholder:text-black/30"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="StudentNO" className="text-xl font-black text-black uppercase tracking-tight">Student ID</label>
//                 <input
//                   id="StudentNO"
//                   type="text"
//                   name="StudentNO"
//                   placeholder="25xxxxx"
//                   maxLength="10"
//                   value={formData.StudentNO}
//                   onChange={handleChange}
//                   onBlur={validateStudentId}
//                   // Force text color to black for visibility
//                   className="w-full px-5 py-4 border-[4px] border-black rounded-2xl outline-none bg-white font-black text-black text-lg shadow-[4px_4px_0px_rgba(0,0,0,0.1)] focus:bg-emerald-50 transition-colors placeholder:text-black/30"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Row 2: Gender & Branch */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//               <div className="flex flex-col gap-3">
//                 <p className="text-xl font-black text-black uppercase tracking-tight">Gender Selection</p>
//                 <div className="flex gap-4">
//                   {["male", "female"].map((g) => (
//                     <label key={g} className={`flex-1 flex items-center justify-center gap-3 py-4 border-[4px] border-black rounded-2xl cursor-pointer transition-all font-black uppercase text-lg ${formData.Gender === g ? 'bg-[#10b981] text-black shadow-none translate-y-1' : 'bg-white text-black shadow-[4px_4px_0px_rgba(0,0,0,1)]'}`}>
//                       <input 
//                         type="radio" 
//                         name="Gender" 
//                         value={g} 
//                         checked={formData.Gender === g} 
//                         onChange={handleChange} 
//                         className="hidden" 
//                       />
//                       {g}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <label htmlFor="Branch" className="text-xl font-black text-black uppercase tracking-tight">Branch</label>
//                 <div className="relative group">
//                   <select
//                     id="Branch"
//                     name="Branch"
//                     value={formData.Branch}
//                     onChange={handleChange}
//                     // Select text is white to contrast with pink/red background
//                     className="w-full px-5 py-4 border-[4px] border-black rounded-2xl outline-none bg-[#f43f5e] text-white font-black text-lg appearance-none cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,1)] focus:translate-y-1 focus:shadow-none transition-all"
//                     required
//                   >
//                     <option value="" className="bg-white text-black">-- SELECT --</option>
//                     {["CSE", "IT", "ECE", "CS", "AIML", "EN", "ME", "Civil"].map(branch => (
//                         <option key={branch} value={branch} className="bg-white text-black font-bold">
//                             {branch}
//                         </option>
//                     ))}
//                   </select>
//                   <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white text-xl font-black">▼</div>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Action */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full md:w-2/3 mx-auto block bg-black text-white py-5 rounded-2xl font-black text-2xl uppercase tracking-[0.2em] shadow-[8px_8px_0px_rgba(16,185,129,1)] hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
//               >
//                 PROCEED
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Name;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // Use the named import to avoid the "InitialLoader is not defined" error
// import { InitialLoader } from "./LoadingAnimation"; 

// const Name = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     Name: "",
//     StudentNO: "",
//     Gender: "",
//     Branch: "",
//     Domain: "",
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     const fixMobileViewport = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };

//     fixMobileViewport();
//     window.addEventListener("resize", fixMobileViewport);
//     window.addEventListener("orientationchange", fixMobileViewport);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", fixMobileViewport);
//       window.removeEventListener("orientationchange", fixMobileViewport);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateStudentId = () => {
//     const studentIdRegex = /^(?:24|25)[\dDd-]{3,8}$/;
//     if (!studentIdRegex.test(formData.StudentNO)) {
//       alert("Invalid StudentID. Only for 1st, 2nd Year students!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateStudentId()) {
//       return;
//     }
//     navigate("/contact", { state: { formData } });
//   };

//   if (isLoading) {
//     return <InitialLoader />;
//   }

//   return (
//     <div
//       className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans selection:bg-emerald-400 px-4"
//       style={{
//         minHeight: "calc(var(--vh, 1vh) * 100)",
//       }}
//     >
//       {/* 1. Retro Grid Overlay */}
//       <div 
//         className="absolute inset-0 z-0 opacity-100 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
//           backgroundSize: '60px 60px',
//         }}
//       ></div>

//       {/* 2. Color Block Shapes */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       {/* OSS Logo - Fixed Position */}
//       <div className="fixed top-4 left-4 z-50">
//         <img
//           src="/OSS.png"
//           alt="OSS Logo"
//           className="w-12 md:w-20 h-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] invert"
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className="w-full max-w-[800px] relative z-10 flex flex-col items-center">
        
//         {/* MOBILE FIX: pt-16 on mobile ensures it clears the logo */}
//         <h1 className="text-3xl sm:text-6xl md:text-8xl text-center font-black text-black mb-4 md:mb-8 tracking-tighter drop-shadow-[3px_3px_0px_rgba(255,255,255,1)] uppercase italic leading-none pt-16 md:pt-0">
//           Commit 3.0
//         </h1>

//         {/* Compact Form Container */}
//         <div className="w-full bg-[#bfdbfe] border-[4px] border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          
//           <div className="bg-[#10b981] border-b-[4px] border-black p-3 md:p-4 flex justify-between items-center">
//             <div className="text-xl md:text-3xl drop-shadow-md">⭐</div>
//             <div className="flex gap-2 md:gap-3">
//               <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#2dd4bf]"></div>
//               <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#fbbf24]"></div>
//               <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#f43f5e]"></div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="p-5 md:p-10 flex flex-col gap-4 md:gap-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="Name" className="text-sm md:text-xl font-black text-black uppercase tracking-tight">Full Name</label>
//                 <input
//                   id="Name"
//                   type="text"
//                   name="Name"
//                   placeholder="Enter Name"
//                   value={formData.Name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 md:py-4 border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl outline-none bg-white font-black text-black text-base md:text-lg shadow-[3px_3px_0px_rgba(0,0,0,0.1)] placeholder:text-black/30"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label htmlFor="StudentNO" className="text-sm md:text-xl font-black text-black uppercase tracking-tight">Student ID</label>
//                 <input
//                   id="StudentNO"
//                   type="text"
//                   name="StudentNO"
//                   placeholder="25xxxxx"
//                   maxLength="10"
//                   value={formData.StudentNO}
//                   onChange={handleChange}
//                   onBlur={validateStudentId}
//                   className="w-full px-4 py-3 md:py-4 border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl outline-none bg-white font-black text-black text-base md:text-lg shadow-[3px_3px_0px_rgba(0,0,0,0.1)] placeholder:text-black/30"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm md:text-xl font-black text-black uppercase tracking-tight">Gender</p>
//                 <div className="flex gap-3">
//                   {["male", "female"].map((g) => (
//                     <label key={g} className={`flex-1 flex items-center justify-center py-3 md:py-4 border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl cursor-pointer transition-all font-black uppercase text-sm md:text-lg ${formData.Gender === g ? 'bg-[#10b981] text-black shadow-none translate-y-0.5' : 'bg-white text-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'}`}>
//                       <input type="radio" name="Gender" value={g} checked={formData.Gender === g} onChange={handleChange} className="hidden" />
//                       {g}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label htmlFor="Branch" className="text-sm md:text-xl font-black text-black uppercase tracking-tight">Branch</label>
//                 <div className="relative">
//                   <select
//                     id="Branch"
//                     name="Branch"
//                     value={formData.Branch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 md:py-4 border-[3px] md:border-[4px] border-black rounded-xl md:rounded-2xl outline-none bg-[#f43f5e] text-white font-black text-base md:text-lg appearance-none cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,1)]"
//                     required
//                   >
//                     <option value="" className="bg-white text-black">-- SELECT --</option>
//                     {["CSE", "IT", "ECE", "CS", "AIML", "EN", "ME", "Civil"].map(branch => (
//                       <option key={branch} value={branch} className="bg-white text-black font-bold">{branch}</option>
//                     ))}
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white text-lg font-black">▼</div>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-2 md:pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-2xl uppercase tracking-[0.1em] shadow-[5px_5px_0px_rgba(16,185,129,1)] active:scale-95 transition-all"
//               >
//                 PROCEED
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Name;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // Correct named import to prevent ReferenceError
// import { InitialLoader } from "./LoadingAnimation"; 

// const Name = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     Name: "",
//     StudentNO: "",
//     Gender: "",
//     Branch: "",
//     Domain: "",
//   });

//   useEffect(() => {
//     // Initial cinematic load for Commit 3.0
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     const fixMobileViewport = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };

//     fixMobileViewport();
//     window.addEventListener("resize", fixMobileViewport);
//     window.addEventListener("orientationchange", fixMobileViewport);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", fixMobileViewport);
//       window.removeEventListener("orientationchange", fixMobileViewport);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateStudentId = () => {
//     // Regex for AKGEC 1st/2nd Year students
//     const studentIdRegex = /^(?:24|25)[\dDd-]{3,8}$/;
//     if (!studentIdRegex.test(formData.StudentNO)) {
//       alert("Invalid StudentID. Only for 1st, 2nd Year students!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateStudentId()) {
//       return;
//     }
//     navigate("/contact", { state: { formData } });
//   };

//   if (isLoading) {
//     return <InitialLoader />;
//   }

//   return (
//     <div
//       className="w-full relative overflow-x-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans selection:bg-emerald-400 px-4"
//       style={{
//         minHeight: "calc(var(--vh, 1vh) * 100)",
//       }}
//     >
//       {/* 1. Retro Grid Overlay */}
//       <div 
//         className="absolute inset-0 z-0 opacity-100 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
//           backgroundSize: '60px 60px',
//         }}
//       ></div>

//       {/* 2. Color Block Shapes */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
//       {/* OSS Logo - Fixed Position */}
//       <div className="fixed top-4 left-4 z-50">
//         <img
//           src="/OSS.png"
//           alt="OSS Logo"
//           className="w-12 md:w-20 h-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] invert"
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className="w-full max-w-[800px] relative z-10 flex flex-col items-center transform scale-95 sm:scale-100">
        
//         {/* Header: Reduced margin and padding for mobile */}
//         <h1 className="text-4xl sm:text-6xl md:text-8xl text-center font-black text-black mb-2 md:mb-8 tracking-tighter drop-shadow-[3px_3px_0px_rgba(255,255,255,1)] uppercase italic leading-none pt-14 md:pt-0">
//           Commit 3.0
//         </h1>

//         {/* Form Container: Reduced shadow and borders for mobile */}
//         <div className="w-full bg-[#bfdbfe] border-[3px] md:border-[4px] border-black rounded-2xl md:rounded-3xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_rgba(0,0,0,1)]">
          
//           {/* Window Header: Compact version */}
//           <div className="bg-[#10b981] border-b-[3px] md:border-b-[4px] border-black p-2 md:p-4 flex justify-between items-center">
//             <div className="text-xl md:text-3xl drop-shadow-md">⭐</div>
//             <div className="flex gap-2 md:gap-3">
//               <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#2dd4bf]"></div>
//               <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#fbbf24]"></div>
//               <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#f43f5e]"></div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="p-4 md:p-10 flex flex-col gap-3 md:gap-8">
            
//             {/* Row 1: Name & Student No */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="Name" className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Full Name</label>
//                 <input
//                   id="Name"
//                   type="text"
//                   name="Name"
//                   placeholder="Enter Name"
//                   value={formData.Name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl outline-none bg-white font-black text-black text-sm md:text-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] placeholder:text-black/30"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label htmlFor="StudentNO" className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Student ID</label>
//                 <input
//                   id="StudentNO"
//                   type="text"
//                   name="StudentNO"
//                   placeholder="25xxxxx"
//                   maxLength="10"
//                   value={formData.StudentNO}
//                   onChange={handleChange}
//                   onBlur={validateStudentId}
//                   className="w-full px-3 py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl outline-none bg-white font-black text-black text-sm md:text-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] placeholder:text-black/30"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Row 2: Gender & Branch */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
//               <div className="flex flex-col gap-1.5">
//                 <p className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Gender</p>
//                 <div className="flex gap-2">
//                   {["male", "female"].map((g) => (
//                     <label key={g} className={`flex-1 flex items-center justify-center py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl cursor-pointer transition-all font-black uppercase text-xs md:text-lg ${formData.Gender === g ? 'bg-[#10b981] text-black translate-y-0.5' : 'bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'}`}>
//                       <input type="radio" name="Gender" value={g} checked={formData.Gender === g} onChange={handleChange} className="hidden" />
//                       {g}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label htmlFor="Branch" className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Branch</label>
//                 <div className="relative">
//                   <select
//                     id="Branch"
//                     name="Branch"
//                     value={formData.Branch}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl outline-none bg-[#f43f5e] text-white font-black text-sm md:text-lg appearance-none cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]"
//                     required
//                   >
//                     <option value="" className="bg-white text-black">-- SELECT --</option>
//                     {["CSE", "IT", "ECE", "CS", "AIML", "EN", "ME", "Civil"].map(branch => (
//                       <option key={branch} value={branch} className="bg-white text-black font-bold">{branch}</option>
//                     ))}
//                   </select>
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white text-base font-black">▼</div>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Action: Smaller padding for mobile */}
//             <div className="pt-1 md:pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 md:py-5 rounded-lg md:rounded-2xl font-black text-base md:text-2xl uppercase tracking-[0.1em] shadow-[4px_4px_0px_rgba(16,185,129,1)] active:scale-95 transition-all"
//               >
//                 PROCEED
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Name;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Correct named import to prevent ReferenceError
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
    // Initial cinematic load for Commit 3.0
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const fixMobileViewport = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
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

  const validateStudentId = () => {
    // Regex for AKGEC 1st/2nd Year students
    const studentIdRegex = /^(?:24|25)[\dDd-]{3,8}$/;
    if (!studentIdRegex.test(formData.StudentNO)) {
      alert("Invalid StudentID. Only for 1st, 2nd Year students!!");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStudentId()) {
      return;
    }
    navigate("/contact", { state: { formData } });
  };

  // if (isLoading) {
  //   return <InitialLoader />;
  // }

  return (
    <div
      // Changed justify-center to justify-start on mobile and added pt-24
      className="w-full relative overflow-x-hidden flex flex-col items-center justify-start md:justify-center bg-[#facc15] font-sans selection:bg-emerald-400 px-4 pt-24 md:pt-0"
      style={{
        minHeight: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      {/* 1. Retro Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* 2. Color Block Shapes */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>
      
      {/* OSS Logo - Fixed Position */}
      <div className="fixed top-4 left-4 z-50">
        <img
          src="/OSS.png"
          alt="OSS Logo"
          className="w-12 md:w-20 h-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] invert"
        />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[800px] relative z-10 flex flex-col items-center transform scale-95 sm:scale-100">
        
        {/* Header: pt-4 is enough now because the parent handles the 24 units push */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-center font-black text-black mb-2 md:mb-8 tracking-tighter drop-shadow-[3px_3px_0px_rgba(255,255,255,1)] uppercase italic leading-none pt-4 md:pt-0">
          Commit 3.0
        </h1>

        {/* Form Container */}
        <div className="w-full bg-[#bfdbfe] border-[3px] md:border-[4px] border-black rounded-2xl md:rounded-3xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_rgba(0,0,0,1)]">
          
          <div className="bg-[#10b981] border-b-[3px] md:border-b-[4px] border-black p-2 md:p-4 flex justify-between items-center">
            <div className="text-xl md:text-3xl drop-shadow-md">⭐</div>
            <div className="flex gap-2 md:gap-3">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#2dd4bf]"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#fbbf24]"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-black bg-[#f43f5e]"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 md:p-10 flex flex-col gap-3 md:gap-8">
            
            {/* Row 1: Name & Student No */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
              <div className="flex flex-col gap-1">
                <label htmlFor="Name" className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Full Name</label>
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  placeholder="Enter Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl outline-none bg-white font-black text-black text-sm md:text-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] placeholder:text-black/30"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="StudentNO" className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Student ID</label>
                <input
                  id="StudentNO"
                  type="text"
                  name="StudentNO"
                  placeholder="xxxxxxx"
                  maxLength="10"
                  value={formData.StudentNO}
                  onChange={handleChange}
                  onBlur={validateStudentId}
                  className="w-full px-3 py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl outline-none bg-white font-black text-black text-sm md:text-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] placeholder:text-black/30"
                  required
                />
              </div>
            </div>

            {/* Row 2: Gender & Branch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
              <div className="flex flex-col gap-1.5">
                <p className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Gender</p>
                <div className="flex gap-2">
                  {["male", "female"].map((g) => (
                    <label key={g} className={`flex-1 flex items-center justify-center py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl cursor-pointer transition-all font-black uppercase text-xs md:text-lg ${formData.Gender === g ? 'bg-[#10b981] text-black translate-y-0.5' : 'bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'}`}>
                      <input type="radio" name="Gender" value={g} checked={formData.Gender === g} onChange={handleChange} className="hidden" />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="Branch" className="text-xs md:text-xl font-black text-black uppercase tracking-tight">Branch</label>
                <div className="relative">
                  <select
                    id="Branch"
                    name="Branch"
                    value={formData.Branch}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:py-4 border-[2px] md:border-[4px] border-black rounded-lg md:rounded-2xl outline-none bg-[#f43f5e] text-white font-black text-sm md:text-lg appearance-none cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    required
                  >
                    <option value="" className="bg-white text-black">-- SELECT --</option>
                    {["CSE", "IT", "ECE", "CS", "AIML", "EN", "ME", "Civil"].map(branch => (
                      <option key={branch} value={branch} className="bg-white text-black font-bold">{branch}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white text-base font-black">▼</div>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-1 md:pt-4">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 md:py-5 rounded-lg md:rounded-2xl font-black text-base md:text-2xl uppercase tracking-[0.1em] shadow-[4px_4px_0px_rgba(16,185,129,1)] active:scale-95 transition-all"
              >
                PROCEED
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Name;