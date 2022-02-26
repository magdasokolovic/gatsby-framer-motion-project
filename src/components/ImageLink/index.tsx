import React from 'react'
import { DataType } from '../../containers/Home'
import "./style.scss"
import {motion} from "framer-motion"
import { defaultTransition } from '../../utils/transition'
import { navigate } from 'gatsby'

type Props = {
    element: DataType,
    index: number;
}
export default function ImageLink({index, element}: Props) {    
    const navigateTo = () => {
        navigate(element.slug)
    }
    
  return (
    <motion.img onClick={navigateTo} src={element.cover} alt="elemtndfjg" className="image-link-item" layoutId={`container-${index}`} transition={defaultTransition}/>
  );
}
