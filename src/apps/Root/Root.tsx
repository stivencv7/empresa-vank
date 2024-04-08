import { Outlet } from "react-router-dom";
import { Sidebar } from "../Shared/layout/Sildebar/Sidebar";
import { Header } from "../Shared/layout/Header/Header";

// import { Rounded } from "../../assets/Rounded";
export const Root = () => {

  return (
    <div className="2xl:h-[100vh] flex bg-[#FCFCFD]">
      <Sidebar className={`h-full  bg-transparent  w-[17.4375rem] xl:w-[15.4375rem] flex flex-col justify-between pt-[1.125rem] fixed z-50`} />
      <div className="w-[17.4375rem]"></div>
      <div className=" flex flex-col justify-between  w-full bg-transparent ">
        <Outlet />
      </div>
    </div>
  );
};
