import { useEffect, useState } from "react";

import imgBanner1 from '../../../../../../assets/img/imgsBanner/banner-1.png'
import imgBanner2 from '../../../../../../assets/img/imgsBanner/banner-2.png'
import imgBanner3 from '../../../../../../assets/img/imgsBanner/banner-3.png'
import imgBanner4 from '../../../../../../assets/img/imgsBanner/banner-4-nobutton.png'
import imgBanner5 from '../../../../../../assets/img/imgsBanner/banner-5-nobutton.png'

import './styles.css'
export const Banner = () => {
  
  const images = [imgBanner1, imgBanner2, imgBanner3,imgBanner4,imgBanner5];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a un slide específico
  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  // Efecto para desplazar automáticamente
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className='w-full 2xl:h-[21.25rem] relative bg-[#FCFCFD]'>

      
      {/* <img src={''} alt="" className='rounded-3xl 2xl:h-full 2xl:w-full'/> */}
      <div className="carousel">
      <label className='absolute z-50 w-[4.8125rem] bg-[#FFED00]  px-4 py-2 rounded-tl-3xl rounded-br-2xl text-[#14181F] text-sm font-bold'>Nuevo</label>
        <div className="slides">
      
          {images.map((image, index) => (
            <div
              key={index}
              className={index === currentIndex ? 'slide active' : 'slide'}
            >
              <img src={image} alt={`Slide ${index}`} className='h-full  shadow-xl rounded-2xl' />
            </div>
          ))}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'dot active' : 'dot'}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>

        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>

        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

    </div>
  )
}
