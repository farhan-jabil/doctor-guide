import React from "react";
import { data } from "../../utils/demo_data";
import { images } from "../../utils/demo_Images";

export default function Expert() {
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
        
        <p className="font-[500] text-[16px] leading-[24px] font-[poppins] text-right mr-[70px] xl:mr-[20px] cursor-pointer">
          View All
        </p>
        
        <div className="flex flex-row mt-[20px] lg:mt-[60px] mx-5 xl:mx-0  md:px-[70px] lg:px-[0px]">
        <i className="fa-solid fa-angle-left bg-[#9E9F93] h-[42px] w-[42px]  flex justify-center items-center self-center rounded-[50%] text-white"></i>
          <div
           className="flex space-x-[31px] mx-auto xl:mx-0">
            {data.experts_items.map((x, y) => (
              <div className={`${x.display} md:${x.display_tab} lg:block`} key={y}>
                <img src={x.image} className="w-[250px] lg:w-[280px] xl:w-[373px] h-[143px] lg:h-[230px] xl:h-[323px]" alt="" />
                <div className="w-[250px] lg:w-[280px] xl:w-[373px] h-[260px] xl:h-[218px] border-[1px] border-solid border-[#0089BA] rounded-b-[20px]">
                  <div className="flex flex-row">
                    <p className="text-[20px] leading-[30px] font-[poppins]  lg:w-[120px] xl:w-[136px] h-[30px] ml-5 mt-[31px]">
                      Dr. {x.name}
                    </p>
                    <p className="mt-[31px] ml-[80px] lg:ml-[100px] xl:ml-[183px] text-white">
                      <img src={x.bookmark_img} alt=""/>
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
            ))}
          </div>

          <i className="fa-solid fa-angle-right bg-[#9E9F93] h-[42px] w-[42px]  flex justify-center items-center self-center rounded-[50%] text-white"></i>

        </div>

        <div className="relative flex flex-row  mx-auto w-[106px] mt-[24px] space-x-[22px]">
          <img src={images.ellipse_2} className="w-[22px] h-[22px]" alt="" />
          <img src={images.ellipse_2} className="w-[22px] h-[22px]" alt="" />
          <img src={images.ellipse_2} className="w-[22px] h-[22px]" alt="" />
          <img
            src={images.ellipse_1}
            className="absolute left-[-19px] top-[3px] w-[16px] h-[16px]"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
