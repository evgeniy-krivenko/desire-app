import React, { useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { motion, useMotionValue } from "framer-motion";
import './SliderContent.scss';
import usePrevious from '../../../../hooks/usePrevious';

const SliderContent = ({ sliderData, activeIndex }) => {

  const x = useMotionValue(0);

  useEffect(() => {
    console.log(x.current)
  }, [x.current]);


  const variants = {
    hiddenLeft: { x: "200%", opacity: 0 },
    hiddenRight: { x: "-200%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
  }

  const howAnimate = (index) => {
    const diff = activeIndex - index;
    if (activeIndex === index) {
      return "visible"
    }
    if (diff >= 1) {
      return "hiddenRight"
    }
    if (diff <= -1) {
      return "hiddenLeft"
    }
  }

  function onPan(event, info) {
    console.log(info.delta.x)

  }

  return (
    <>
      {
        sliderData.map((slide, index) => {


          return (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              draggable="true"
              onPan={onPan}
              variants={variants}
              initial={'hiddenLeft'}
              animate={howAnimate(index)}
              transition={{ ease: "easeIn", duration: 1 }}
              className="top__slider-item"
              key={index}
            >
              <StaticImage draggable="false" src="../../../../images/slider-img.png" className="top__slider-img" alt="images" width="703" height="815" />
              <div className="top__slider-info">
                <h2 className="top__slider-title">{slide.title}</h2>
                <p className="top__slider__text">{slide.description}</p>
              </div>
            </motion.div>
          )
        })
      }
    </>
  );
};

export default SliderContent;