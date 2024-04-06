
import VankLogo from "@/assets/Icon/VankLogo";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IconHome } from "@/assets/IconV2/IconHome";
import { IconBalances } from "@/assets/IconV2/IconBalances";
import IconCard from "@/assets/IconV2/IconCard";
import { IconCrypto } from "@/assets/IconV2/IconCrypto";
import { IconUsers } from "@/assets/IconV2/IconUsers";
import { IconSettings } from "@/assets/IconV2/IconSettings";
import { IconLogout } from "@/assets/IconV2/IconLogout";
import { IconHelpCenter } from "@/assets/IconV2/IconHelpCenter";
export const Sidebar = ({
  className,
}: {
  className?: string;
  listLinksHeader?: any[];
  listLinksFooter?: any[];
}) => {
  
  const languages = [
    { language: "Spanish", status: false },
    { language: "English", status: false },
  ];

  const [t, i18n] = useTranslation("global");
  const [c, setC] = useState<string>("");


  const listLinksHeader = [
    {
      id: "1",
      path: "",
      icon:<IconHome/>,
      text: t("Share.Sidebar.Home"),
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
      color:false
    },
    {
      id: "2",
      path: "transactions",
      icon:  <IconBalances />,
      text: "Balances",
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    {
      id: "3",
      path: "transactions",
      icon:  <IconCard />,
      text: "Cards",
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    {
      id: "4",
      path: "transactions",
      icon: <IconCrypto />,
      text: "Crypto",
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    
    {
      id: "5",
      path: "hola",
      icon: <IconUsers/>,
      text: t("Share.Sidebar.Beneficiaries"),
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    {
      id: "5",
      path: "hola",
      icon: <IconHelpCenter/>,
      text: t("Help center"),
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
  ]

  const listLinksFooter = [
    {
      id: 1,
      path: "",
      icon: <IconSettings/>,
      className: "",
      text: "Settings",
    },
    {
      id: 2,
      path: "",
      icon:<IconLogout/>,
      className: "",
      text: "Sign Out",
    },
  ]

  return (
    <div className={className} >
      <div className=" w-[17.4375rem] h-[35.9688rem] flex  flex-col gap-y-8">
        <div className=" w-[17.4375rem] h-[107px] flex items-center justify-center">
            <VankLogo fill="#14181F" className="w-52 h-[4.4375rem]" />
        </div> 
        
        <nav className="w-[17.4375rem]  flex gap-2 flex-col items-center px-6  ">
          {listLinksHeader.map((item,index)=>(
            <li className="list-none w-[14.375rem] px-3 py-[0.625rem] text-[#5A5D5A]">
              <NavLink key={index} to={item.path} className={'flex    gap-4'}>
              <span>
                {item.icon}
              </span>
              <p>{item.text}</p>

            </NavLink>
            </li>
          ))}
        </nav>
      </div>

      <div className="w-[17.4375rem] h-[6.75rem] px-6">
       <ul>
        {listLinksFooter.map((item)=>(
          <li className=" w-[14.4375rem] h-11 px-3 py-[0.625rem]">
            <button className="flex items-center w-[7.1875rem] h-6 gap-[16px] text-[#5A5D5A]">
              <span>
                {item.icon}
              </span>
              {item.text}
            </button>
        </li>
        ))}
       </ul>
      </div>
    </div>
  );
};
