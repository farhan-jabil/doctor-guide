import React from 'react'
import { data } from '../../utils/demo_data'
import { images } from '../../utils/demo_Images'

export default function Sick() {
  return ( 
    <>
      <section className='xl:w-[1280px] mx-auto '>

<div className='flex flex-col-reverse lg:flex-row'>

  <div className='relative w-screen lg:w-[500px] xl:w-[747px] xl:ml-[auto] lg:pl-[70px] xl:pl-[0px]'>

    <div className='flex absolute top-[60px] lg:top-[50px] xl:top-[40px] left-[5%] md:left-[20%] lg:left-16 xl:left-0 w-[150px] lg:w-[190px] xl:w-[270px] lg:h-[60px] xl:h-[75px] rounded-[33px] shadow-[5px_12px_12px_3px_rgba(139,139,139,0.25)] bg-white'>

      <div className='bg-[#6E27E0] w-[30px] lg:w-[45px] xl:w-[61px] h-[30px] lg:h-[45px] xl:h-[61px] rounded-[33px] my-[6.8px] ml-[6.78px]'>

        <img src={images.person} className="w-[15px] lg:w-[18px] xl:w-[24px] h-[15px] lg:h-[18px] xl:h-[27.5px] ml-[7px] lg:ml-[9px] xl:ml-[13.7px] mt-[7.7px]" alt="" />
      </div>

      <div className='ml-[15px] lg:ml-[20px] xl:ml-[30px] lg:mt-[13px] xl:mt-[17px]'>

        <p className='text-[10px] xl:text-[13px] leading-[18px] font-[600] font-[poppins]'>Consult Online</p>
        <p className='text-[13px] xl:text-[15px] leading-[24px] font-[400] font-[open sans]'>Best Solution</p>
      </div>
    </div>

    <div className='flex absolute right-[5%] md:right-[20%] lg:right-0 xl:left-[476.85px] bottom-[60px] lg:bottom-[100px] xl:top-[410.09px] w-[150px] lg:w-[190px] xl:w-[270px] lg:h-[60px] xl:h-[75px] rounded-[33px] shadow-[5px_12px_12px_3px_rgba(139,139,139,0.25)] bg-white lg:z-[1]'>
      
      <div className='bg-[#0089BA] w-[30px] lg:w-[45px] xl:w-[61px] h-[30px] lg:h-[45px] xl:h-[61px] rounded-[33px] my-[6.8px] ml-[6.78px]'>
        <img src={images.person} className="w-[15px] lg:w-[18px] xl:w-[24px] h-[15px] lg:h-[18px] xl:h-[27.5px] ml-[7px] lg:ml-[9px] xl:ml-[13.7px] mt-[7.7px]" alt="" />
      </div>
      
      <div className='ml-[15px] lg:ml-[20px] xl:ml-[30px] lg:mt-[13px] xl:mt-[17px]'>
        <p className='text-[10px] xl:text-[13px] leading-[18px] font-[600] font-[poppins]'>Consult Online</p>
        <p className='text-[13px] xl:text-[15px] leading-[24px] font-[400] font-[open sans]'>Best Solution</p>
      </div>

    </div>

    <img src={images.doctor_1_b} className="px-5 md:px-10 lg:px-0 xl:ml-4 mt-7 lg:mt-0 mx-auto" alt="" />
  </div>

  <div className='lg:mx-auto text-center lg:text-left self-center'>
    
    <p className='lg:w-[400px] xl:w-[518.66px] font-[poppins] font-[700] text-[24px] lg:text-[24px] xl:text-[32px] leading-[48px] text-[#273240] mt-10 lg:mt-0 px-[40px] lg:px-[0px]'>Sick Kid? How to Deal with a Child's Fever: 4 Steps</p>

    <div className='mt-[30px] lg:mt-[65.7px] w-fit lg:w-auto mx-auto'>
      <ul className='space-y-[25.5px] lg:pl-0'>
        {data.steps_item.map((x, y) => (
          <li className='flex flex-row ' key={y}>
            <div><img src={images.step} alt="" /></div>
            <div className='ml-[34px]'>{x.item}</div>
          </li>
        ))}
      </ul>
    </div>

  </div>
  
</div>
</section>
    </>
  )
}
