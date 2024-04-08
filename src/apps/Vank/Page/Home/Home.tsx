import { useEffect, useState } from "react";
import { SectionQuickActionsCards } from "./components/SectionQuickActionsCards/SectionQuickActionsCards";
import { Balances } from "./components/Balances/Balances";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

import { Header } from "@/apps/Shared/layout/Header/Header";
import { Banner } from "./components/Banner/Banner";

const Home = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="w-full 2xl:overflow-hidden  flex flex-col gap-7 h-full xl:max-2xl:gap-6 relative items-center justify-between ">

      <Header />
      {/* <p className=''>{"What would you like to do today?"}</p> */}
      <section className="w-[1401px] px-[64px]">
        <SectionQuickActionsCards />
      </section>

      <section className='flex flex-col gap-y-4 w-[1401px] px-[64px]'>
        <Balances />
      </section>

      <section className=" w-[1401px] px-[64px]  h-full flex gap-[24px] xl:max-2xl:pb-10 ">
        <TransactionHistory />
        <Banner />

      </section>
      <br />
    </div>


  );
};

export default Home;
