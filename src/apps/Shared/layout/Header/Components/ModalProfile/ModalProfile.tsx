import { ArrowHide } from "@/assets/Icon/ArrowHide"
import { IconUser } from "@/assets/IconV2/IconsSvg"
import { useState } from "react"
import { Link } from "react-router-dom"
import imgProfile from "@/assets/imgProfile.png"

export const ModalProfile = () => {

  const [visible, setVisible] = useState(false)
  

  return (
    <>
      <div className="flex items-center gap-4">
        <div onClick={() => setVisible(!visible)} className="bg-[#F2F5F7] cursor-pointer rounded-full w-12 h-12 flex items-center justify-center peer hover:border-[1px]  hover:border-[#C6C8CA]">
          <IconUser />
        </div>
        <ArrowHide onClick={() => setVisible(!visible)} className={`cursor-pointer h-3 font-bold w-3 peer-hover:h-4 peer-hover:w-4 ${visible ? 'transition-transform duration-700 rotate-180 ' : 'transition-transform duration-700 rotate-0'}`} stroke="#5E6061" />
      </div>
      {
        visible &&
        <div onMouseLeave={() => setVisible(false)} className="w-[438px] flex flex-col justify-center items-center absolute top-[70px] shadow-[#0000001A] shadow-lg  rounded-3xl right-0 z-50  h-[15.1875rem] bg-[#F2F5F7]">

          <div className="w-[402px] h-[156px] flex items-center justify-between">
            
            <div className="w-[171px] h-[156px] flex flex-col items-center justify-center gap-7  ">
              <div className="w-[171px] h-[156px] flex flex-col items-center justify-between">
                <div className=" w-[108px] h-[109px] rounded-full ">
                  <img src={imgProfile} alt="" className="w-full h-full"/>
                </div>
                <div className=" w-full text-center" >
                  <h2 className="font-bold leading-5 text-[#5A5D5A]">{"Johanna Brides"}</h2>
                  <p className="text-sm text-[#87898C]">{"Johanna@thisisvank.com"}</p>
                </div>
              </div>
            </div>
            
            <div className="w-[2px] h-[66px] bg-[#E3E9EE]"></div>
            
            <div className="w-[187px] h-[156px] flex flex-col items-end justify-between gap-7   ">
             <ul className="flex flex-col justify-between  h-full text-[#5A5D5A]">
              <li className="text-end hover:font-bold"><Link to={''}>Edit Profrile</Link></li>
              <li className="text-end hover:font-bold"><Link to={''}>Settings & Privacy</Link></li>
              <li className="text-end hover:font-bold"><Link to={''}>Help & support</Link></li>
              <li className="text-end hover:font-bold"><Link to={''}>Share App</Link></li>
             </ul>
             
            </div>
          </div>

        </div>
      }


    </>

  )
}
