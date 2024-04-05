import { CustomCircle } from '@/apps/Shared/CustomCircle/CustomCircle'
import { ArrowIncrease } from '@/assets/Icon/ArrowIncrease'
import { IconArrow } from '@/assets/IconV2/IconArrow'
import React from 'react'
import { Link } from 'react-router-dom'

export const TransactionHistory = () => {

    const history = [
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' }
    ]

    return (
        <div className='w-[617px] flex flex-col gap-4'>
            <header className='flex justify-between w-full'>
                <h1>Transactions</h1>
                <div>
                    <Link to={''} className='bg-[#FFED00] py-2 px-4 rounded-3xl text-sm'>view all</Link>
                </div>
            </header>
            
            <div className=' w-[617px] h-[320px] px-4'>

                {history.map((item, index) => (
                    <div key={index} className='flex justify-between items-center py-2 '>

                        <div className='flex gap-4 items-center'>
                            <CustomCircle moreStyle='h-[50px] w-[50px]' icon={<IconArrow/>}/>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                            </div>

                        </div>
                        <div className='flex'>
                            <p>{item.amoutn}</p>
                            <p>{item.typeAssect}</p>
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
    )
}
