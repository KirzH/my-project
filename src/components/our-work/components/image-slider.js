import React, {useState} from 'react';
import {SliderData} from './slider-data';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import s from './image-slider.module.css';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current +1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
    <section className={s.slilder}>
        <div>
           <div> <FaArrowAltCircleLeft className={s.leftArow} onClick={prevSlide} /> </div>
           <div><FaArrowAltCircleRight className={s.rightArow} onClick={nextSlide} />  </div>
            </div>
            {SliderData.map((slide, index) => {
                return (
                    <div 
                         className={index === current ? 'slide active' : 'slide'} 
                         key={index}
                    > 
                        {index === current && (
                            <img src={slide.image} alt="fireplace" className={s.image} />
                        )}
                   </div>
         
                );
           })};
       
    </section>
);
};

export default ImageSlider;
