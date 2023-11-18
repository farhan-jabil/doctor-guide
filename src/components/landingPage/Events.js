import React from 'react'
import { images } from '../../utils/demo_Images'

export default function Events() {
  return (
    <>
     <section className=''>

        <p className='font-[poppins] font-[700] text-[28px] lg:text-[40px] leading-[60px] mx-auto mt-[120px] text-center'>Upcoming Events</p>

        <p className='font-[400] text-[16px] leading-[28px] text-center mx-auto mt-[12px] lg:w-[814px] px-[70px] lg:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className=' flex flex-col lg:flex-row mt-[70px] justify-center w-[80%] xl:w-[84%] lg:w-[85%] mx-auto'>

            <div className='relative'>
            <img src={images.event_1} className="lg:h-[530px] w-screen lg:w-[500px] xl:w-auto" alt=""/>
            <div className='absolute top-[5%] right-[5%]'>
            <img src={images.event_rect} className="w-[90px] lg:w-auto h-[80px] lg:h-auto" alt=""/>
            <p className='absolute top-0 lg:top-[15px] left-[26px] lg:left-[49px] text-[28px] lg:text-[40px] font-[700] leading-[60px] w-[40.5px] h-[60px] text-white'>12</p>
            <p className='absolute top-[45px] lg:top-[75px] left-[18px] lg:left-[37px] w-[81px] h-[28px] font-[open sans] font-[400] text-[12px] lg:text-[16px] leading-[28px] text-white'>DEC,2022</p>
            </div>
            </div>

            <div className='lg:h-[530px] xl:pl-[61px] xl:pr-[111px] pt-[66px] lg:pt-[50px] xl:pt-[66px] border-[1px] border-solid border-[#273240] px-5'>
                <p className='font-[600] text-[20px] lg:text-[28px] text-center lg:text-left leading-[42px]'>How to lead a good healthy life</p>
                <div className='flex flex-col md:flex-row mt-5 lg:mt-2.5 md:space-x-[10px] lg:space-x-[15px] w-fit lg:w-auto mx-auto'>
                    <div className="flex space-x-[20px] md:space-x-[10px] lg:space-x-[15px]">
                    <i className="fa-sharp fa-solid fa-calendar-days mt-[5px] text-[#FF8B42]"></i>
                    <p className='font-[400] text-[16px] leading-[28px]'>15 Oct, 2019</p>
                    </div>
                    <div className="flex space-x-[20px] md:space-x-[10px] lg:space-x-[15px]">
                    <i className="fa-sharp fa-solid fa-clock mt-[5px] text-[#FF8B42]"></i>
                    <p>8:00 AM - 5:00 PM</p>
                    </div>
                    <div className="flex space-x-[20px] md:space-x-[10px] lg:space-x-[15px]">
                    <i className="fa-sharp fa-solid fa-location-dot mt-[5px] text-[#FF8B42]"></i>
                    <p>Uttara, TX 70240</p>
                    </div>
                </div>
                <p className='lg:w-[450px] xl:w-[537px] mx-auto lg:mx-0 lg:h-[192px] mt-[45px] text-[16px] text-[#273240] font-[400] leading-[28px] font-[open sans]'>
                Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                </p>
                <div className='mt-[45px] mb-[50px] w-fit lg:w-auto mx-auto lg:mx-0'>
                    <button className='bg-[#FF8B42] rounded-[6px] h-[40px] md:h-[56px] w-[90px] md:w-[167px] text-white'>
                        Book Now
                    </button>
                    <button className='text-[#FF8B42] border-[1px] border-solid border-gray-500 rounded-[6px] h-[40px] md:h-[56px] w-[90px] md:w-[167px] ml-[22px]'>
                        10 Available
                    </button>
                </div>
            </div>
        </div>

        <div className=' flex flex-col-reverse lg:flex-row mt-[70px] justify-center w-[80%] lg:w-[85%] xl:w-[84%] mx-auto'>

        <div className='lg:h-[530px] xl:pl-[61px] xl:pr-[111px] pt-[66px] lg:pt-[50px] xl:pt-[66px] border-[1px] border-solid border-[#273240] px-5'>
                <p className='font-[600] text-[20px] lg:text-[28px] text-center lg:text-left leading-[42px]'>How to lead a good healthy life</p>
                <div className='flex flex-col md:flex-row mt-5 lg:mt-2.5 md:space-x-[10px] lg:space-x-[15px] w-fit lg:w-auto mx-auto'>
                    <div className="flex space-x-[20px] md:space-x-[10px] lg:space-x-[15px]">
                    <i className="fa-sharp fa-solid fa-calendar-days mt-[5px] text-[#FF8B42]"></i>
                    <p className='font-[400] text-[16px] leading-[28px]'>15 Oct, 2019</p>
                    </div>
                    <div className="flex space-x-[20px] md:space-x-[10px] lg:space-x-[15px]">
                    <i className="fa-sharp fa-solid fa-clock mt-[5px] text-[#FF8B42]"></i>
                    <p>8:00 AM - 5:00 PM</p>
                    </div>
                    <div className="flex space-x-[20px] md:space-x-[10px] lg:space-x-[15px]">
                    <i className="fa-sharp fa-solid fa-location-dot mt-[5px] text-[#FF8B42]"></i>
                    <p>Uttara, TX 70240</p>
                    </div>
                </div>
                <p className='lg:w-[450px] xl:w-[537px] mx-auto lg:mx-0 lg:h-[192px] mt-[45px] text-[16px] text-[#273240] font-[400] leading-[28px] font-[open sans]'>
                Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                </p>
                <div className='mt-[45px] mb-[50px] w-fit lg:w-auto mx-auto lg:mx-0'>
                    <button className='bg-[#FF8B42] rounded-[6px] h-[40px] md:h-[56px] w-[90px] md:w-[167px] text-white'>
                        Book Now
                    </button>
                    <button className='text-[#FF8B42] border-[1px] border-solid border-gray-500 rounded-[6px] h-[40px] md:h-[56px] w-[90px] md:w-[167px] ml-[22px]'>
                        10 Available
                    </button>
                </div>
        </div>

            <div className='relative'>
            <img src={images.event_2} className="lg:h-[530px] w-screen lg:w-[500px] xl:w-auto" alt=""/>
            <div className='absolute top-[5%] right-[5%]'>
            <img src={images.event_rect} className="w-[90px] lg:w-auto h-[80px] lg:h-auto" alt=""/>
            <p className='absolute top-0 lg:top-[15px] left-[26px] lg:left-[49px] text-[28px] lg:text-[40px] font-[700] leading-[60px] w-[40.5px] h-[60px] text-white'>12</p>
            <p className='absolute top-[45px] lg:top-[75px] left-[18px] lg:left-[37px] w-[81px] h-[28px] font-[open sans] font-[400] text-[12px] lg:text-[16px] leading-[28px] text-white'>DEC,2022</p>
            </div>
            </div>

        </div>

     </section> 
    </>
  )
}