import visa from "../../../../../assets/Icon/visa.png";
import { useTranslation } from "react-i18next";
import { CardItem } from "../CardItem/CardItem";
import { useState } from "react";
import { ArrowHide } from "@/assets/Icon/ArrowHide";

export const SectionCards = ({ moreStyle, onclik }: { moreStyle?: string, onclik: any }) => {
  const [t, i18n] = useTranslation("global");
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className={`${moreStyle} cards-home-responsie flex flex-col gap-[12px]  text-[16px] 2xl:h-[137px] max-2xl:gap-[8px] max-sm:gap-[12px]  max-lg:gap-[12px] max-sm:h-[137px]  max-lg:h-[137px] ${visible?'2xl:h-auto overflow-hidden  ':''}`}>
      <div className="flex w-full justify-between">
        <h2 onClick={onclik} className=" font-normal leading-[20.8px] cursor-pointer">Cards</h2>
        <button onClick={() => setVisible(!visible ? true : false)}><ArrowHide className={`${visible ?'transition-transform rotate-0 duration-300':'transition-transform rotate-180 duration-300'}`}/></button>
      </div>
      <div className={`flex flex-col 2xl:gap-[12px] xl:max-2xl:gap-[8px] ${visible ? 'h-0 overflow-hidden hidden  bg-black' : ''}`}>
      <CardItem
        image={visa}
        text={t("Vank.Home.CardsInfo.myCard") + " 1"}
        amount={`$ ${"565,00"}`}
        typeAssets={'USD'}
      />

      <CardItem
        image={visa}
        text={t("Vank.Home.CardsInfo.myCard") + " 2"}
        amount={`$ ${"565,00"}`}
        typeAssets={'USD'}
      />
    </div>
    </div >
  );
};
