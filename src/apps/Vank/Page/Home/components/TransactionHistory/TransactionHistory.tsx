import { CustomCircle } from '@/apps/Shared/CustomCircle/CustomCircle'
import { IconArrow } from '@/assets/IconV2/IconsSvg'
import { Link } from 'react-router-dom'

export const TransactionHistory = () => {

    const history = [
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        { name: 'Joseph Baket', date: '4 Apr 2023', amoutn: '1,420.72', typeAssect: 'USD', typeAction: 'recived' },
        
    ]

    return (
        <div className='w-[484px] 2xl:h-[23.125rem] flex flex-col gap-4  pt-2 '>
            <header className='flex justify-between w-full'>
                <h1 className='text-[#5E6061] text-xl'>Transactions</h1>
                <div>
                    <Link to={''} className='bg-[#FFED00] py-2 px-4 rounded-3xl text-sm'>view all</Link>
                </div>
            </header>
            
            <div className=' 2xl:w-[484px] 2xl:h-[335px] px-4 flex flex-col justify-between bg-[#FFFF] rounded-[16px] shadow-sm pb-4'>

                {history.map((item, index) => (
                    <div key={index} className='flex justify-between items-center py-2 border-b-[1px] '>

                        <div className='flex gap-4 items-center '>
                            <CustomCircle moreStyle='h-[50px] w-[50px]' icon={<IconArrow/>}/>
                            <div className='text-[#6A6C6A]  text-sm'>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                            </div>

                        </div>
                        <div className='flex text-[#6A6C6A]  text-sm'>
                            <p>{item.amoutn}</p>
                            <p>{item.typeAssect}</p>
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
    )
}
