import React from "react";
import { images } from "../../utils/demo_Images";

export default function Subscribe() {
  return (
    <>
      <section className="relative">
        <img
          src={images.half_circle_2}
          className="absolute top-[-129px] right-0"
          alt=""
        />
        <div className="bg-[#0089BA] mx-auto lg:h-[448px] rounded-[20px] mt-[196px] pb-[20px] relative w-[80%] xl:w-[84%]">
          <div className="flex flex-col ">
            <div className="relative">
              <img
                src={images.doctor_2_b}
                className=" w-[350px] lg:w-auto lg:absolute top-[-30px] lg:top-[-78px] xl:left-[102px] mx-auto"
                alt=""
              />
            </div>

            <div className="subscribe_field lg:ml-[400px] xl:ml-[45%] px-5 lg:px-0 lg:space-y-[20px]">
              <p className="font-[poppins] font-[600] text-[28px] leading-[42px] text-white pt-[50px] lg:pt-[100px] text-center lg:text-left">
                Subscribe Now
              </p>

              <p className="lg:w-[384px] h-[56px] font-[open sans] font-[400] text-[16px] leading-[28px] text-white mt-[10px] text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p>

              <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[80%] px-3 lg:px-6 py-3 lg:py-0 bg-white mt-[10%] md:mt-[10px] mx-auto lg:mx-0 rounded-[6px]">
                <input
                  className="rounded-[6px] py-6 w-full mr-5 text-center lg:text-left"
                  placeholder="Your email here"
                />
                <div className="relative group self-center">
                  <button className="z-10 relative py-2 lg:py-3 xl:py-4 px-4 lg:px-3 xl:px-16 rounded-[6px] bg-[#FF8B42] text-white mx-auto overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
                    <span className="relative z-10">Submit</span>
                    <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
