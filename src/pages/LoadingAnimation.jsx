import React from "react";

const LoadingAnimation = () => {
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

export default LoadingAnimation; 