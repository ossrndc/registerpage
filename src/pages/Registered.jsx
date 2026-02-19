// import React from "react";
// // import Linkedin from "../assets/linkedin.svg";
// // import Instagram from "../assets/instagram.svg";
// import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


// const Registered = () => {
//   return (
//     <div className="w-full h-screen overflow-hidden px-4 py-4 md:px-10 md:py-6 flex flex-col justify-between items-center text-center relative">
//       {/* OSS Logo */}
//       <div className="absolute top-4 left-4 md:top-8 md:left-16 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-14 sm:w-20 invert md:w-28" />
//       </div>

//       {/* Decorative Icons */}
//       {/* <div className="absolute md:hidden top-[120px] left-4 md:top-[140px] md:left-[200px] z-10">
//         <img
//           src="/images/github.png"
//           alt="HTML"
//           className="w-10 sm:w-12 md:w-14"
//         />
//       </div> */}
//       <div className="absolute top-8">
//         <img
//           src="/images/element.png"
//           alt="Element"
//           className=""
//         />
//       </div>

//       {/* Arrow Icon */}
//       <div className="fixed top-22 hidden xl:block left-10 md:top-76 md:left-70 z-60">
//         <div className="flex items-center rotate-[310deg] md:rotate-[350deg]">
//           {/* <div className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[rgb(133,206,195)]"></div> */}
// {/* 
//           <div
//             className="w-0 h-0 
//       border-t-[20px] border-t-transparent 
//       border-b-[20px] border-b-transparent 
//       border-l-[30px] border-l-[rgb(133,206,195)]
//       sm:border-t-[28px] sm:border-b-[28px] sm:border-l-[42px]
//       md:border-t-[40px] md:border-b-[40px] md:border-l-[60px]"
//           ></div> */}
//         </div>
//       </div>

//       {/* <div className="fixed hidden xl:block bottom-0 left-0 rotate-40 sm:bottom-0 sm:-left-10 md:bottom-0 md:left-30 z-50 h-20 w-20 sm:h-48 sm:w-48 md:h-80 md:w-80">
//         <img
//           src="/images/line.png"
//           alt="line"
//           className="w-full h-full object-contain"
//         />
//       </div> */}

//       {/* Combined Image, Text and Social Links */}
//       <div className="max-w-screen-md px-4 mt-62 flex flex-col items-center space-y-2 md:space-y-4">
//         {/* Laptop Image */}
//         {/* <div className="flex justify-center mt-18 md:mt-0 items-center">
//           <img
//             src="/images/done.png"
//             alt="Laptop illustration"
//             className="w-[300px] max-w-lg md:w-[600px] lg:w-[800px] lg:h-[500px]"
//           />
//         </div> */}

//         {/* Text Content */}
//         <div className="text-center">
//           <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[rgb(133,206,195)] leading-snug">
//             You've Registered Successfully. <br />
//             <span className="md:text-xl text-white text-sm">
//               *Check your spam folder(email)*
//             </span>
//           </h1>
//           <p className="text-md sm:text-lg md:text-lg text-white mt-2 md:mt-2 relative z-50">
//             For more information, check out our
//             <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-2 py-1 rounded-md font-extrabold mx-1 inline-block">
//               Team OSS
//             </span>
//             desk or contact us at
//             <a href="tel:+918529715481">(91-8529715481)</a>
//           </p>
//         </div>

        
//         <div className="flex items-center gap-3 md:gap-6 mt-2 md:mt-0">
//           <h2 className="text-lg md:text-lg font-semibold text-white">
//             Let's Connect :
//           </h2>
//           {/* <div className="border-2 border-gray-500 rounded-xl p-1"> */}
//             <a
//               href="https://www.instagram.com/team__oss?igsh=ZzB3d2R3ZW5wZ2dw"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative z-50"
//             >
//               <FaInstagram className="text-white h-6 w-6 md:h-12 md:w-8 transition hover:scale-120" />
//             </a>
//           {/* </div> */}
          
//           {/* <div className="border-2 border-gray-500 rounded-xl p-1"> */}
//             <a
//               href="https://www.linkedin.com/company/team-oss/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative z-50"
//             >
//               <FaLinkedin className="text-white h-6 w-6 md:h-12 md:w-8 transition hover:scale-120" />
//             </a>
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registered;



// import React from "react";
// import { FaInstagram, FaLinkedin } from "react-icons/fa6";

// const Registered = () => {
//   return (
//     <div 
//       className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-[#facc15] font-sans px-4"
//       style={{ minHeight: "100vh" }}
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

//       {/* 2. Side Color Block */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>

//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 md:top-8 md:left-16 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-24 invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
//       </div>

//       {/* Main Content Area */}
//       <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center">
        
//         {/* Pixel Header */}
//         <h1 className="text-5xl md:text-8xl text-center font-black text-black mb-12 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic">
//           Commit 3.0
//         </h1>

//         {/* 3. Stacked Cards Effect */}
//         <div className="relative w-full max-w-2xl">
//           {/* Decorative Back Cards */}
//           <div className="absolute inset-0 bg-[#1d4ed8] border-[4px] border-black rounded-3xl translate-x-4 translate-y-4 -rotate-2"></div>
//           <div className="absolute inset-0 bg-[#f43f5e] border-[4px] border-black rounded-3xl translate-x-2 translate-y-2 rotate-1"></div>
          
//           {/* Main Success Card */}
//           <div className="relative bg-[#2dd4bf] border-[4px] border-black rounded-3xl p-8 md:p-12 shadow-[10px_10px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            
//             {/* <h2 className="text-xl md:text-5xl font-black text-black mb-4 uppercase tracking-tight drop-shadow-sm">
//               Your payment was successful. We’ll verify it shortly and add you to the WhatsApp group.
//               Please check your email for event details. If you don’t see it, kindly check your spam folder as well.
//               For any payment-related issues, please WhatsApp us at 8318055601.
//             </h2> */}
//             <div className="flex flex-col gap-3 max-w-lg mx-auto">
//   <h2 className="text-sm md:text-lg font-bold text-black/80 leading-relaxed uppercase tracking-wide">
//     Your payment was successful. We’ll verify it shortly and add you to the WhatsApp group.
//   </h2>
  
//   <div className="space-y-1">
//     <p className="text-xs md:text-sm font-medium text-black/60 italic">
//       *Please check your email for event details. If you don’t see it, kindly check your spam folder as well.
//     </p>
//     <p className="text-xs md:text-sm font-black text-black mt-2">
//       Payment issues? WhatsApp us: <span className="underline decoration-2">8318055601</span>
//     </p>
//   </div>
// </div>

//             <div className="w-20 h-1 bg-black mb-6"></div>

//             <p className="text-lg md:text-xl font-bold text-black mb-2">
//               Welcome to the movement!
//             </p>
//             <p className="text-sm md:text-md font-bold text-black/70 mb-8 italic">
//               *Check your spam folder for the confirmation email*
//             </p>

//             {/* Social Links Section */}
//             <div className="w-full bg-black/5 rounded-2xl p-6 border-2 border-dashed border-black/20">
//               <h3 className="text-xl font-black text-black uppercase mb-4 tracking-widest">Connect With Us</h3>
              
//               <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//                 <a
//                   href="https://www.instagram.com/team__oss"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 bg-white border-[3px] border-black px-6 py-2 rounded-xl font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
//                 >
//                   <FaInstagram size={24} /> @team__oss
//                 </a>
                
//                 <a
//                   href="https://www.linkedin.com/company/team-oss/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 bg-white border-[3px] border-black px-6 py-2 rounded-xl font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
//                 >
//                   <FaLinkedin size={24} /> Team OSS
//                 </a>
//               </div>
//             </div>

//             <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
//               Registration Protocol Complete // OSS.2026
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registered;


// import React from "react";
// import { FaInstagram, FaLinkedin } from "react-icons/fa6";

// const Registered = () => {
//   return (
//     <div 
//       // Changed h-screen/overflow-hidden to min-h-screen/overflow-y-auto for laptop compatibility
//       className="w-full relative min-h-screen flex flex-col items-center justify-center bg-[#facc15] font-sans px-4 py-10 overflow-y-auto selection:bg-black selection:text-white"
//     >
//       {/* 1. Retro Grid Overlay */}
//       <div 
//         className="absolute inset-0 z-0 opacity-100 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #000 1px, transparent 1px),
//             linear-gradient(to bottom, #000 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//         }}
//       ></div>

//       {/* 2. Side Color Block */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>

//       {/* OSS Logo */}
//       <div className="fixed top-4 left-4 md:top-6 md:left-10 z-50">
//         <img src="/OSS.png" alt="OSS Logo" className="w-16 md:w-20 invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
//       </div>

//       {/* Main Content Area */}
//       <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center">
        
//         {/* Pixel Header - Adjusted size to prevent pushing content off-screen */}
//         <h1 className="text-5xl md:text-7xl lg:text-8xl text-center font-black text-black mb-6 md:mb-10 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic leading-none">
//           Commit 3.0
//         </h1>

//         {/* 3. Stacked Cards Effect */}
//         <div className="relative w-full max-w-xl px-2">
//           {/* Decorative Back Cards */}
//           <div className="absolute inset-0 bg-[#1d4ed8] border-[4px] border-black rounded-3xl translate-x-3 translate-y-3 -rotate-2"></div>
//           <div className="absolute inset-0 bg-[#f43f5e] border-[4px] border-black rounded-3xl translate-x-1.5 translate-y-1.5 rotate-1"></div>
          
//           {/* Main Success Card - Reduced padding to md:p-10 */}
//           <div className="relative bg-[#2dd4bf] border-[4px] border-black rounded-3xl p-6 md:p-10 shadow-[10px_10px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            
//             {/* Primary Success Headline */}
//             <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter italic drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4">
//               Registration Successful!
//             </h2>

//             {/* Instruction Block */}
//             <div className="flex flex-col gap-3 max-w-sm mx-auto mb-6">
//               <p className="text-xs md:text-sm font-black text-black uppercase">
//                 Payment verified. We'll add you to the WhatsApp group shortly.
//               </p>
              
//               <div className="space-y-1">
//                 <p className="text-[10px] md:text-xs font-bold text-black/70 italic bg-black/5 py-2 px-2 rounded-lg border border-dashed border-black/20">
//                   *Check your email/spam for event details.
//                 </p>
//                 <p className="text-[10px] md:text-xs font-black text-black">
//                   Issues? WhatsApp: <span className="underline decoration-[2px] underline-offset-2">8318055601</span>
//                 </p>
//               </div>
//             </div>

//             {/* Visual Break */}
//             <div className="w-16 h-[4px] bg-black mb-6 rounded-full"></div>

//             {/* Welcome Text */}
//             <p className="text-lg md:text-xl font-black text-black mb-8 uppercase tracking-widest">
//               Welcome to OSS
//             </p>

//             {/* Social Links Section */}
//             <div className="w-full bg-black/10 rounded-2xl p-4 md:p-6 border-[3px] border-black">
//               <h3 className="text-sm md:text-md font-black text-black uppercase mb-4 tracking-widest">Connect With Us</h3>
              
//               <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//                 <a
//                   href="https://www.instagram.com/team__oss"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full md:w-auto flex items-center justify-center gap-2 bg-white border-[3px] border-black px-4 py-2 rounded-xl font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none transition-all text-xs md:text-sm"
//                 >
//                   <FaInstagram size={18} /> @team__oss
//                 </a>
                
//                 <a
//                   href="https://www.linkedin.com/company/team-oss/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full md:w-auto flex items-center justify-center gap-2 bg-white border-[3px] border-black px-4 py-2 rounded-xl font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none transition-all text-xs md:text-sm"
//                 >
//                   <FaLinkedin size={18} /> Team OSS
//                 </a>
//               </div>
//             </div>

//             {/* Footer Tag */}
//             <p className="mt-8 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
//               Hour of Code 4.0 // 2026
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registered;


import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Registered = () => {
  return (
    <div 
      className="w-full relative min-h-screen flex flex-col items-center justify-start md:justify-center bg-[#facc15] font-sans px-4 py-8 overflow-y-auto selection:bg-black selection:text-white"
    >
      {/* 1. Retro Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      ></div>

      {/* 2. Side Color Block */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#1d4ed8] -z-10 border-r-[4px] border-black"></div>

      {/* OSS Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-10 z-50">
        <img src="/OSS.png" alt="OSS Logo" className="w-14 md:w-20 invert drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center">
        
        {/* Adjusted Header Size - Prevents pushing card off-screen */}
        <h1 className="text-4xl md:text-7xl text-center font-black text-black mb-4 md:mb-8 tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] uppercase italic leading-none">
          Commit 3.0
        </h1>

        {/* 3. Stacked Cards Effect */}
        <div className="relative w-full max-w-xl px-2">
          {/* Decorative Back Cards - Tightened translations */}
          <div className="absolute inset-0 bg-[#1d4ed8] border-[4px] border-black rounded-3xl translate-x-2 translate-y-2 -rotate-1"></div>
          <div className="absolute inset-0 bg-[#f43f5e] border-[4px] border-black rounded-3xl translate-x-1 translate-y-1 rotate-1"></div>
          
          {/* Main Success Card - Optimized Padding */}
          <div className="relative bg-[#2dd4bf] border-[4px] border-black rounded-3xl p-5 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            
            {/* Primary Success Headline */}
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-3 leading-tight">
              Registration Successful!
            </h2>

            {/* Instruction Block - Tightened gaps */}
            <div className="flex flex-col gap-2 max-w-sm mx-auto mb-4">
              <p className="text-[11px] md:text-sm font-black text-black uppercase leading-tight">
                Your payment is under verification. Once verified, you’ll be added to the TEAM OSS WhatsApp group within 24 hours.
              </p>
              
              <div className="space-y-1">
                {/* <p className="text-[9px] md:text-xs font-bold text-black/70 italic bg-black/5 py-1.5 px-2 rounded-lg border border-dashed border-black/20">
                  *Check your email/spam for event details.
                </p> */}
                <p className="text-[10px] md:text-xs font-black text-black">
                  Issues? WhatsApp: <span className="underline decoration-2 underline-offset-2">8318055601</span>
                </p>
              </div>
            </div>

            {/* Visual Break */}
            <div className="w-12 h-[3px] bg-black mb-4 rounded-full"></div>

            {/* Welcome Text */}
            <p className="text-base md:text-lg font-black text-black mb-6 uppercase tracking-widest">
              Welcome to OSS Event
            </p>

            {/* Social Links Section - Responsive grid to save vertical space */}
            <div className="w-full bg-black/10 rounded-2xl p-4 border-[3px] border-black">
              <h3 className="text-xs md:text-sm font-black text-black uppercase mb-3 tracking-widest">Connect With Us</h3>
              
              <div className="flex flex-row gap-3 justify-center items-center">
                <a
                  href="https://www.instagram.com/team__oss"
                  target="_blank"
                  className="flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1.5 rounded-xl font-black text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none transition-all text-[10px] md:text-xs"
                >
                  <FaInstagram size={16} /> Instagram
                </a>
                
                <a
                  href="https://www.linkedin.com/company/team-oss/"
                  target="_blank"
                  className="flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1.5 rounded-xl font-black text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none transition-all text-[10px] md:text-xs"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Footer Tag */}
            <p className="mt-6 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-black/40">
              Commit 3.0 // 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registered;