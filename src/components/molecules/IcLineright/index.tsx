import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinerightProps = DefaultPageProps & {
  className?: string;
  }

function IcLineright (props: IcLinerightProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667376625209-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_48} src={assets('1667376625209-svg')} alt='Image48' /></div>);
}

export default IcLineright;
