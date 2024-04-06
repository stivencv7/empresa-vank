import React, { useState } from "react";
import { IconNotification } from "../../../../assets/Icon/IconNotification";

import { IconCircleUser } from "../../../../assets/../assets/Icon/IconCircleUser";
import VankLogo from "../../../../assets/Icon/VankLogo";
import { IconSun } from "../../../../assets/Icon/IconSun";
import login_box from "../../../../assets/login_box.png";

export const Header = ({ className }: { className?: string }) => {
  const newLocal = <IconSun />;

  const [visible,setVisible]=useState(false)


  const enter=()=>{
    setVisible(true)
  }

  return (
    // return (
    <header className={className}>
      <div className=" w-full xl:h-[68px] flex justify-between items-center">
        <div className="xl:w-[160px] flex items-center xl:h-[68px] ">
          <VankLogo
            className="2xl:w-52 2xl:h-[52px] lg:w-[115px] sm:h-[29px]  absolute z-[100]  xl:h-[32px]"
            fill={"#14181F"}
          />
        </div>

        <div className="flex w-[126px] items-center justify-between xl:h-[24.77px]">
          
          <button>{newLocal}</button>
          <button className="flex relative">
            <span>
              <IconNotification />
              <p className="absolute -right-2 -top-2 text-[11px] rounded-full px-[5px]   bg-[#FFED00] text-black font-bold">
                2
              </p>
            </span>
          </button>
          <button>
            <IconCircleUser onMouseEnter={()=>enter()} />
          </button>
        </div>
      </div>
      <div className={`${!visible && 'hidden'} absolute right-3 top-20`}><img src={login_box}/></div>
    </header>
  );
};
