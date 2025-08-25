import React from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Elements - Enhanced Animations */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 text-green-400 text-xs sm:text-sm opacity-30 animate-float" style={{ animationDuration: '2s' }}>
          &lt;div&gt;
        </div>
        <div className="absolute top-32 right-4 sm:top-40 sm:right-20 text-blue-400 text-xs sm:text-sm opacity-30 animate-pulse-glow" style={{ animationDuration: '1.5s' }}>
          function()
        </div>
        <div className="absolute bottom-32 left-4 sm:bottom-40 sm:left-20 text-yellow-400 text-xs sm:text-sm opacity-30 animate-bounce-rotate" style={{ animationDuration: '2.5s' }}>
          {`{...props}`}
        </div>
        <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-10 text-purple-400 text-xs sm:text-sm opacity-30 animate-pulse" style={{ animationDuration: '1.8s' }}>
          import React
        </div>
        <div className="absolute top-1/2 left-2 sm:left-1/4 text-red-400 text-xs sm:text-sm opacity-30 animate-float" style={{ animationDuration: '2.2s' }}>
          npm install
        </div>
        <div className="absolute top-1/3 right-2 sm:right-1/4 text-cyan-400 text-xs sm:text-sm opacity-30 animate-pulse" style={{ animationDuration: '1.6s' }}>
          git commit
        </div>
        
        {/* Additional mobile-friendly elements with enhanced animations */}
        <div className="absolute top-24 left-1/2 text-pink-400 text-xs sm:text-sm opacity-20 animate-bounce" style={{ animationDuration: '2.8s' }}>
          &lt;/&gt;
        </div>
        <div className="absolute bottom-24 right-1/2 text-orange-400 text-xs sm:text-sm opacity-20 animate-pulse" style={{ animationDuration: '1.9s' }}>
          useState
        </div>

        {/* New floating elements with different animation patterns */}
        <div className="absolute top-1/4 left-1/3 text-indigo-400 text-xs sm:text-sm opacity-25 animate-ping">
          useEffect
        </div>
        <div className="absolute top-3/4 right-1/3 text-emerald-400 text-xs sm:text-sm opacity-25 animate-rotate-3d" style={{ animationDuration: '4s' }}>
          &lt;React&gt;
        </div>
        <div className="absolute top-1/6 right-1/6 text-rose-400 text-xs sm:text-sm opacity-20 animate-float" style={{ animationDuration: '3s' }}>
          TypeScript
        </div>
        <div className="absolute bottom-1/6 left-1/6 text-amber-400 text-xs sm:text-sm opacity-20 animate-pulse" style={{ animationDuration: '2.3s' }}>
          Tailwind CSS
        </div>

        {/* Particle effect dots with enhanced animations */}
        <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-white rounded-full animate-ping opacity-60 animate-glow"></div>
        <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60 animate-glow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/5 left-2/5 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60 animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-2/5 right-2/5 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60 animate-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60 animate-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Enhanced Logo Animation */}
        <div className="mb-6 sm:mb-8 relative animate-fade-in">
          {/* Glowing effect behind logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
          
          {/* Logo with enhanced animations */}
          <img
            src="/logo.png"
            alt="OSS Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-42 md:h-42 relative z-10 animate-pulse-glow"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Rotating ring around logo */}
          <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 border-r-purple-400 border-b-pink-400 border-l-green-400 rounded-full animate-rotate-3d" style={{ animationDuration: '3s' }}></div>
          
          {/* Additional floating rings */}
          <div className="absolute inset-0 border border-transparent border-t-yellow-400 border-r-cyan-400 border-b-orange-400 border-l-pink-400 rounded-full animate-rotate-3d" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Enhanced Loading Text with Typing Effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center relative animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse-glow">
            INIT'25
          </span>
          {/* Cursor effect */}
          {/* <span className="inline-block w-1 h-8 sm:h-10 md:h-12 bg-white ml-1 animate-pulse"></span> */}
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 text-center max-w-xs sm:max-w-md px-2 animate-fade-in">
          Open Source Software Community
        </p>

        {/* Enhanced Loading Spinner with Multiple Rings */}
        <div className="relative animate-fade-in">
          {/* Outer ring */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-transparent border-t-green-400 rounded-full animate-spin" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
          
          {/* Inner ring */}
          <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDelay: '1s', animationDuration: '1.5s' }}></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-ping animate-glow"></div>
          </div>
        </div>

        {/* Enhanced Loading Progress with Animation */}
        <div className="mt-6 sm:mt-8 w-48 sm:w-56 md:w-64 bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 h-1.5 sm:h-2 rounded-full animate-pulse relative">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" style={{ animationDuration: '2s' }}></div>
          </div>
        </div>

        <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm animate-pulse animate-fade-in">
          Loading your experience...
        </p>
      </div>

      {/* Enhanced Open Source Elements */}
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 text-gray-600 text-xs text-center animate-fade-in">
        Made with ❤️ by the community
      </div>
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 text-gray-600 text-xs text-center animate-fade-in">
        Open Source • Free • Collaborative
      </div>
      
      {/* Mobile-specific bottom text with enhanced animation */}
      <div className="absolute bottom-20 sm:hidden left-1/2 transform -translate-x-1/2 text-gray-600 text-xs text-center animate-bounce animate-fade-in">
        Swipe to continue
      </div>

      {/* Additional floating geometric shapes with enhanced animations */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping animate-glow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping animate-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping animate-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* New animated elements */}
      <div className="absolute top-1/6 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default LoadingAnimation; 