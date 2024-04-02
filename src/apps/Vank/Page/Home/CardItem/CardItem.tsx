import { ArrowIncrease } from "@/assets/Icon/ArrowIncrease";

export const CardItem = ({
  image,
  text,
  amount,
  subtext,
  moreStyle,
  typeAssets,
  percentageIncrease,
  typeIncrease
}: {
  image?: any;
  text?: any;
  amount?: any;
  subtext?: any;
  moreStyle?: any;
  typeAssets?: any
  percentageIncrease?: any
  typeIncrease?: any

}) => {
  return (
    <div
      className={`card flex bg-[#3E4347] justify-between hover:bg-[#5E6061] cursor-pointer 2xl:pl-[8px] 2xl:pr-[8px] 2xl:py-[6px] rounded-[41px] items-center 2xl:h-[46px]  max-2xl:h-[42px] max-2xl:py-[6px] max-2xl:pr-[12px] max-2xl:pl-[8px]  max-sm:h-[46px] max-lg:h-[46px]  ${moreStyle}`}
    >
      <div className="flex items-center  w-[526px] hidden-[36px] justify-between">
        <div className="flex gap-[10px] h-[36px]  items-center">
          <img
            src={image}
            alt=""
            className="item-card-img 2xl:w-[36px] 2xl:h-[36px] xl:max-2xl:h-[30px] xl:max-2xl:w-[31px] rounded-full sm:h-[36px] sm:w-[36px]"
          />

          <span
            className={`flex  2xl:flex-col   justify-center xl:flex-row xl:gap-[8px] 2xl:gap-0 ${subtext ? "mt-1" : ""
              } `}
          >
            <p className=" font-bold text-[14px] leading-[18.2px]"> {text}</p>
            <p className="text-[12px] font-normal  leading-[18.2px] relative 2xl:-top-1 sub-text-crypto xl:top-0 ">
              {subtext}
            </p>
          </span>
        </div>

        <div className=" flex flex-col items-end ">
          <div className={`font-normal  leading-[20.8px] flex gap-x-1  ${subtext && 'mt-1'}`}>
            <p className="font-bold text-[14px]">{amount}</p>
            <span className="text-[13.72px] text-[gray] leading-1">{typeAssets}</span>
          </div>
          {subtext &&
            <div className={`relative text-[12px] 2xl:-top-1 ${typeIncrease == 'increase' ? 'text-[#8EDCAD]' : 'text-[#DC8E8E]'}`}>
              <div className="flex items-center gap-x-1 ">
                <p className="">
                  {percentageIncrease}
                </p>
                {
                  typeIncrease ?
                    <ArrowIncrease stroke={'#8EDCAD'} className={''} />
                    :
                    <ArrowIncrease stroke={'#DC8E8E'} className={'rotate-90'} />
                }

              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
