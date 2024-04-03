import React from 'react'

interface QuickActionsCards{
    icon:any;
    text:string;
    moreStyle:string;
}

export const QuickActionsCards = ({icon,text,moreStyle}:QuickActionsCards) => {
  return (
    <div className={`${moreStyle} 2xl:w-[218px] h-[200px] rounded-2xl p-10 gap-6 flex flex-col items-center `}>
        <div>
            {icon}
        </div>

        <div>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

