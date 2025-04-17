import React from 'react'

const Registered = () => {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 flex flex-col gap-6 items-center justify-center text-center">
      <h1 className="text-2xl md:text-4xl mt-10 md:mt-0 font-bold text-[#92FAE0]">
        Register Yourself
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

