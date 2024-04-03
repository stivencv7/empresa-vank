import { useEffect, useState } from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { SectionAccounts } from "./SectionAccounts/SectionAccounts";
import { SectionCards } from "./SectionCards/SectionCards";
import { SectionCryto } from "./SectionCryto/SectionCryto";
import { IconNotification } from "@/assets/IconV2/IconNotification";
import { IconUser } from "@/assets/IconV2/IconUser";
import { IconPencilUpdate } from "@/assets/IconV2/IconPencilUpdate";
import { SectionQuickActionsCards } from "./SectionQuickActionsCards/SectionQuickActionsCards";

const Home = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="w-full h-[3rem] flex justify-end  pt-1">
          <div className=" w-[8.75rem] h-[3rem] flex gap-6">
            <div className="border-[1px] border-[#C9CBCE] rounded-full w-12 h-12 flex items-center justify-center">
              <IconNotification />
            </div>
            <div className="bg-[#F2F5F7] rounded-full w-12 h-12 flex items-center justify-center">
              <IconUser />
            </div>
          </div>
        </div>
        <section className="">
          <div className="mt-[-8px] flex items-center">
            <h1 className="text-[1.75rem] p-0 m-0  text-[#5E6061 font-bold">{"Hi Johanna,"}</h1>
            <IconPencilUpdate/>
          </div>
          <div>
            <SectionQuickActionsCards/>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
