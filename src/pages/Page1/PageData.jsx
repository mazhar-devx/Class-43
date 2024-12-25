import React from 'react'
import Button from "../../components/Button";
import AllBoxes from "./AllBoxes"
import { GiFireAce } from "react-icons/gi";
import { RiFlowerFill } from "react-icons/ri";
import { GiFangsCircle } from "react-icons/gi";
import { IoShapesOutline } from "react-icons/io5";
import { GiMoebiusTriangle } from "react-icons/gi";
import { BgTheme , Bg1 , Bg2 ,Bg3 ,Bg4,Bg5} from "./Theme_1"
function PageData() {
  return (
    <div>
      <div className="flex flex-col h-screen items-center justify-between">
        <div className="flex justify-center pt-10 w-full">
          <div className="flex border-2 border-dotted relative border-[#c3c4c750] rounded-full h-[22rem] w-[22rem] items-center justify-center">
            <div className="absolute p-1 bg-white shadow-xl rounded-xl shadow-[#68676762] top-0 flex items-center justify-center border border-[#ebebed70]">
              <div className="h-3 w-3 outline border-2 border-white outline-[#f2e1d9] rounded-full bg-[#ef8041]"></div>
              <span className="text-sm ml-2 text-[#999a9c]">Fireart Studio</span>
            </div>


            <div className="flex border-2 border-dotted border-[#c3c4c794] relative rounded-full h-[18rem] w-[18rem] items-center justify-center">
              <AllBoxes className={`${Bg1} ${BgTheme}`} icon={IoShapesOutline}></AllBoxes>
              <AllBoxes className={`${Bg2} ${BgTheme} `} icon={GiFangsCircle}></AllBoxes>
              <AllBoxes className={` ${Bg3} ${BgTheme}  `} icon={GiFireAce}></AllBoxes>
              <div className="flex border-2 border-dotted border-[#c3c4c7c9] relative rounded-full h-[13rem] w-[13rem] items-center justify-center">
                <AllBoxes className={`${Bg4} ${BgTheme} `} icon={GiMoebiusTriangle}></AllBoxes>
                <div className="flex border-2 border-dotted border-[#c3c4c7] rounded-full h-[9rem] w-[9rem] items-center justify-center">
                  <AllBoxes className={`${Bg5} ${BgTheme} `} icon={RiFlowerFill}></AllBoxes>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="px-10 font-bold text-2xl pt-4 text-center">
            Find a suitable job in seconds with our advanced search features🚀
          </div>
          <div className="px-1 font-medium text-sm text-[#bababa]  pt-1 text-center">
            Explore thousonds of exciting jobs from leading componies around the
            world. Lowceris your trusted partner in finding jobs
          </div>
          <div className="px-2 w-full pb-3">
            <Button text="Submit a Proposal" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageData
