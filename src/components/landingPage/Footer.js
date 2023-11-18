import React from 'react'
import { data } from '../../utils/demo_data'
import { images } from '../../utils/demo_Images'

export default function Footer() {
  return (
    <>
      <section className='bg-[#273240] text-white'>

        <div className='border-b-[2px] pb-10 xl:pb-0 '>

          <div className='flex flex-col lg:flex-row xl:h-[530px] w-[80%] xl:w-[84%] mx-auto mt-[148px] lg:space-x-6'>

            <div className='mt-[100px] lg:mt-[120px] xl:mt-[140px]'>
              <img src={images.logo_2} className="lg:ml-0" alt="" />
              <p className='font-[open sans] text-[16px] leading-[28px]  lg:ml-0 mt-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut cras velit senectus id tellus aliquam enim felis. Sed commodo cursus tellus sapien, viverra imperdiet morbi dignissim. Consequat in metus arcu eget.</p>
              <div className='lg:mt-[37px] mt-10 lg:ml-0 space-x-[24px]'>
                <i className="fa-brands fa-twitter bg-[#FF8B42] cursor-pointer text-white rounded-[10px] w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] pl-[9px] xl:pl-[13px] pt-[9px] xl:pt-[14px]"></i>
                <i className="fa-brands fa-linkedin-in bg-[#FF8B42] cursor-pointer text-white rounded-[10px] w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] pl-[9px] xl:pl-[13px] pt-[9px] xl:pt-[14px]"></i>
                <i className="fa-brands fa-facebook bg-[#FF8B42] cursor-pointer text-white rounded-[10px] w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] pl-[9px] xl:pl-[13px] pt-[9px] xl:pt-[14px]"></i>
              </div>
            </div>

            <div className='text-white xl:ml-[71px] mt-[70px] lg:mt-[139px] '>
              <p className='font-[poppins] font-[500] text-[20px] leading-[30px]'>Our Services</p>
              <ul className='mt-[34px]'>
                {data.services_item.map((x, y) => (
                  <li key={y}>
                    <div className='border-[#D9D9D9] w-[151px] h-[46px] font-[open sans] font-[400] text-[16px] leading-[28px] border-b-[1px] pb-[10px]'>
                      {x.item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-[100px] lg:mt-[139px] xl:ml-[85px]'>
              <p className='text-white font-[500] text-[20px] leading-[30px] font-[poppins]'>Contact Us</p>
              <ul>
                {data.contact_items.map((x, y) => (
                  <li className='flex flex-row mt-[34px]' key={y}>
                    <i className={`${x.icon} pt-[7px] w-[24px] h-[24px] text-[#FF8B42]`}></i>
                    <p className='font-[open sans] lg:w-[calc(100%-24px)] font-[400] text-[16px]  leading-[28px] ml-[17px]'>{x.item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-[100px] lg:mt-[139px] xl:ml-[85px]'>
              <p className='text-white font-[500] text-[20px] leading-[30px] font-[poppins]'>Doctors Schedule</p>
              <p className='font-[open sans] font-[400] text-[16px] leading-[28px] mt-[34px]'>At vero eos et accusam et justou dolores et ea rebum tet clita kasd gubergren no sea takimata.</p>
              <div className='flex flex-row bg-[#FF8B42] w-[189px] h-[56px] md:h-[40px] lg:h-[56px] rounded-[6px] mt-[30px] items-center justify-center cursor-pointer'>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                <p className='ml-[10px]'>View Schedule</p>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:ml-[85px] relative flex flex-col-reverse lg:flex-row lg:h-[132px] pt-[55px] pb-[49px]'>

          <p className='lg:w-[456px] font-[open sans] font-[400] text-[16px] leading-[28px] px-[40px] lg:px-[0px] mt-5 lg:mt-0'>Copyright © 2022. All Rights Reserved by Solutya.</p>

          <ul className='flex flex-col lg:flex-row lg:absolute bottom-5 lg:bottom-auto lg:right-[132px]  lg:h-[28px] space-x-[0px]  lg:space-x-7 px-[40px] lg:px-[0px]'>
            <li>Latest news</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>

          <div className='absolute top-[-25px] right-[50px] lg:right-[88px] h-[50px] w-[50px] rounded-[27px] bg-[#FF8B42]'>
            <i className="absolute top-[17px] left-[17px] fa-solid fa-chevron-up"></i>
          </div>

        </div>

      </section>
    </>
  )
}
