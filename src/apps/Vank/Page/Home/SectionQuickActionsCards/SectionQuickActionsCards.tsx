import { QuickActionsCards } from '@/apps/Shared/QuickActionsCards/QuickActionsCards'
import { IconBeneficiaries } from '@/assets/IconV2/IconBeneficiaries'
import { IconConvert } from '@/assets/IconV2/IconConvert'
import { IconDeposit } from '@/assets/IconV2/IconDeposit'
import { IconSend } from '@/assets/IconV2/IconSend'
import { IconWithdraw } from '@/assets/IconV2/IconWithdraw'

export const SectionQuickActionsCards = () => {
  return (
    <div className='grid grid-cols-6 gap-[1.125rem]'>
       

        <QuickActionsCards text='Send' icon={<IconSend/>} moreStyle='bg-[#FFED00]'/>
        <QuickActionsCards text='Deposit' icon={<IconDeposit/>} moreStyle='bg-[#FFED00]'/>
        <QuickActionsCards text='Convert' icon={<IconConvert/>} moreStyle='bg-[#FFED00]'/>
        <QuickActionsCards text='withdraw' icon={<IconWithdraw/>} moreStyle='bg-[#FFED00]'/>
        <QuickActionsCards text='Beneficaries' icon={<IconBeneficiaries/>} moreStyle='bg-[#FFED00]'/>
        <QuickActionsCards text='Beneficaries' icon={""} moreStyle='bg-[#F2F5F7]'/>

    </div>
  )
}
