import { CardItem } from "../CardItem/CardItem";
import usd from "../../../../../assets/Icon/USD.png";
import savings from "../../../../../assets/Icon/USDSavings.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ArrowHide } from "@/assets/Icon/ArrowHide";

export const SectionAccounts = ({ moreStyle, onclik }: { moreStyle?: string, onclik: any }) => {
  const [t, i18n] = useTranslation("global");
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div
      className={`relative cards-home-responsie flex flex-col 2xl:gap-[12px] 2xl:h-[137px]  max-2xl:gap-[8px] max-sm:gap-[12px]  max-lg:gap-[12px] max-sm:h-[137px]  max-lg:h-[137px]  ${visible?'overflow-hidden transition-height duration-1000 ease-in-out 2xl:h-[20px]':'transition-height duration-1000 ease-in-out'} ${moreStyle}  `}
    >
      <div className="flex w-full justify-between ">
        <h2 onClick={onclik} className="font-normal cursor-pointer">Accounts</h2>
        <button onClick={() => setVisible(!visible ? true : false)}><ArrowHide className={`${visible ?'transition-transform rotate-0 duration-300 ':'transition-transform rotate-180 duration-300'}`}/></button>
      </div>
        
        <div className={`flex flex-col 2xl:gap-[12px] xl:max-2xl:gap-[8px] ${visible?'transition-opacity  opacity-0 duration-700 ease-out ':'transition-opacity  opacity-100 duration-700 ease-out'}`}>
          <CardItem image={usd} text={"USD"} amount={`$ ${"4.565,00"}`} typeAssets={'USD'} />
          <CardItem
            image={savings}
            text={t("Vank.Home.AccountInfo.usdSavings")}
            amount={`$ ${"860,00"}`}
            typeAssets={"USD"}
          />
        </div>
    </div>
  );
};