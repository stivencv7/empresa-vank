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
    <div className="h-[100vh] flex bg-[#FCFCFD]">
      <Sidebar className={`h-full  bg-[#FCFCFD]  w-[17.4375rem] xl:w-[15.4375rem] flex flex-col justify-between pt-[1.125rem] fixed z-50`}/>
      
      <div className=" w-full  px-20 flex ">
        <Outlet />
      </div>
    </div>
  );
};
