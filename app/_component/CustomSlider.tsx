"use client"

import React, { useState, useRef, ReactNode, useEffect } from 'react';
import { PanInfo, motion } from 'framer-motion';
import NextIcon from '@/assets/icons/NextIcon';
import PreIcon from '@/assets/icons/PreIcon';

interface CustomSliderProps {
  children: ReactNode
  repeat?: number
}

function clamp(number: number, lower: number, upper: number) {
  return Math.max(lower, Math.min(number, upper));
}

function range(end: number) {
  const result = [];
  for (let i = 0; i < end; i++) {
    result.push(i);
  }
  return result;
}

const CustomSlider = (props: CustomSliderProps) => {
  const { children, repeat } = props; 
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const Dots = ({ count, active } : { count: number; active: number }) => (
    <div className="w-full flex flex-row justify-center absolute bottom-5 gap-2">
      {range(count).map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white rounded-md opacity-80 cursor-pointer"
          onClick={() => {setActive(i)}}
          initial={false}
          animate={{
            scale: active === i ? 1.5 : 1,
            opacity: active === i ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );

  useEffect(() => {
    if(repeat) {

      const interval = setInterval(() => {
        if (active < React.Children.count(children) - 1) {
          setActive((pre) => pre + 1);
        } else {
          setActive(0);
        }
      }, repeat)
      return () => {
        clearInterval(interval)
      }
    }
  }, [active, children, repeat])

  const NextSlider = () => {
    const onClickNextBtn = () => {
      if (active < React.Children.count(children) - 1) {
        setActive((pre) => pre + 1);
      } else {
        setActive(0);
      }
    };
    return (
      <p onClick={onClickNextBtn} className="absolute right-3 top-1/2 translate-y-[-50%] w-8 h-8 border-2 rounded-full p-2 cursor-pointer hover:bg-[#ff9900] duration-300">
        <NextIcon />
      </p>
    );
  };

  const PreSlider = () => {
    const onClickNextBtn = () => {
      if (active > 0) {
        setActive((pre) => pre - 1);
      } else {
        setActive(React.Children.count(children) - 1);
      }
    };
    return (
      <p onClick={onClickNextBtn} className="absolute left-3 top-1/2 translate-y-[-50%] w-8 h-8 border-2 rounded-full p-2 cursor-pointer hover:bg-[#ff9900] duration-300">
        <PreIcon />
      </p>
    );
  };

  const width = (constraintsRef.current && constraintsRef.current.offsetWidth) || 350;

  const dragEndHandler = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1;
        setActive((active) => clamp(active + direction, 0, React.Children.count(children) - 1));
    }
  };
  const dragConstraints = {
    left: -((React.Children.count(children) - 1) * width),
    right: 0,
  };
  
  return (
    <>
      <div className="overflow-hidden relative h-[600px] w-full" ref={constraintsRef}>
        <motion.div
          className="w-full flex flex-row absolute inset-0"
          onDragEnd={dragEndHandler}
          dragConstraints={dragConstraints}
          drag="x"
          animate={{
            x: -1 * active * width,
          }}
        >
          {children}
        </motion.div>

        <Dots count={React.Children.count(children)} active={active} />
        <NextSlider />
        <PreSlider />
      </div>
    </>
  );
};

export default CustomSlider;
