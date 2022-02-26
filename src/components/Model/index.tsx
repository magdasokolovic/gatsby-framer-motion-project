import React, { useEffect } from 'react'
import { DataType } from '../../containers/Home'
import { motion, Variants, useAnimation } from "framer-motion";
import './style.scss'
import { defaultTransition } from '../../utils/transition';
import HomeButton from './HomeButton';
import Loader from '../Loader';

type Props = {
    pageContext: DataType
}

const variants:Variants = {
    initial: {
        opacity: 0, 
        y: 100
    },
    animate: {
        opacity: 1, 
        y: 0
    }
}
export default function Model({ pageContext}: Props) {
  const control = useAnimation()
  useEffect(()=> {
    setTimeout(()=>{
      control.start({
        opacity: 0, 
        transition: defaultTransition
      })
    }, 2000)
  })
  return (
    <>
    <Loader title={pageContext.title} loaderControls={control}/>
    <HomeButton/>
      <div className="model-container">
        <div className="image-wrapper">
          <motion.img
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            src={pageContext.cover}
            alt={pageContext.title}
            transition={{defaultTransition, delay: 2}}
          />
        </div>
      </div>
    </>
  );
}
