import React from "react";
import Slider from "react-slick";
import { images } from "../../utils/demo_Images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feedback() {
  const CustomPrevArrow = (props) => (
    <div className="slick-prev !left-[-150px] lg:w-[44px] lg:h-[22px]">
      <img {...props} src={images.left_arrow} className="w-full" alt="" />$
      {console.log("prev")}
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="slick-next !right-[-150px] lg:w-[44px] lg:h-[22px]">
      <img {...props} src={images.right_arrow} className="w-full" alt="" />$
      {console.log("next")}
    </div>
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <section className="feedback w-[80%] xl:w-[84%] mx-auto mt-10 xl:mt-[120px] overflow-hidden rounded-[20px]  text-white">
        <div className="border min-h-[510px] mx-auto bg-[#6e27f0cf] ">
          <div className="font-[poppins] pt-[43px] pb-[49px] font-[700] text-[24px] lg:text-[32px] leading-[48px] mx-auto w-fit">
            Patient Feedback
          </div>

          <Slider
            {...settings}
            className="flex max-w-[980px] pb-[43px] mx-auto w-1/2 items-center justify-between px-[40px] xl:px-0 "
          >
            <div className="!flex flex-col lg:flex-row w-fit">
              <img
                src={images.patient}
                className="h-[80px] w-[80px] lg:w-[170px] lg:h-[170px] xl:h-auto xl:w-auto mx-auto"
                alt=""
              />
              <div className="text-center lg:text-left lg:ml-[68px] font-[open sans] font-[400] mx-auto">
                <p className="mx-auto font-[400] text-[16px] leading-[24px] px-5 lg:px-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis posuere scelerisque curabitur lorem. Viverra at
                  venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut
                  nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit 1.
                </p>
                <div className="mt-5">
                  <p>
                    <span className="text-[15px]">TOM COOPPER</span> <br />
                    <span className="text-[16px] text-[#FF8B42]">
                      Managing Director Of Art
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="!flex flex-col lg:flex-row w-fit">
              <img
                src={images.patient}
                className="h-[80px] w-[80px] lg:w-[170px] lg:h-[170px] xl:h-auto xl:w-auto mx-auto"
                alt=""
              />
              <div className="text-center lg:text-left lg:ml-[68px] font-[open sans] font-[400] mx-auto">
                <p className="mx-auto font-[400] text-[16px] leading-[24px] px-5 lg:px-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis posuere scelerisque curabitur lorem. Viverra at
                  venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut
                  nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit 2.
                </p>
                <div className="mt-5">
                  <p>
                    <span className="text-[15px]">TOM COOPPER</span> <br />
                    <span className="text-[16px] text-[#FF8B42]">
                      Managing Director Of Art
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
