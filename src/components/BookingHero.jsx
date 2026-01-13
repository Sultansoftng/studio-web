import React from 'react'

const BookingHero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-12 md:py-20 px-4">
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold bg-[#DC262633] rounded-xl p-4 text-red-500 tracking-wider">
          Transparent Pricing
        </h3>
      </div>
      
      <div className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Flexible Pricing for
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight">
            Every Creative Need
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're recording a podcast, shooting a commercial, or hosting an event, 
          our studio offers flexible rates tailored to your project's specific requirements.
        </p>
        
        <button className="px-10 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl 
            hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg hover:shadow-xl">
          Calculate Your Price
        </button>
      </div>
    </div>
  )
}

export default BookingHero