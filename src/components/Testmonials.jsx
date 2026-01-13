import React from "react";
import manLarge from "../assets/boyl.jpg";
import manSmall from "../assets/boys.png";
import womanLarge from "../assets/girlL.jpg";
import womanSmall from "../assets/girlL.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      large: manLarge,
      small: manSmall,
      name: "Marrio Ressy Yolanda",
      username: "@accountname",
      text: "Li Europan lingues es membres del sam familie. Lor separat existente es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
      rating: "4.8/5",
    },
    {
      large: womanLarge,
      small: womanSmall,
      name: "Ardo William Rossy",
      username: "@accountname",
      text: "Li Europan lingues es membres del sam familie. Lor separat existente es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
      rating: "4.8/5",
    },
  ];

  return (
    <section className="py-16 bg-gray-200 px-4 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-red-600 mb-10">
        Our Clients <span className="text-black">Feedback</span>
      </h2>

      <div className="space-y-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.12)] p-6 md:p-10 flex flex-col md:flex-row items-start gap-6"
          >
            <div className="relative">
              <img
                src={testimonial.large}
                alt="client main"
                className="w-[220px] h-[180px] md:w-[260px] md:h-[200px] rounded-xl object-cover"
              />
              
              <img
                src={testimonial.small}
                alt="client small"
                className="w-20 h-20 rounded-xl object-cover absolute bottom-[-20px] right-[-20px] shadow-lg border-4 border-white"
              />
            </div>

            <div className="flex-1 pt-6 md:pt-0">
              <h3 className="text-2xl font-semibold text-[#1e1f4b]">
                {testimonial.name}
              </h3>

              <p className="text-[#6b7280] text-sm mb-3">
                {testimonial.username}
              </p>

              <p className="text-[#475569] leading-relaxed mb-3">
                {testimonial.text}
              </p>

              <p className="text-yellow-500 font-semibold">
                {testimonial.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;