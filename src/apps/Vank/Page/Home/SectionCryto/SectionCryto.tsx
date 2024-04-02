import eth from "../../../../../assets/Icon/eth.jpeg";
import usdt from "../../../../../assets/Icon/usdt.jpeg";
import btc from "../../../../../assets/Icon/Bitcoin.jpeg";
import { useTranslation } from "react-i18next";
import { CardItem } from "../CardItem/CardItem";
import { useState } from "react";
import { ArrowHide } from "@/assets/Icon/ArrowHide";

export const SectionCryto = ({ moreStyle, onclick }: { moreStyle?: string, onclick?: any }) => {
  const [t, i18n] = useTranslation("global");
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div
      className={`cards-home-responsie-cryto  flex flex-col gap-[12px]  h-[195px]  max-2xl:h-[171px] w-full  max-2xl:gap-[8px]   max-sm:gap-[12px]  max-lg:gap-[12px] max-sm:h-[195px]  ${visible?'2xl:h-auto overflow-hidden  ':''}   max-lg:h-[195px] ${moreStyle}`}
    >
      <div className="flex w-full justify-between">
        <h2 className="font-normal leading-[20.8px] cursor-pointer" onClick={onclick}>Crypto</h2>
        <button onClick={() => setVisible(!visible ? true : false)}><ArrowHide className={`${visible ?'transition-transform rotate-0 duration-300':'transition-transform rotate-180 duration-300'}`}/></button>
      </div>
      <div className={`flex flex-col 2xl:gap-[12px] xl:max-2xl:gap-[8px] ${visible ? 'h-0 overflow-hidden hidden ' : ''}`}>
      <CardItem
        image={usdt}
        text={"USDT"}
        subtext={'1'+" "+t("Vank.Home.CryptoInfo.tether")+` = ${'1.00'} USD` }
        amount={`${"4.563.00"}`}
        typeAssets={"USDT"}
        percentageIncrease={`+ ${'2.5'}%`}
        typeIncrease={'increase'}
      />
      <CardItem
        image={eth}
        text={`ETH`}
        subtext={`1 Ethereum = $ ${'3.852.39'} USD`}
        amount={`${"5.10000"}`}
        typeAssets={"ETH"}
        percentageIncrease={`-${'0.9'}%`}
      />

      <CardItem
        image={btc}
        text={"BTC"}
        subtext={`1 Bitcoin = $ ${'71.014.20'} USD`}
        amount={`${"5.10000"}`}
        typeAssets={"BTC"}
        percentageIncrease={`+ ${'0.6'}%`}
        typeIncrease={'increase'}
      />
      </div>
    </div>
  );
};
