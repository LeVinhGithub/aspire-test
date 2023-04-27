import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type DividerProps = DefaultPageProps & {
  className?: string;
  }

function Divider (props: DividerProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666338290713-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_64} src={assets('1666338290713-svg')} alt='Image64' /></div>);
}

export default Divider;
