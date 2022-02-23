import React, { useState, useEffect, useCallback } from 'react';
import './Slider.scss';
import { arrayCreator } from '../../utils/massiveCreator';
import { Dots } from '../TopSlider/TopSlider';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from '../../utils/wrap';


// варианты анимации, которые принимают кастомные значения
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1800 : -1800,
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
      x: direction < 0 ? 1800 : -1800,
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

const Slider = ({ slideToShow, className, children }) => {

  const [[page, direction], setPage] = useState([0, 0]);

  // оборачиваем, чтобы уменьшить ререндеры
  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  const chunkCount = Math.ceil(children.length / slideToShow)

  const childrenChunk = arrayCreator(children, slideToShow)

  const activeIndex = wrap(0, childrenChunk.length, page)

  const dotsArray = new Array(chunkCount)


  return (
    <>
      <div >
        <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
          <motion.div
            key={page}
            className={className}
            drag="x"
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            layout
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
          >
            {childrenChunk[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <Dots data={dotsArray.fill(0)} activeIndex={activeIndex} paginate={paginate} />
    </>
  );
};

export default Slider;