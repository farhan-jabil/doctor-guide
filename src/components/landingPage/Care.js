import React from 'react'
import { data } from '../../utils/demo_data'

export default function Care() {
  return (
    <>
     <section id='care' className='w-[80%] lg:w-[84.5%] mx-auto z-[-1]'>

        <p className='h-[60px] font-[poppins] font-[700] text-[24px] lg:text-[40px] leading-[60px] text-[#273240] mt-[106.5px] mx-auto text-center'>Our Medical Care</p>
        <p className='mt-[12px] mx-[auto] w-[162px]'>Services We Provide</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-[30px] gap-y-[30px] md:gap-y-[30px] xl:gap-[30px] mt-[70px]'>
            {data.medical_items.map((x,y) => (
                <div className='mx-auto' key={y}>
                <img src={x.image} alt=""/>
                <p className='bg-[#6E27E0] h-[54px] lg:h-[80px] xl:h-[54px] text-center flex justify-center items-center text-white font-[500] text-[20px] leading-[30px]'>{x.dept}</p>
               </div>
            ))}
        </div>

        <div className='h-[50px] w-[296px] rounded-[6px] py-[13px] px-[44px] bg-[#FF8B42] text-white mx-auto mt-[40px]'>
          <button className='w-[208px]'>
          LOAD MORE DEPARTMENTS
          </button>
          </div>

     </section> 
    </>
  )
}
