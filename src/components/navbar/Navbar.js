import React from "react";
import { data } from "../../utils/demo_data";
import { images } from "../../utils/demo_Images";

export default function Navbar() {
  return (
    <>
      <section>
        <nav className="hidden lg:flex bg-[#273240] lg:h-[70px] xl:h-[104px] lg:py-[15px] xl:py-[20px] lg:px-[30px] xl:px-[70px] ">
          <a href="/">
            <img
              src={images.logo_1}
              className="h-[35px] xl:h-[55px] xl:w-[235px] my-[.5px]"
              alt="Flowbite Logo"
            />
          </a>

          <div
            className="flex flex-row absolute lg:right-[10px] xl:right-[70px] text-white"
            id="navbar-default"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-[10px] xl:space-x-[13px] xl:my-[10px] lg:ml-[170px] xl:ml-[215px] p-1 text-sm font-medium border-0 dark:bg-gray-800 dark:border-gray-700">
              {data.navbar_items.map((x, y) => (
                <li className="flex flex-row group" key={y}>
                  <div
                    className="block rounded bg-transparent my-1 dark:text-white cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-[1.3]"
                    aria-current="page"
                  >
                    {x.item}
                  </div>
                  <div className="w-[24px] h-[24px] px-[5px] pt-[3px]">
                    {x.sign}
                  </div>
                </li>
              ))}
            </ul>

            <ul className="flex flex-row xl:ml-[70px] space-x-[19px] text-sm font-medium border-0">
              <li>
                <div className="relative inline-block group">
                  <button className="z-10 relative xl:w-[117px] lg:h-[40px] xl:h-[56px] lg:px-[24px] xl:px-[34.5px] rounded-md bg-[#FF8B42] text-white border border-[#FF8B42] transition-all duration-500 ease-in-out group-hover:text-white group-hover:border-[#0089BA]">
                    <span className="relative z-10 group-hover:scale-110">
                      LOGIN
                    </span>
                    <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 rounded-md"></span>
                  </button>
                </div>
              </li>
              <li>
                <div className="relative inline-block group">
                  <button className="z-10 relative xl:w-[117px] lg:h-[40px] xl:h-[56px] lg:px-[24px] xl:px-[34.5px] rounded-md bg-[#FF8B42] text-white border border-[#FF8B42] transition-all duration-500 ease-in-out group-hover:text-white group-hover:border-[#0089BA]">
                    <span className="relative z-10">SIGNUP</span>
                    <span className="absolute inset-0 bg-[#0089BA] origin-left transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 rounded-md"></span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="nav_up block lg:hidden w-screen h-[70px] text-white z-[1000]">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa-sharp fa-solid fa-bars"></i>
          </label>
          <a href="/">
            <img
              src={images.logo_1}
              className="absolute top-5 left-5 h-[35px] lg:h-[55px] lg:w-[235px]"
              alt="Flowbite Logo"
            />
          </a>

          <ul className="nav_ul">
            {data.navbar_items.map((x, y) => (
              <li className="flex flex-row" key={y}>
                <div
                  className="block rounded bg-transparent my-1 dark:text-white"
                  aria-current="page"
                >
                  {x.item}
                </div>
                <div className="w-[24px] h-[24px] px-[5px] pt-[3px]">
                  {x.sign}
                </div>
              </li>
            ))}
            <li>
              <button className="bg-[#FF8B42] lg:w-[117px] py-1.5 lg:py-4 px-[18px] lg:px-[34.5px] rounded-md">
                LOGIN
              </button>
            </li>
            <li>
              <button className="bg-[#FF8B42] lg:w-[117px] py-1.5 lg:py-4 px-[18px] lg:px-[34.5px] rounded-md">
                SIGNUP
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
