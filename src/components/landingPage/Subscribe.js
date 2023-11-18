import React from "react";
import { images } from "../../utils/demo_Images";
// import HalfCircle from "../../lottie-animation/half_circle.json";
// import Lottie from "lottie-react";

export default function Subscribe() {
  return (
    <>
      <section className="relative">
        {/* <img
          src={images.half_circle_2}
          className="absolute top-[-129px] right-0"
          alt=""
        /> */}
        
        {/* <Lottie loop={true} animationData={HalfCircle} className="absolute top-[-129px] right-0 h-[110px] xl:h-[350px] xl:w-[280px] rotate-[270deg]"/> */}
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

              <div className="flex w-full max-w-[250px] lg:max-w-[400px] xl:max-w-[550px] bg-white mt-[10%] md:mt-[10px] mx-auto lg:mx-0 rounded-[6px]">
                <input
                  className="w-[170px]  lg:w-[250px] xl:w-[350px] h-[78px] rounded-[6px] pl-[22px] pt-[24px] pb-[26px]"
                  placeholder="Your email here"
                />

                <button className="bg-[#FF8B42] w-[70px]  lg:w-[130px] xl:w-[164px] h-[56px] rounded-[6px] text-white self-center">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='relative'>
     <img src={images.half_circle_2} className="absolute top-[-129px] right-0" alt=""/>
      <div className='bg-[#0089BA] mx-auto h-[850px] lg:h-[448px] rounded-[20px] mt-[196px]  relative'> 
        <img src={images.doctor_2_b} className="absolute top-[-30px] lg:top-[-78px] lg:left-[102px]" alt=""/>
        <p className='absolute w-[211px] h-[42px] font-[poppins] font-[600] text-[28px] leading-[42px] text-white ml-[70px] lg:ml-[560px] lg:mt-[105px]'>Subscribe Now</p>

        <p className='absolute lg:w-[384px] h-[56px] font-[open sans] font-[400] text-[16px] leading-[28px] text-white ml-[70px] lg:ml-[561px] lg:mt-[156px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>

        <input className='absolute bg-white w-[90%] lg:w-[659px] h-[78px] rounded-[6px] ml-[20px] lg:ml-[560px] lg:mt-[266px] pl-[22px] pt-[24px] pb-[26px]' placeholder='Your email here'/>

        <button className='bg-[#FF8B42] absolute w-[100px] lg:w-[164px] h-[56px] rounded-[6px] text-white ml-[63%] lg:ml-[1040px] lg:mt-[277px]'>Submit</button>
      </div>
     </section>  */}
    </>
  );
}
