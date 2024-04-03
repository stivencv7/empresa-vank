import React from 'react'

interface QuickActionsCards{
    icon:any,
    text:string
}

export const QuickActionsCards = ({icon,text}:QuickActionsCards) => {
  return (
    <div className='bg-yellow-400  2xl:w-[218px] h-[200px] rounded-2xl p-10 gap-6'>
        <div>
            <img src={icon} alt="" />
        </div>

        <div>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

