import React from 'react';
import ImageSlider from './components/image-slider';
import {SliderData} from './components/slider-data';

import './our-work.css';

const OurWork = () => {
    return (
      <div className="boxWork" id="ourWork">
        <ImageSlider slides={SliderData} />
      </div>
    );
};

export default OurWork;