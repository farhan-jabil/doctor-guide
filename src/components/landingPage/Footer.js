import React from "react";
import { data } from "../../utils/demo_data";
import { images } from "../../utils/demo_Images";

export default function Footer() {
  return (
    <>
      <section className="bg-[#273240] text-white">
        <div className="border-b-[2px] pb-10 xl:pb-0 ">
          <div className="flex flex-col lg:flex-row xl:h-[530px] w-[80%] xl:w-[84%] mx-auto mt-[148px] lg:space-x-6">
            <div className="mt-[100px] lg:mt-[120px] xl:mt-[140px]">
              <img src={images.logo_2} className="lg:ml-0" alt="" />
              <p className="font-[open sans] text-[16px] leading-[28px]  lg:ml-0 mt-[29px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut cras velit senectus id tellus aliquam enim felis. Sed commodo
                cursus tellus sapien, viverra imperdiet morbi dignissim.
                Consequat in metus arcu eget.
              </p>
              <div className="lg:mt-[37px] mt-10 lg:ml-0 space-x-[24px]">
              <div className="relative inline-block group self-center">
                <button className="z-10 relative w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] rounded-[10px] bg-[#FF8B42] text-white mx-auto overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
                  <span className="relative flex flex-row items-center justify-center z-10">
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </button>
              </div>
              <div className="relative inline-block group self-center">
                <button className="z-10 relative w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] rounded-[10px] bg-[#FF8B42] text-white mx-auto overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
                  <span className="relative flex flex-row items-center justify-center z-10">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                  <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </button>
              </div>
              <div className="relative inline-block group self-center">
                <button className="z-10 relative w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] rounded-[10px] bg-[#FF8B42] text-white mx-auto overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
                  <span className="relative flex flex-row items-center justify-center z-10">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </button>
              </div>
              </div>
            </div>

            <div className="text-white xl:ml-[71px] mt-[70px] lg:mt-[139px] ">
              <p className="font-[poppins] font-[500] text-[20px] leading-[30px]">
                Our Services
              </p>
              <ul className="mt-[34px]">
                {data.services_item.map((x, y) => (
                  <li key={y}>
                    <div className="border-[#D9D9D9] w-[151px] h-[46px] font-[open sans] font-[400] text-[16px] leading-[28px] border-b-[1px] pb-[10px]">
                      {x.item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[100px] lg:mt-[139px] xl:ml-[85px]">
              <p className="text-white font-[500] text-[20px] leading-[30px] font-[poppins]">
                Contact Us
              </p>
              <ul>
                {data.contact_items.map((x, y) => (
                  <li className="flex flex-row mt-[34px]" key={y}>
                    <i
                      className={`${x.icon} pt-[7px] w-[24px] h-[24px] text-[#FF8B42]`}
                    ></i>
                    <p className="font-[open sans] lg:w-[calc(100%-24px)] font-[400] text-[16px]  leading-[28px] ml-[17px]">
                      {x.item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[100px] lg:mt-[139px] xl:ml-[85px]">
              <p className="text-white font-[500] text-[20px] leading-[30px] font-[poppins]">
                Doctors Schedule
              </p>
              <p className="font-[open sans] font-[400] text-[16px] leading-[28px] mt-[34px]">
                At vero eos et accusam et justou dolores et ea rebum tet clita
                kasd gubergren no sea takimata.
              </p>
              <div className="relative inline-block group self-center">
                <button className="z-10 relative w-[70px] lg:w-[130px] xl:w-[164px] h-[56px] rounded-[6px] mt-[30px] bg-[#FF8B42] text-white mx-auto overflow-hidden transition-all duration-500 ease-in-out group-hover:text-white">
                  <span className="relative flex flex-row items-center justify-center z-10">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    <p className="ml-[10px]">View Schedule</p>
                  </span>
                  <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:ml-[85px] relative flex flex-col-reverse lg:flex-row lg:h-[132px] pt-[55px] pb-[49px]">
          <p className="lg:w-[456px] font-[open sans] font-[400] text-[16px] leading-[28px] px-[40px] lg:px-[0px] mt-5 lg:mt-0">
            Copyright © 2022. All Rights Reserved by Solutya.
          </p>

          <ul className="flex flex-col lg:flex-row lg:absolute bottom-5 lg:bottom-auto lg:right-[132px]  lg:h-[28px] space-x-[0px]  lg:space-x-7 px-[40px] lg:px-[0px]">
            <li>Latest news</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </section>
    </>
  );
}
