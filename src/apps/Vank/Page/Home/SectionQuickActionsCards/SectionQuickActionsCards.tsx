import { QuickActionsCards } from '@/apps/Shared/QuickActionsCards/QuickActionsCards'
import { IconAddActions } from '@/assets/IconV2/IconAddActions'
import { IconBeneficiaries } from '@/assets/IconV2/IconBeneficiaries'
import { IconConvert } from '@/assets/IconV2/IconConvert'
import { IconDeposit } from '@/assets/IconV2/IconDeposit'
import { IconSend } from '@/assets/IconV2/IconSend'
import { IconWithdraw } from '@/assets/IconV2/IconWithdraw'
import { useState } from 'react'

export const SectionQuickActionsCards = () => {
  const [stroke,setStroke]=useState(0)
  
  return (
    <div className='grid grid-cols-6 gap-[1.125rem]'>
        <QuickActionsCards onMouseEnter={()=>setStroke(1)} onMouseLeave={()=>setStroke(0)} text='Send' icon={<IconSend className='' stroke={stroke==1?'#FFED00':'#191E25'}/>} moreStyle='bg-[#FFED00] hover:bg-[#191E25] group hover:text-[#FFED00]'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(2)} onMouseLeave={()=>setStroke(0)} text='Deposit' icon={<IconDeposit className='' stroke={stroke==2?'#FFED00':'#191E25'} />} moreStyle='bg-[#FFED00] hover:bg-[#191E25] hover:text-[#FFED00]'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(3)} onMouseLeave={()=>setStroke(0)} text='Convert' icon={<IconConvert className='' stroke={stroke==3?'#FFED00':'#191E25'}/>} moreStyle='bg-[#FFED00] hover:bg-[#191E25] hover:text-[#FFED00]'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(4)} onMouseLeave={()=>setStroke(0)} text='withdraw' icon={<IconWithdraw className='' stroke={stroke==4?'#FFED00':'#191E25'}/>} moreStyle='bg-[#FFED00] hover:bg-[#191E25] hover:text-[#FFED00]'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(5)} onMouseLeave={()=>setStroke(0)} text='Beneficaries' icon={<IconBeneficiaries className='' stroke={stroke==5?'#FFED00':'#191E25'}/>} moreStyle='bg-[#FFED00] hover:bg-[#191E25] hover:text-[#FFED00]'/>
        <QuickActionsCards onMouseEnter={()=>setStroke(6)} onMouseLeave={()=>setStroke(0)} text='Add actions' icon={<IconAddActions className='' fill={stroke==6?'#F2F5F7':'#E3E9EE'} stroke={stroke==6?'#191E25':'#5E6061'}/>} moreStyle='bg-[#F2F5F7]  hover:bg-[#E3E9EE]'/>
    </div>
  )
}
