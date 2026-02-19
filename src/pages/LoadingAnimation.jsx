import React from "react";

 const InitialLoader = () => {
   return (
     <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
       {/* Enhanced Logo Animation */}
       <div className="relative">
         {/* Glowing effect behind logo */}
         {/* <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 animate-pulse"></div> */}
        
         {/* Logo with enhanced animations */}
        <img
           src="/logo.png"
        alt="Logo"
           className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative z-10 animate-pulse"
           style={{ animationDuration: '2s' }}
       />
        
         {/* Rotating ring around logo */}
         <div className="absolute inset-0 border-2 border-transparent border-t-white border-r-white border-b-white border-l-white rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        
         {/* Additional floating rings */}
         <div className="absolute inset-0 border border-transparent border-t-white border-r-white border-b-white border-l-white rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
       </div>
     </div>
   );
 };

 export default InitialLoader; 


// // // import React from "react";

// // // Form Submission Loader (Neo-Brutalist Circle)

// // import React from "react";

// // Initial Entry Loader (Cinematic Logo)
// export const InitialLoader = () => {
//   return (
//     <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
//       <div className="relative">
//         <img
//           src="/logo.png"
//           alt="Logo"
//           className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative z-10 animate-pulse"
//           style={{ animationDuration: '2s' }}
//         />
//         <div className="absolute inset-0 border-2 border-transparent border-t-white border-r-white border-b-white border-l-white rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
//         <div className="absolute inset-0 border border-transparent border-t-white border-r-white border-b-white border-l-white rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
//       </div>
//     </div>
//   );
//}

// Form Submission Loader (Neo-Brutalist Circle)



// export const SubmitLoader = () => {
//   return (
//     <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#facc15]">
//       {/* Retro Grid Background */}
//       <div 
//         className="absolute inset-0 z-0 opacity-100 pointer-events-none" 
//         style={{ 
//           backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, 
//           backgroundSize: '80px 80px' 
//         }}
//       ></div>

//       <div className="relative z-10 flex flex-col items-center gap-6">
//         {/* Bold Circular Spinner */}
//         <div className="w-20 h-20 border-[8px] border-black border-t-[#f43f5e] rounded-full animate-spin shadow-[8px_8px_0px_rgba(0,0,0,0.2)]"></div>
        
//         <h2 className="text-2xl md:text-4xl font-black text-black uppercase italic tracking-tighter drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
//           Processing...
//         </h2>
//       </div>
//     </div>
//   );
// };