// WhyChooseUs.jsx
import React from "react";
import img from "../assets/section.jpg";


const ClipImageFullBleed = ({ variant, height = 560 }) => {
  const maskId = `mask-${variant}`;

  const circles = {
    topRight: { cx: "1200", cy: "0", r: "450" },      // cut on top-right
    leftBottom: { cx: "0", cy: "650", r: "450" },     // cut on left-bottom
    bottomRight: { cx: "1200", cy: "650", r: "450" }, // cut on bottom-right
  };

  // The svg viewbox is larger to allow the circular cutouts to sit off-canvas correctly.
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 650"
        width="100vw"
        height={height}
        className="block w-[100vw] max-w-none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <mask id={maskId}>
            {/* main rounded rect that remains visible */}
            <rect width="1200" height="650" rx="120" ry="120" fill="white" />
            {/* circular cutout (black = cut away) */}
            <circle {...circles[variant]} fill="black" />
          </mask>
        </defs>

        {/* subtle background so rounding reads on white pages */}
        <rect width="1200" height="650" rx="120" ry="120" fill="rgba(0,0,0,0.02)" />

        {/* the actual image, masked */}
        <image
          href={img}
          width="1300"
          height="800"
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
  <section className="w-full bg-white py-20">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
    Why Choose <span className="text-purple-700">Us</span>
  </h2>


   {/* SECTION 1 */}
  <div className="w-full mb-24">
    <div className="flex justify-start">
      <img
        src={img}
        className="rounded-r-[120px] w-full md:w-[90%] h-[410px] object-cover"
      />
    </div>

    <div className="w-full md:w-[95%] mr-auto mt-6 px-6 text-left">
      <h3 className="text-red-600 text-3xl font-bold leading-tight">
        Affordable & <br /> Flexible
      </h3>
      <p className="text-gray-600 mt-3 mb-6 text-sm">
        Flexible hourly & daily rentals.
      </p>
      <button className="bg-red-600 text-white px-4 py-2 rounded-md text-xs">
        Make an Appointment
      </button>
    </div>
  </div>

  {/* SECTION 2 */}
  <div className="w-full mb-24">
    <div className="flex justify-end">
      <img
        src={img}
        alt="Creative Environment"
        className="rounded-l-[120px] w-full md:w-[90%] h-[410px] object-cover"  
      />
    </div>

    <div className="w-full md:w-[95%] ml-auto mt-6 px-6 text-left">
      <h3 className="text-red-600 text-3xl font-bold leading-tight">
        Professional <br /> Equipment
      </h3>
      <p className="text-gray-600 mt-3 mb-6 text-sm">
        Record with top-grade mics & cameras.
      </p>
      <button className="bg-red-600 text-white px-4 py-2 rounded-md text-xs">
        Make an Appointment
      </button>
    </div>
  </div>

 

  {/* SECTION 3 */}
  <div className="w-full mb-16">
     <div className="flex justify-start">
      <img
        src={img}
        className="rounded-r-[120px] w-full md:w-[90%] h-[410px] object-cover"
      />
    </div>

    <div className="w-full md:w-[95%] ml-auto mt-6 px-6 text-rigth">
      <h3 className="text-red-600 text-4xl font-bold leading-tight">
        Creative <br /> Environment
      </h3>
      <p className="text-gray-600 mt-3 mb-6 text-sm">
        Sleek, soundproof & inspiring.
      </p>
      <button className="bg-red-600 text-white px-4 py-2 rounded-md text-xs">
        Make an Appointment
      </button>
    </div>
  </div>
  {/* SECTION 4 */}
  <div className="w-full mb-16">
    <div className="flex justify-end">
      <img
        src={img}
        className="rounded-l-[120px] w-full md:w-[90%] h-[410px] object-cover"
      />
    </div>

   
  </div>
</section>


  );
};

export default WhyChooseUs;
