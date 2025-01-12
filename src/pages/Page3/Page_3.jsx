import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import image from "../../images/1.jpeg";
import images from "../../images/denys-nevozhai-_QoAuZGAoPY-unsplash.jpg";
import { GiFangsCircle } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button";
import { LuSquareStack } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

function Page_3() {
  return (
    <div>
      <div className=" fixed p-7 bottom-0 bg-white flex items-center justify-center gap-4 h-20 w-full ">
        <div className="flex items-center justify-center h-16 bg-[#f7f7f7] rounded-full shadow-sm w-20">
        <LuSquareStack className="text-2xl"/>
        </div>
          <Button text="Submit a Proposal" />
      </div>
      <div className="flex items-center justify-between p-3 w-full fixed top-0">
        <IoIosArrowBack className="text-2xl text-black" />
        <div className="font-bold text-xl text-black">Bluemoon Studio</div>
        <BsThreeDotsVertical className="text-2xl text-black" />
      </div>
      <div className="flex pt-14 gap-9 p-5 w-full flex-col ">
        <div className="flex flex-col gap-2 relative">
          <img src={images} className="rounded-xl" alt="" />
          <div className=" absolute w-24 h-24 rounded-full bg-[#69bdfb] border-2 border-white -bottom-5 left-10 flex items-center justify-center">
            <GiFangsCircle className="text-6xl text-white" />
          </div>
          <div className="w-full text-end text-sm text-[#d9dcdc]">
            3 Days Ago
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-0">
          <div className="font-bold text-xl text-[#313b47]">
            Looking for Backend Developer for Crypto Dashboard
          </div>
          <div className="text-lg text-[#aaaeb1] font-medium">
            Bluemoon Studio
          </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="flex items-center relative w-14">
                <img src={image} className="absolute w-7 h-7 left-0 rounded-full" alt="" />
                <img src={images} className="absolute w-7 h-7 left-3 rounded-full" alt="" />
                <img src={image} className="absolute w-6 h-7 left-5 rounded-full" alt="" />
                <img src={images} className="absolute w-7 h-7 left-7 rounded-full" alt="" />
              </div>
              <div className="font-bold text-[#2d2d2d] text-md">
                36+ Applied
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaStar className="text-[#f2a422]" />
              <div className="font-medium text-[#85898c]">
                100% of 29k Reviews
              </div>
            </div>
          </div>
          <div className="w-full border-2 border-l-transparent border-r-transparent py-2 border-b-[#f2f2f2] border-t-[#f2f2f2] flex justify-between items-center">
            <div className="flex items-center gap-2">
            <FaCheckCircle className="text-xl text-[#4c87f9]"/>
              <div className="text-sm text-[#85888a] font-medium">Payment Verified</div>
            </div>
            <div className="flex items-center gap-2">
            <IoLocationOutline className="text-xl"/>
              <div className="text-sm text-[#85888a] font-medium">Kalasan, Sleman, DIY</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg text-[#232b34]">Project Overview</div>
           <div className="flex flex-col gap-4">
            <div className=" text-[#85888a] text-sm font-medium">
              We are a team of website design experts committed to helping you create on impressive and effective online presence. With extensive experience in the industry, we have the skills and knowlege needed to turn you vision into a stunning website. </div>
          </div>
            <div className="text-md text-[#85888a] font-medium">We understand that on attractive and intuitive website design is key to online success.</div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Page_3;
