import { IconPencilUpdate } from "@/assets/IconV2/IconsSvg";
import { IconNotification } from "../../../../assets/Icon/IconNotification";
import { ModalProfile } from "./Components/ModalProfile/ModalProfile";

export const Header = () => {

  return (

    <>
      <header className={'flex flex-col sticky top-0  z-50 bg-[#FCFCFD] pt-8'}>

        <div className=" w-full h-[3rem] flex gap-3  justify-end">
          <div className="border-[1px] border-[#C9CBCE] rounded-full w-12 h-12 flex items-center justify-center">
            <IconNotification />
          </div>
          <ModalProfile />
        </div>

        <div className="mt-[-8px] flex items-center gap-3">
          <h1 className="text-[1.75rem] p-0 m-0  text-[#5E6061 font-bold">{"Hi Johanna,"}</h1>
          <IconPencilUpdate />
        </div>

        <p className=''>{"What would you like to do today?"}</p>
      </header>

      
    </>
  );
};
