import React from 'react'

interface QuickActionsCards{
    icon:any;
    text:string;
    moreStyle:string;
    onMouseEnter:any,
    onMouseLeave:any
    
}

export const QuickActionsCards = ({icon,text,moreStyle,onMouseEnter,onMouseLeave}:QuickActionsCards) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${moreStyle} cursor-pointer relative overflow-hidden 2xl:w-[235px] 2xl:h-[180px] 2xl:text-lg rounded-2xl p-10 gap-6 flex flex-col items-center`}>
        <div className=''>
            {icon}
        </div>

        <div className='absolute bottom-5  '>
            <p className='leading-6 font-bold'>{text}</p>
        </div>
      
    </div>
  )
}

