import React, { useState } from "react";
import Slider from "react-slick";
import { data } from "../../utils/demo_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Expert() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full mt-[30px] lg:mt-[50px] mx-2 cursor-pointer ${
          i === activeSlide ? "bg-gray-800" : "bg-gray-300"
        }`}
        key={i}
      ></div>
    ),
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1023, // tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="relative xl:max-w-[1280px] mx-auto">
        <p className="lg:w-[418px] h-[60px] font-[700] text-[28px] lg:text-[40px] leading-[60px] mt-[100px] lg:mt-[268px] text-center mx-auto">
          Our Medical Experts
        </p>

        <p className="mt-[12px] mx-auto lg:w-[814px] font-[open sans] text-[16px] font-[400] leading-[28px] text-center px-[70px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Slider {...settings} className="experts-slider">
          {data.experts_items.map((x, y) => (
            <div className="mt-[20px] lg:mt-[60px]" key={y}>
              <div className={`lg:block w-[75%] lg:w-[90%] mx-auto`}>
                <img
                  src={x.image}
                  className="h-[250px] w-full"
                  alt=""
                />
                <div className="p-5 border-[1px] border-solid border-[#0089BA] rounded-b-[20px] space-y-4">
                  <p className="text-[20px] leading-[30px] font-[poppins] lg:w-[136px] h-[30px]">
                    Dr. {x.name}
                  </p>
                  <p className="w-[182px] h-[28px] font-[400] text-[16px] leading-[28px]">
                    {x.degree}
                  </p>
                  <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                    <p className="font-[400] text-[15px] leading-[24px]">
                      {x.details}
                    </p>
                    <div className="group flex lg:w-3/4">
                      <button className="z-10 relative block p-4 mt-auto lg:p-2 xl:p-4 rounded-[6px] bg-[#FF8B42] text-white mx-auto cursor-pointer overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
                        <span className="relative z-10">Book Now</span>
                        <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
