import React from "react";
import { images } from "../../utils/demo_Images";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-fit mx-auto mt-[70px] lg:mt-0 px-[0px] lg:px-[70px]">
        <div className="mt-[20px] xl:mt-[49px] absolute left-0">
          <img
            src={images.half_circle_1}
            className="h-[110px] xl:h-[244px] xl:w-[122px]"
            alt=""
          />
        </div>

        <div className="relative mt-[20px] lg:mt-[67px] xl:pl-[18px] xl:ml-0">
          <img
            src={images.grid_1}
            className="absolute lg:static right-[20px] top-[20px] w-[70px] xl:w-[132px] h-[70px] xl:h-[132px] xl:ml-0"
            alt=""
          />

          <div className="mt-[30px] lg:mt-[20px] xl:mt-[94px] mx-auto lg:ml-0 w-[250px] xl:w-[280px] h-[109px] text-[24px] xl:text-[40px] text-[#273240] font-[700] lg:leading-[60px] font-[poppins] not-italic ">
            Find The Care You Need
          </div>

          <p className="lg:mt-[31px] mx-auto lg:ml-0 w-[278px] xl:w-[378px] h-[62px] text-[14px] font-[400] leading-[21px] font-[open sans]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <div class="relative inline-block group">
            <p class="z-10 relative w-[180px] xl:w-[243px] xl:h-[56px] py-[16px] text-center rounded-[6px] bg-[#FF8B42] text-white mx-auto lg:ml-0 xl:ml-0 mt-[40px] xl:mt-[34px] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
              <span class="relative z-10">Make Appointment</span>
              <span class="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </p>
          </div>
        </div>

        <div className="relative xl:ml-[34px] xl:w-[407px] xl:h-[618px] mt-[30px] lg:mt-[94px]">
          <img
            src={images.doctor_2_a}
            className="w-[350px] xl:w-[407px] xl:h-[618px] mx-auto px-5 xl:px-0"
            alt=""
          />
        </div>

        <div className="relative mt-10 xl:mt-0">
          <img
            src={images.doctor_1_a}
            className="w-[300px] xl:w-[479px] xl:h-[792px] mx-auto"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
