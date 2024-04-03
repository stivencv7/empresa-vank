import React, { useState } from "react";
import { ListLinkSidebar } from "../Shared/layout/Sildebar/ListLinkSidebar";
import { Outlet } from "react-router-dom";
import { Header } from "../Shared/layout/Header/Header";
// import { Rounded } from "../../assets/Rounded";
export const Root = () => {
  const [enter, setEnter] = useState(false);

  const [histry, setHistory] = useState(false);

  return (
    <div className="h-[100vh]">
      {/*<Header
        className={
          "relative h-[10%] w-[100%] px-[36px]  flex items-center "
        }
      />*/}
      {/* estamos viendo el sm y el md */}

      <ListLinkSidebar
        className={`h-full absolute  z-[1000] pt-[34px] w-[17.4375rem] flex  bg-white  overflow-hidden  transition-width duration-700 ease-in-out float-left   group  flex-col px-[31px]   xl:px-[31px] `}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
      />

      <div className="dark:bg-[#13171d] h-[90%] flex  justify-center py-[36px] items-center ml-[120px]  rounded-tl-[32px] xl:py-6">
        <Outlet />
      </div>
    </div>
  );
};
