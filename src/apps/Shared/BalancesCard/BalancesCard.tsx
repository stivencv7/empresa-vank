import React from 'react'
import { CustomCircle } from '../CustomCircle/CustomCircle'

export const BalancesCard = ({ icon, text, amount }: { icon: any, text: string, amount: string }) => {
  return (
    <div className='bg-[#F2F5F7]  2xl:min-w-[300.2496px]  h-[8.875rem] rounded-2xl py-7 px-6 flex xl:max-2xl:flex-col sm:max-lg:flex-col items-center justify-center xl:max-2xl:gap-4 2xl:gap-[24px] hover:bg-[#E3E9EE]'>

      <div className='flex  w-[12.5rem] h-[3.75rem] gap-6'>
        <CustomCircle icon={icon} moreStyle='w-[3.75rem] h-[3.75rem] max-xl:bg-w-[17.4375rem] max-2xl:bg-transparent' />

        <div className='text-[#5A5D5A]  xl:max-2xl:text-center'>
          <p>{text}</p>
          <p>{amount}</p>
        </div>
      </div>


    </div>
  )
}
