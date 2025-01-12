import {miniLine} from "./Theme_1"
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdSaveAlt } from "react-icons/md";
function Button(props){
    let Data = props.icon;
    return (
       <div className="bg-white w-full shadow-sm rounded-lg flex flex-col gap-2 p-2">
                 <div className="flex gap-4 items-center">
                   <div className={`h-14 w-14 ${props.color} rounded-2xl flex items-center justify-center`}>
                     <Data className="text-3xl text-white" />
                   </div>
                   <div className="flex flex-col ">
                     <div className="font-bold font-sans">
                      {props.text1}
                     </div>
                     <div className="text-[#919191] font-medium">{props.text2}</div>
                   </div>
                 </div>
                 <div className="flex items-center pt-3 gap-4">
                   <div className={miniLine}>
                     Figma
                   </div>
                   <div className={miniLine}>
                     Branding
                   </div>
                   <div className={miniLine}>
                     Adobe Photoshop
                   </div>
                 </div>
                 <div className="flex justify-between pt-3 pb-1 items-center">
                   <div className="flex items-center gap-2">
                     <FaCircleCheck className="text-[#4984fb]" />
                     <div className="font-medium text-[#818181] text-sm">
                       Payment Verified
                     </div>
                   </div>
                   <div className="flex gap-1 items-center">
                     <FaStar className="text-xl text-[#f5b024]" />
                     <FaStar className="text-xl text-[#f5b024]" />
                     <FaStar className="text-xl text-[#f5b024]" />
                     <FaStar className="text-xl text-[#f5b024]" />
                     <FaStar className="text-xl text-[#f5b024]" />
                   </div>
                 </div>
                 <div className="h-[2px] w-full bg-[#f1f1f1de]"></div>
                 <div className="flex justify-between items-center pt-3">
                   <div className="flex gap-2 items-center">
                     <CiHeart className="text-3xl text-[#919193]" />
                     <div className="border border-[#e8e8e8] rounded-md flex items-center justify-center h-12 w-12">
                       <MdSaveAlt className="text-3xl text-[#7f7f7f]" />
                     </div>
                   </div>
                   <div className="flex gap-2 items-center">
                     <div className="text-[#d1d1d1] text-sm font-medium">
                       1 Hour Ago
                     </div>
                     <div className="text-[#6487c9] font-medium">View Details</div>
                   </div>
                 </div>
               </div>
    )
}
export default Button;