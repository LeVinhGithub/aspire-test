import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinesearchProps = DefaultPageProps & {
  className?: string;
  }

function IcLinesearch (props: IcLinesearchProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_20} src={assets('1667197270159-svg')} alt='Image20' /></div>);
}

export default IcLinesearch;
