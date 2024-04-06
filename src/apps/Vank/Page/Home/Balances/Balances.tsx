import { BalancesCard } from '@/apps/Shared/BalancesCard/BalancesCard'
import { IconAccounts,IconCards,IconCryptoBalances,IconDolar } from '@/assets/IconV2/IconsSvg'

export const Balances = () => {
  return (
    <>
        <h1 className='text-[#5E6061] text-xl'>Balances</h1>
        <div className='grid grid-cols-4 gap-[30px] text-[18px]'>
            <BalancesCard icon={<IconDolar/>} text={'Total Balance'} amount={`${'1,420.72'} USD`}/>
            <BalancesCard icon={<IconCards/>} text={'Cards'} amount={`${'1,420.72'} USD`}/>
            <BalancesCard icon={<IconCryptoBalances/>} text={'Crypto'} amount={`${'1,420.72'} USD`}/>
            <BalancesCard icon={<IconAccounts/>} text={'Account'} amount={`${'1,420.72'} USD`}/>
        </div>
    </>
  )
}


