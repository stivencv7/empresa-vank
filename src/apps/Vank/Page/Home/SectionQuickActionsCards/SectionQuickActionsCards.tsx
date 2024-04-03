import { QuickActionsCards } from '@/apps/Shared/QuickActionsCards/QuickActionsCards'
import React from 'react'

export const SectionQuickActionsCards = () => {
  return (
    <div className='grid grid-cols-6 gap-[1.125rem]'>
        <QuickActionsCards text='Send' icon={""}/>
        <QuickActionsCards text='Deposit' icon={""}/>
        <QuickActionsCards text='Convert' icon={""}/>
        <QuickActionsCards text='withdraw' icon={""}/>
        <QuickActionsCards text='Beneficaries' icon={""}/>
        <QuickActionsCards text='Beneficaries' icon={""}/>

    </div>
  )
}
