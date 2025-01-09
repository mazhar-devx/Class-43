import React from "react";
import { RiFlowerFill } from "react-icons/ri";
import { LuBell } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Cards from "./Cards";
import { RiLayout2Fill } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import Button from "../../components/Button";
import Buttons from "./Buttons";
import src from "../../images/1.jpeg";

import { GiFireAce } from "react-icons/gi";
import { GiFangsCircle } from "react-icons/gi";
export default function Page_2() {
  return (
    <div className=" select-none ">
      <div className="w-full fixed bottom-0 bg-white h-20 border-t-2 flex items-center justify-between px-6 border-[#f1f1f1] ">
        <div className="h-10 w-10 flex items-center group transition-all hover:bg-transparent justify-center rounded-full bg-[#eaf2fd]">
          <RiLayout2Fill className="text-xl text-[#568efb] group-hover:text-[#5e5e5e]" />
        </div>
        <div className="h-10 w-10 flex items-center group justify-center rounded-full hover:bg-[#eaf2fd]">
          <IoSearch className="text-[#646464] text-xl group-hover:text-[#568df7]" />
        </div>
        <div className="h-10 w-10 flex items-center group justify-center rounded-full hover:bg-[#eaf2fd]">
          <FiPieChart className="text-[#646464] text-xl group-hover:text-[#568df7]" />
        </div>
        <div className="h-10 w-10 flex items-center group justify-center rounded-full hover:bg-[#eaf2fd]">
          <IoTimeOutline className="text-[#646464] text-xl group-hover:text-[#568df7]" />
        </div>
        <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-[#eaf2fd]">
          <img
            src={src}
            alt="Profile"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex  w-full justify-between items-center p-4">
        <div className="flex gap-3 items-center">
          <RiFlowerFill className="text-3xl text-[#5890fb]" />

          <div className="font-bold text-xl">Lowcer</div>
        </div>
        <div className="flex gap-5 items-center">
          <LuBell className="text-2xl text-[#3a3e41]" />
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#dcdcd9]">
            <img
              src={src}
              alt="Profile"
              className="rounded-full h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 items-center justify-center">
        <div className="flex relative w-full">
          <input
            type="text"
            placeholder="Search type job"
            className="p-3.5 pr-20 bg-[#f6f7f9] placeholder:text-[#a9aaac] placeholder:font-medium w-full rounded-full border border-[#e5e5e7] "
          />
          <div className=" absolute bg-white h-10 w-10 shadow-sm right-3 top-2 rounded-full flex items-center justify-center">
            <IoSearch className="text-lg text-[#464646]" />
          </div>
        </div>
        <div className="flex gap-4 items-center w-full ">
          <div className=" relative">
            <input
              type="text"
              placeholder="Job type...."
              className="p-3.5 pr-16 bg-[#f6f7f9] placeholder:text-[#a9aaac] placeholder:font-medium w-full rounded-full border border-[#e5e5e7] "
            />
            <div className=" absolute bg-white shadow-sm h-10 w-10 right-3 top-2 rounded-full flex items-center justify-center">
              <IoBagOutline className="text-[#434343] text-xl " />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Location..."
              className="p-3.5 pr-16 bg-[#f6f7f9] placeholder:text-[#a9aaac] placeholder:font-medium w-full rounded-full border border-[#e5e5e7] "
            />
            <div className=" absolute bg-white shadow-sm h-10 w-10 right-3 top-2 rounded-full flex items-center justify-center">
              <IoLocationOutline className="text-[#434343] text-xl" />
            </div>
          </div>
        </div>

        <Button text="Search" />
      </div>
      <div className="w-full p-3 h-[34rem] pt-[12.5rem] pb-24 overflow-y-scroll overflow-x-hidden overflow-hidden bg-[#f6f7f9] flex flex-col gap-4 items-center justify-center ">
        <div className="bg-white fixed top-[19.4rem] transition-all w-full p-2 rounded-full shadow-sm flex items-center justify-center gap-2">
        <Buttons text="Recent Jobs" className=" bg-black  text-[#dcdcdc] "/>
        <Buttons text="Popular Jobs" className=" hover:bg-black text-[#959597] hover:text-[#dcdcdc] "/>
        <Buttons text="Matches" className=" hover:bg-black text-[#959597] hover:text-[#dcdcdc] "/>
        </div>
        <Cards icon={GiFireAce} color= "bg-[#ec7f40]" text1="Create Packaging Designs for..." text2="Fireart Studio"/>
        <Cards icon={GiFangsCircle} color= "bg-[#6fbaef]" text1="Looking for Backend Develope..." text2="Bluemoon Studio"/>
      </div>
    </div>
  );
}
