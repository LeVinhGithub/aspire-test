import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type BackArrowProps = DefaultPageProps & {
  className?: string;
  }

function BackArrow (props: BackArrowProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666958339633-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_1} src={assets('1666958339633-svg')} alt='Image1' /></div>);
}

export default BackArrow;
