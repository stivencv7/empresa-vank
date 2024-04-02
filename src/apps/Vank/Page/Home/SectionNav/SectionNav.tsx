import { useEffect, useState } from "react";
import { IconEye } from "../../../../../assets/Icon/IconEye";
import "./SectionNavStyle.css";
import { EyeHidden } from "@/assets/Icon/EyeHidden";
export const SectionNav = ({
  onclickResume,
  onclickAccounts,
  onclickCards,
  onClickWallets,
  moreStyle,
  value,
}: {
  onclickResume?: any;
  onclickAccounts?: any;
  onclickCards?: any;
  onClickWallets?: any;
  moreStyle?: any;
  value?: any;
}) => {

  //lista con los nombres y acciones de cada seccion del nav de home
  const [items, setItems] = useState([
    { id: 1, text: "Resume", active: true, action: onclickResume },
    { id: 2, text: "Account", action: onclickAccounts },
    { id: 3, text: "Card", action: onclickCards },
    { id: 4, text: "Crypto", action: onClickWallets },
  ]);

  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    changeActiveNavItem((value - 1))
  }, [value])

  const changeActiveNavItem = (index) => {
    const newItems = items.map((item, i) => ({
      ...item,
      active: i === index, // Establece el estado activo solo en el índice seleccionado
    }));
    setItems(newItems);
  };

  return (
    <div className={`w-full flex justify-between 2xl:h-[62px]  ${moreStyle} `}>
      <div className="nav-container w-[338px] flex h-[25px] xl:max-2xl:w-[60%]  justify-between text-[#A1A1A1]">
        {items.map((item, i) => (
          <div
            className={`nav-item  item-${i} ${item.active
                ? "active font-[700] border-b-[px] relative "
                : "font-normal "
              }`}
            onMouseUp={() => changeActiveNavItem(i)}
          >
            <button
              className="nav-item-text  leading-[20.8px]"
              onClick={item.action}
            >
              {item.text}
            </button>
          </div>
        ))}
        <div className="nav-item-highlighter " />
      </div>

      <div className=" text-body  relative  h-full flex flex-col justify-between">
        <span className="gap-1  font-normal leading-[20.8px] w-[100%] flex flex-row items-center mt-1 justify-end">
          {visible?'Total balance':'Show balance'}
          
          {visible ? <IconEye onClick={() => setVisible(visible ? false : true)} className={'w-[22px] h-[22px] cursor-pointer'}/> : <EyeHidden className={'cursor-pointer w-[22px] h-[22px] '} onClick={() => setVisible(visible ? false : true)} />}
        </span>
        <div className={`${!visible && 'opacity-0'}`}>
          <h1 className={`text-[22px] font-[700] leading-[20.8px] gap-1 w-full  h-auto  relative    flex items-center justify-center ${visible?'':'font-normal'}`}>
            <span className="font-normal h-full text-[22px]"> <span className="font-sanspp">$</span> {" "}</span> {visible ? '32.880.60' : '******'}<span className="font-normal  text-[21px] ">{" "}USD</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
