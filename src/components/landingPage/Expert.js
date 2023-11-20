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
        className={`w-3 h-3 rounded-full mt-[50px] mx-2 cursor-pointer ${
          i === activeSlide ? "bg-gray-800" : "bg-gray-300"
        }`}
        key={i}
      ></div>
    ),
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  return (
    <>
      <section className="relative xl:w-[1280px] mx-auto">
        <p className="lg:w-[418px] h-[60px] font-[700] text-[28px] lg:text-[40px] leading-[60px] mt-[100px] lg:mt-[268px] text-center mx-auto">
          Our Medical Experts
        </p>

        <p className="mt-[12px] mx-auto lg:w-[814px] font-[open sans] text-[16px] font-[400] leading-[28px] text-center px-[70px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Slider {...settings}>
          {data.experts_items.map((x, y) => (
            <div
              className="mt-[20px] lg:mt-[60px] mx-5 xl:mx-0  md:px-[70px] lg:px-[0px]"
              key={y}
            >
              <div className="space-x-[31px] mx-auto xl:mx-0">
                <div className={`${x.display} md:${x.display_tab} lg:block`}>
                  <img
                    src={x.image}
                    className="w-[250px] lg:w-[280px] xl:w-[373px] h-[143px] lg:h-[230px] xl:h-[323px]"
                    alt=""
                  />
                  <div className="w-[250px] lg:w-[280px] xl:w-[373px] h-[260px] xl:h-[218px] border-[1px] border-solid border-[#0089BA] rounded-b-[20px]">
                    <div className="flex flex-row">
                      <p className="text-[20px] leading-[30px] font-[poppins]  lg:w-[120px] xl:w-[136px] h-[30px] ml-5 mt-[31px]">
                        Dr. {x.name}
                      </p>
                      <p className="mt-[31px] ml-[80px] lg:ml-[100px] xl:ml-[183px] text-white">
                        <img src={x.bookmark_img} alt="" />
                      </p>
                    </div>
                    <p className="w-[182px] h-[28px] ml-5 mt-[10px] font-[400] text-[16px] leading-[28px]">
                      {x.degree}
                    </p>
                    <div className="mx-5 mt-5 flex flex-col xl:flex-row">
                      <p className="xl:w-[198px] xl:h-[72px] font-[400] text-[15px] leading-[24px]">
                        {x.details}
                      </p>
                      <button
                        className={`mx-auto xl:ml-[41px] mt-3 xl:mt-[25px] h-[40px] xl:h-[56px] w-[120px] xl:w-[134px] bg-[${x.button_back}] text-white rounded-[6px]`}
                      >
                        Book Now
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
