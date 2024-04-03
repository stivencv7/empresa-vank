import React, { useState } from "react";
import { ListLinkSidebar } from "../Shared/layout/Sildebar/ListLinkSidebar";
import { Outlet } from "react-router-dom";
import { Header } from "../Shared/layout/Header/Header";
import { Sidebar } from "../Shared/layout/Sildebar/Sidebar";
import { IconNotification } from "@/assets/IconV2/IconNotification";
import { IconUser } from "@/assets/IconV2/IconUser";

// import { Rounded } from "../../assets/Rounded";
export const Root = () => {
  
  return (
    <div className="h-[100vh] flex">
      {/*<Header
        className={
          "relative h-[10%] w-[100%] px-[36px]  flex items-center "
        }
      />*/}
      {/* estamos viendo el sm y el md */}

      <Sidebar className={`h-full  w-[17.4375rem] flex flex-col justify-between pt-[1.125rem]`}/>

      <div className=" w-full pt-8 px-16">
        <Outlet />
      </div>
    </div>
  );
};
