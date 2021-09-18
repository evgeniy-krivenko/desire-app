import React, { useState, useEffect } from 'react';
import './TopSlider.scss';

import sliderData from './sliderData';
import SliderContent from './components/SliderContent/SliderContent';


const TopSlider = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const len = sliderData.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const data = sliderData;

  const next = () => {
    if (activeIndex === len) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }

  }

  const prev = () => {
    if (activeIndex === 0) {
      setActiveIndex(len)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }

  return (
    <div className="top__slider-inner">
      <div className="top__slider" >
        <SliderContent sliderData={data} activeIndex={activeIndex} />
      </div>
      <button className="top__slider-btn" onClick={prev}>{"PREV"}</button>
      <button className="top__slider-btn" onClick={next}>{"NEXT"}</button>
    </div>

  );
};

export default TopSlider;