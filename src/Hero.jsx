import React from 'react'

const Hero = () => {
  return (
    <>
    
    
    <div className="font-sans min-h-[70vh] ">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-blue-500">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="text-white lg:text-5xl text-3xl font-bold lg:!leading-[56px]">Elevate Your Experience with Modern Elegance</h2>
          <p className="text-white mt-6 text-base leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
          <button type='button'
            className="bg-transparent border-2 border-gray-800 mt-12 transition-all text-gray-800 font-bold text-sm rounded-md px-6 py-2.5">Get Started</button>
        </div>

        <div className="lg:h-[480px] flex items-center">
          <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
        </div>
      </div>

     
    </div>
    
    
    </>
  )
}

export default Hero