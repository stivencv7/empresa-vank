import homeBanner1 from '../../../../../assets/home-banner-light 1.png'
export const Banner = () => {
  return (
    <div className='2xl:w-[100%] 2xl:h-[340px] relative'>
      <label className='absolute w-[4.8125rem] bg-[#FFED00]  px-4 py-2 rounded-tl-3xl rounded-br-2xl text-[#14181F] text-sm font-bold'>Nuevo</label>
        <img src={homeBanner1} alt="" className='rounded-3xl 2xl:h-full 2xl:w-full'/>
    </div>
  )
}
