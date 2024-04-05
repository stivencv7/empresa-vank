import { BalancesCard } from '@/apps/Shared/BalancesCard/BalancesCard'
import { IconAccounts } from '@/assets/IconV2/IconAccounts'
import { IconCards } from '@/assets/IconV2/IconCards'
import { IconCryptoBalances } from '@/assets/IconV2/IconCryptoBalances'
import { IconDolar } from '@/assets/IconV2/IconDolar'
import React from 'react'

export const Balances = () => {
  return (
    <>
        <h1>Balances</h1>
        <div className='grid grid-cols-4 gap-[18px]'>
            <BalancesCard icon={<IconDolar/>} text={'Total Balance'} amount={`${'1,420.72'} USD`}/>
            <BalancesCard icon={<IconCards/>} text={'Total Balance'} amount={`${'1,420.72'} USD`}/>
            <BalancesCard icon={<IconCryptoBalances/>} text={'Total Balance'} amount={`${'1,420.72'} USD`}/>
            <BalancesCard icon={<IconAccounts/>} text={'Total Balance'} amount={`${'1,420.72'} USD`}/>
        </div>
    </>
  )
}


