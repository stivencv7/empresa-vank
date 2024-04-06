import React from 'react'

export const CustomCircle = ({icon,moreStyle}:{icon:any,moreStyle:string}) => {
  return (
    <div  className={`${moreStyle}  rounded-full flex gap-10 bg-[#FFED00] items-center justify-center`}>
      {icon}
    </div>
  )
}
//w-[3.125rem] h-[3.125rem]