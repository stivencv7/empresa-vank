import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { IconHaus } from "../../../../assets/Icon/IconHaus";
import { IconMoneyDolar } from "../../../../assets/Icon/IconMoneyDolar";
import { IconUsers } from "../../../../assets/Icon/IconUsers";
import { IconShare } from "../../../../assets/Icon/IconShare";
import { Icon } from "../../../../assets/Icon/Icon";
import { IconLanguage } from "../../../../assets/Icon/IconLanguage";
import { IconLogout } from "../../../../assets/Icon/IconLogout";
import { IconMessageInfo } from "../../../../assets/Icon/IconMessageInfo";
import { useTranslation } from "react-i18next";

export const ListLinkSidebar = ({
  className,
}: {
  className?: any;
  rounded?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  
  
}) => {
  const [t, i18n] = useTranslation("global");
  const [c, setC] = useState<string>("");

  const color=true;

  const listLinksHeader = [
    {
      id: "1",
      path: "",
      icon: <IconHaus className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'} fill={'#ffed00'}/>,
      text: t("Share.Sidebar.Home"),
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
      color:false
    },
    {
      id: "2",
      path: "transactions",
      icon: <IconMoneyDolar className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'}/>,
      text: "Balances",
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    {
      id: "3",
      path: "transactions",
      icon: <IconMoneyDolar className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'}/>,
      text: "Cards",
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    {
      id: "4",
      path: "transactions",
      icon: <IconMoneyDolar className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'}/>,
      text: "Crypto",
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },
    
    
    {
      id: "5",
      path: "hola",
      icon: <IconUsers className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'}/>,
      text: t("Share.Sidebar.Beneficiaries"),
      className: `${"text-[18px] max-2xl:text-[15px]"}`,
    },

    {/*{
      id: "5",
      path: "transactions",
      icon: <IconMoneyDolar className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'}/>,
      text: t("Share.Sidebar.Transaction"),
      className: `${"text-[16px] max-2xl:text-[15px]"}`,
    },*/}
    
    // {
    //   id: "4",
    //   path: "hola",
    //   icon: <IconShare />,
    //   text: "Share app",
    //   className: `${"text-[16px]"}`,
    // },
    // {
    //   id: "5",
    //   path: "hola",
    //   icon: <Icon />,
    //   text: t("Share.Sidebar.Accesibility"),
    //   className: `${"text-[16px]"}`,
    // },
  ];

  const listLinksFooter = [
    {
      id: 1,
      path: "",
      icon: <IconLanguage className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'} />,
      className: "",
      text: "Settings",
    },
    {
      id: 2,
      path: "",
      icon: <IconLogout className={'max-2xl:w-[18px] max-2xl:h-[16.66px]'} />,
      className: "",
      text: "Sign Out",
    },
    
  ];

  return (
    <Sidebar
    
      className={className}
    />
  );
};
