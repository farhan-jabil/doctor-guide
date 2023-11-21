import React, { useEffect, useRef, useState } from "react";
import Counter from "../../utils/Counter";
import { images } from "../../utils/demo_Images";

export default function Countdown() {
  const countdownRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsCounting(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const currentRef = countdownRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <div ref={countdownRef} className="relative mt-[118px]">
        <div className="mx-auto flex flex-col lg:flex-row lg:space-x-[50px] xl:space-x-[90px] xl:w-[1280px] text-white justify-center px-[10px] md:px-0 pb-5 lg:pb-0">
          <div className="flex flex-row space-x-[20px] lg:space-x-[50px] xl:space-x-[90px]">
            <div className="mt-[25px] lg:mt-[113px] w-[50%] lg:w-auto">
              <img
                src={images.count_person}
                className="mx-auto h-[60px] md:h-[80px] lg:h-auto"
                alt=""
              />
              <p className="w-[53px] mt-[11px] text-[30px] md:text-[40px] leading-[60px] font-[700] font-[poppins] mx-auto">
                <Counter isCounting={isCounting} number={50}></Counter>
              </p>
              <p className="bg-white w-[128px] h-[5px]  rounded-[10px] mx-auto"></p>
              <p className="mt-[16px] font-[poppins] font-[700] text-[22px] lg:text-[32px] lg:leading-[48px] text-center">
                Medical Experts
              </p>
            </div>
            <div className="mt-[25px] lg:mt-[166px] w-[50%] lg:w-auto">
              <img
                src={images.count_bed}
                className="mx-auto h-[60px] md:h-[80px] lg:h-auto"
                alt=""
              />
              <p className="w-[79px] mt-[11px] text-[30px] lg:text-[40px] leading-[60px] font-[700] font-[poppins] mx-auto">
                <Counter isCounting={isCounting} number={500}></Counter>
              </p>
              <p className="bg-white w-[128px] h-[5px]  rounded-[10px] mx-auto"></p>
              <p className=" mt-[16px] font-[poppins] font-[700] text-[22px] lg:text-[32px] lg:leading-[48px] text-center">
                Hospital Rooms
              </p>
            </div>
          </div>

          <div className="flex flex-row space-x-[20px] lg:space-x-[50px] xl:space-x-[90px]">
            <div className="mt-[25px] lg:mt-[152.25px] w-[50%] lg:w-auto">
              <img
                src={images.count_trophy}
                className="mx-auto h-[60px] md:h-[80px] lg:h-auto"
                alt=""
              />
              <p className="w-[53px] mt-[11px] text-[30px] lg:text-[40px] leading-[60px] font-[700] font-[poppins] mx-auto">
                <Counter isCounting={isCounting} number={20}></Counter>
              </p>
              <p className="bg-white w-[128px] h-[5px]  rounded-[10px] mx-auto"></p>
              <p className="mt-[16px] font-[poppins] font-[700] text-[22px] lg:text-[32px] lg:leading-[48px] text-center">
                Awards Win
              </p>
            </div>
            <div className="mt-[25px] lg:mt-[138.44px] w-[50%] lg:w-auto">
              <img
                src={images.count_smile}
                className="mx-auto h-[60px] md:h-[80px] lg:h-auto"
                alt=""
              />
              <p className="w-[79px] mt-[11px] text-[30px] lg:text-[40px] leading-[60px] font-[700] font-[poppins] mx-auto">
                <Counter isCounting={isCounting} number={500}></Counter>
              </p>
              <p className="bg-white w-[128px] h-[5px]  rounded-[10px] mx-auto"></p>
              <p className=" mt-[16px] font-[poppins] font-[700] text-[22px] lg:text-[32px] lg:leading-[48px] text-center">
                Happy Patients
              </p>
            </div>
          </div>
        </div>
        <img
          src={images.count_back}
          className="absolute  top-0 lg:h-[510px] w-full h-full lg:w-screen z-[-1] object-cover"
          alt=""
        />
        <img
          src={images.blue_rect_4}
          className="absolute top-0 lg:h-[510px] w-full h-full lg:w-screen z-[-1] object-cover"
          alt=""
        />
      </div>
    </>
  );
}
