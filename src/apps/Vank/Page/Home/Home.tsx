import { useEffect, useState } from "react";
import { IconNotification } from "@/assets/IconV2/IconNotification";
import { IconUser } from "@/assets/IconV2/IconUser";
import { IconPencilUpdate } from "@/assets/IconV2/IconPencilUpdate";
import { SectionQuickActionsCards } from "./SectionQuickActionsCards/SectionQuickActionsCards";
import { Balances } from "./Balances/Balances";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Link } from "react-router-dom";
import { Banner } from "./Banner/Banner";
import { ArrowHide } from "@/assets/Icon/ArrowHide";
import { ModalProfile } from "./ModalProfile/ModalProfile";

const Home = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="w-full h-full bg-[#FCFCFD]">

      <div className="flex flex-col justify-between h-full">



        <section className="">

          <div className="w-full h-[3rem] flex justify-end">

            <div className=" w-[8.75rem] h-[3rem] flex gap-3">
              <div className="border-[1px] border-[#C9CBCE] rounded-full w-12 h-12 flex items-center justify-center">
                <IconNotification />
              </div>
              <ModalProfile/>
            </div>
          </div>

          <div className="mt-[-8px] flex items-center gap-3">
            <h1 className="text-[1.75rem] p-0 m-0  text-[#5E6061 font-bold">{"Hi Johanna,"}</h1>
            <IconPencilUpdate />
          </div>
          <div className="flex flex-col gap-8">
            <p className=''>{"What would you like to do today?"}</p>
            <SectionQuickActionsCards />
          </div>
        </section>

        <section className='flex flex-col gap-y-4 '>
          <Balances />
        </section>

        <section className=" w-[1,40.0625rem] flex gap-8">

          <TransactionHistory />
          <Banner/>  

        </section>


      </div>

    </div>
  );
};

export default Home;
