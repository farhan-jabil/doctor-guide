import React, { useState, useEffect } from "react";
import { data } from "../../utils/demo_data";
import { images } from "../../utils/demo_Images";


export default function Schedule() {
  const [scrollPosition, setScrollPosition] = useState(100); // Set an initial value greater than 0
  const [visibleItems] = useState(4);
  const [totalItems, setTotalItems] = useState(data.schedule_items.length);
  const [containerHeight, setContainerHeight] = useState(visibleItems * 130);

  const handleScroll = (direction) => {
    const scrollStep = 300;
    const container = document.getElementById("scroll-container");
    const itemHeight =
      container && container.firstChild
        ? container.firstChild.clientHeight
        : 130;
    const maxScroll = Math.max(0, totalItems * itemHeight - containerHeight);

    if (direction === "up") {
      setScrollPosition((prev) => Math.max(0, prev - scrollStep));
    } else if (direction === "down") {
      setScrollPosition((prev) => Math.min(maxScroll, prev + scrollStep));
    }
  };

  useEffect(() => {
    setTotalItems(data.schedule_items.length);
    setContainerHeight(visibleItems * 130);
  }, [data.schedule_items.length, visibleItems]);

  const downButtonColor =
    scrollPosition === 0
      ? "#0089BA" 
      : scrollPosition >= totalItems * 91 - containerHeight
      ? ""
      : "#0089BA";

  const showUpButton = scrollPosition > 100;

  return (
    <>
      <section className="xl:w-[1280px] md:mx-[20px] lg:mx-[70px] xl:mx-auto" id="schedule">
        <div className="flex flex-col md:flex-row">
          <div className="flex relative mt-[70px] md:mt-[150px] xl:mt-[339px] md:w-[50%] self-center">
            <div className="mt-[400px] lg:mt-[300px] mr-[30px] lg:mr-[54.5px] ml-5 lg:ml-0 ">
              {showUpButton && (
                <p
                  className="w-[42.5px] h-[42.5px] rounded-[50%] bg-[#0089BA] flex justify-center cursor-pointer"
                  onClick={() => handleScroll("up")}
                >
                  <i className="fa-sharp fa-solid fa-angle-up text-white mt-[12px]"></i>
                </p>
              )}
              <p
                className={`w-[42.5px] h-[42.5px] rounded-[50%] bg-[${downButtonColor}] flex justify-center cursor-pointer mt-[30px]`}
                onClick={() => handleScroll("down")}
              >
                <i className="fa-sharp fa-solid fa-angle-down text-white mt-[12px]"></i>
              </p>
            </div>

            <div>
              <p className="lg:w-[408px] h-[48px] font-[poppins] font-[700] text-[24px] lg:text-[32px] leading-[48px]">
                Doctor's Schedule Today
              </p>

              <div
                className="mt-[85.5px] overflow-hidden"
                style={{ height: `${visibleItems * 130}px` }}
              >
                <ul
                  id="scroll-container"
                  className="space-y-[38.5px] transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${scrollPosition}px)` }}
                >
                  {data.schedule_items.map((x, y) => (
                    <li className="" key={y}>
                      <div className="flex flex-col lg:flex-row w-auto lg:w-[412.5px] h-[91px] border-b-[1.01px] pb-[130px] lg:pb-[27.64px]">
                        <p className="w-[80px] h-[42px] font-[poppins] font-[600] text-[28px] leading-[42px] text-[#EA5262]">
                          {x.time}
                        </p>

                        <div className="lg:ml-[102px]">
                          <p className="h-[30px] w-[202px] font-[500] text-[20px] leading-[30px]">
                            {x.designation}
                          </p>
                          <p className="font-[open sans] font-[400] text-[16px] leading-[28px]">
                            Dr. {x.name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="self-center relative mt-[105px] xl:mt-[210.6px] lg:ml-[144px] xl:ml-0 md:pt-24 lg:pt-0">
            <img
              className="w-[390px] lg:ml-0 lg:w-auto mt-[50px] lg:mt-0 mx-auto"
              src={images.doctor_3}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
