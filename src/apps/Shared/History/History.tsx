import { useEffect, useState } from "react"
import CustomButton from "../CustomButton/CustomButton";
import { historyVankPayList } from "../../service/ServiceVankPay/ServiceHistoryVanKPay";
import { IconSend } from "@/assets/Icon/IconSend";
import './history.css'

export const History = ({ moreStyle, value, onClickBlack }: { moreStyle: any, value: any, onClickBlack: any }) => {

    const [title, setTitle] = useState('');

    const [history, setHistory] = useState([{
        nameBeneficiary: '',
        fecha: '',
        amount: '',
        asset: '',
        banco: '',
        type: ''
    }]);

    const getListHistory = () => {
        const history = historyVankPayList();
        console.log(history)
        setHistory(history);
    }

    useEffect(() => {
        if (value == 1) {
            setTitle('Deposit History')
            setHistory([])

        } else if (value == 4) {
            setTitle('VankPay History')
            getListHistory()
        }
    }, [value])

    return (
        <div className={`dark:bg-[#191E25] w-[590px] h-full   overflow-hidden  rounded-[32px] p-[36px]  ${moreStyle}`}>
            <div className="h-[73px] flex flex-col gap-[32px]">
                <div><CustomButton onclick={onClickBlack} label={'Back'} className="text-[#9D9DA2] text-[16px]" /></div>
                <h1 className="text-body">{title}</h1>
            </div>
           
            <div className="hola mt-10 w-full h-[83%] flex flex-col gap-6  overflow-y-auto pr-6">
                {
                    history.map((item) => (
                        <div className="flex gap-5  justify-between">
                            <div className="flex items-center gap-x-2">
                                <div><IconSend className={`${item.type == 'received' ? 'rotate-180' : ''}`} fill={`${item.type == 'received' ? '#5AC083' : ' #F76A6A'}`} /></div>
                                <div>
                                    <div className="text-[14px] font-normal text-body leading-[18.2px]">{item.banco}</div>
                                    <div className="text-[12px] font-normal text-[#9D9DA2]">Received</div>
                                </div>
                            </div>

                            <div className="text-end">
                                <div className="flex items-center gap-x-2 justify-end ">
                                    <div className="text-[12px] font-bold text-body leading-[15.6px]">{item.type=='received'?'+':'-'}{item.amount}</div>
                                    <div className="text-body"><p>{item.asset}</p></div>
                                </div>
                                <div className="text-[12px] font-normal text-[#9D9DA2]">{item.fecha}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
