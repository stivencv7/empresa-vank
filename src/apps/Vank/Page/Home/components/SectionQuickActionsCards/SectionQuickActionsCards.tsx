import { QuickActionsCards } from '@/apps/Shared/QuickActionsCards/QuickActionsCards'
import { IconAddActions,IconBeneficiaries,IconConvert,IconDeposit,IconSend,IconWithdraw} from '@/assets/IconV2/IconsSvg'

import { useState } from 'react'

export const SectionQuickActionsCards = () => {
  const [stroke,setStroke]=useState(0)
  
  return (
    <div className='grid grid-cols-6 gap-[30px]'>
        <QuickActionsCards onMouseEnter={()=>setStroke(1)} onMouseLeave={()=>setStroke(0)} text='Send' icon={<IconSend className='max-2xl:w-14' stroke={stroke==1?'#FFED00':'#191E25'}/>} moreStyle='quickActionsCards group'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(2)} onMouseLeave={()=>setStroke(0)} text='Deposit' icon={<IconDeposit className='max-2xl:w-14' stroke={stroke==2?'#FFED00':'#191E25'} />} moreStyle='quickActionsCards group'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(3)} onMouseLeave={()=>setStroke(0)} text='Convert' icon={<IconConvert className='max-2xl:w-14' stroke={stroke==3?'#FFED00':'#191E25'}/>} moreStyle='quickActionsCards group'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(4)} onMouseLeave={()=>setStroke(0)} text='withdraw' icon={<IconWithdraw className='max-2xl:w-14' stroke={stroke==4?'#FFED00':'#191E25'}/>} moreStyle='quickActionsCards group'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(5)} onMouseLeave={()=>setStroke(0)} text='Beneficaries' icon={<IconBeneficiaries className='max-2xl:w-14' stroke={stroke==5?'#FFED00':'#191E25'}/>} moreStyle='quickActionsCards group'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(6)} onMouseLeave={()=>setStroke(0)} text='Add actions' icon={<IconAddActions className='max-2xl:w-14' fill={stroke==6?'#F2F5F7':'#E3E9EE'} stroke={stroke==6?'#191E25':'#5E6061'}/>} moreStyle='bg-[#F2F5F7]  hover:bg-[#E3E9EE]'/>
    </div>
  )
}
