import React from 'react'
import { CustomCircle } from '../CustomCircle/CustomCircle'

export const BalancesCard = ({icon,text,amount}:{icon:any,text:string,amount:string}) => {
  return (
    <div className='bg-[#F2F5F7]  2xl:min-w-[20.7969rem]  overflow-hidden overflow-y-hidden  h-[9.375rem] rounded-2xl py-7 px-6 flex xl:max-2xl:flex-col sm:max-lg:flex-col items-center justify-center gap-4 hover:bg-[#E3E9EE]'>
      <CustomCircle  icon={icon} moreStyle='w-[3.75rem] h-[3.75rem] max-xl:bg-w-[17.4375rem] max-2xl:bg-transparent'/>
          
       <div className='text-[#5A5D5A]'>
            <p>{text}</p>
            <p>{amount}</p>
       </div>
    </div>
  )
}
