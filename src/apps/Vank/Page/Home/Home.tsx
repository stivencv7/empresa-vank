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
    <div className="w-full 2xl:overflow-hidden  flex flex-col gap-7 h-full xl:max-2xl:gap-6 relative ml-[200px] bg-[#FCFCFD]">
        
        <Header/>
      

        {/* <p className=''>{"What would you like to do today?"}</p> */}
        <SectionQuickActionsCards />

        <section className='flex flex-col gap-y-4 '>
          <Balances />
        </section>

        <section className=" 2xl:w-[1,641px] h-[257px] flex gap-8 bg-bg-[#FCFCFD]">

          <TransactionHistory /> 
          <Banner />

        </section>


      </div>

   
  );
};

export default Home;
