import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinerightoneProps = DefaultPageProps & {
  className?: string;
  }

function IcLinerightone (props: IcLinerightoneProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666338290713-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_65} src={assets('1666338290713-svg')} alt='Image65' /></div>);
}

export default IcLinerightone;
