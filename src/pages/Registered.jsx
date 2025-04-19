import React from 'react'

const Registered = () => {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 flex flex-col gap-6 items-center justify-center text-center">
      {/* OSS Logo */}
<div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
  <img 
    src="/OSS.png" 
    alt="OSS Logo" 
    className="w-16 sm:w-20 md:w-28 h-auto max-w-full"
  />
</div>

{/* HTML Icon */}
<div className="fixed top-30 left-4 md:top-40 md:left-50 z-50">
  <img 
    src="/images/html.png" 
    alt="Cross" 
    className="w-10 sm:w-12 md:w-14 lg:w-14 h-auto max-w-full"
  />
</div>
{/* React Icon */}
<div className="fixed top-30 right-4 md:top-50 md:right-40 z-50">
  <img 
    src="/images/react.png" 
    alt="Cross" 
    className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto max-w-full"
  />
</div>
{/* Zigzag Icon */}
<div className="fixed top-140 right-4 md:top-150 md:right-10 z-50">
  <img 
    src="/images/zigzag.png" 
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
<div className="fixed top-140 left-10 md:top-100 md:left-40 z-50">
  <img 
    src="/images/dot.png" 
    alt="Cross" 
    className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto max-w-full"
  />
</div>
      <h1 className="text-2xl md:text-4xl mt-10 md:mt-0 font-bold text-[#92FAE0]">
        Team OSS
      </h1>

      <div className="w-full flex justify-center items-center">
        <img
          className="w-3/4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto max-h-[500px]"
          src="/images/laptop.png"
          alt="Laptop illustration"
        />
      </div>

      <h1 className="text-2xl md:text-4xl font-bold text-[#92FAE0]">
        You've Registered Successfully.
      </h1>
    </div>
  )
}

export default Registered

