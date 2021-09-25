import React, { useState, useEffect, useCallback } from 'react';
import './TopSlider.scss';
import { motion, AnimatePresence } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import sliderData from './sliderData';
import { wrap } from '../../utils/wrap';


// варианты анимации, которые принимают кастомные значения
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;

/**
 * Возвращает силу свайпа
 * @param {number} offset 
 * @param {number} velocity 
 * @returns 
 */
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


const TopSlider = ({ children }) => {

  const [[page, direction], setPage] = useState([0, 0]);

  // оборачиваем, чтобы уменьшить ререндеры
  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  // автоматические переключение слайдов
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     paginate(1);
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, [page, direction, paginate]);

  // activeIndex не превышает длины массива, а начинает с 0, когда page больше длины массива
  const activeIndex = wrap(0, sliderData.length, page)


  return (
    <div className="top__slider-inner">
      <div className="top__slider" >
        <AnimatePresence initial={false} custom={direction}>
          {sliderData.map((slide, index) => activeIndex === index && <Slide
            key={page}
            slide={slide}
            direction={direction}
            paginate={paginate}
          />)}
        </AnimatePresence>
      </div>
      <Dots data={sliderData} paginate={paginate} activeIndex={activeIndex} />
    </div>

  );
};

const Slide = ({ slide, direction, paginate }) => {

  return (
    <>
      <motion.div
        drag="x"
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 50 },
          opacity: { duration: 0.8 }
        }}
        className="top__slider-item"
      >
        <StaticImage draggable="false" src="../../images/slider-img.png" className="top__slider-img" alt="images" width={703} height={815} />
        <div className="top__slider-info">
          <h2 className="top__slider-title">{slide.title}</h2>
          <p className="top__slider__text">{slide.description}</p>
        </div>
      </motion.div>
    </>
  )
}

const Dots = ({ data, activeIndex, paginate }) => {

  const clickHandler = (index) => {
    if (index === activeIndex) return
    paginate(index - activeIndex)
  }

  const variants = {
    initial: { backgroundColor: '#363838', cursor: "pointer" },
    active: { backgroundColor: '#FFEF35', cursor: "auto" }
  }

  return (
    <ul className="top__slider-dots">
      {data.map((el, index) => <li key={index} className="top__slider-dot"><motion.button
        key={index}
        initial={"initial"}
        animate={activeIndex === index ? "active" : "initial"}
        variants={variants}
        onClick={() => clickHandler(index)}
      /></li>)}
    </ul>
  )
}

export default TopSlider;