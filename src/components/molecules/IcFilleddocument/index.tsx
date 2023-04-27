import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcFilleddocumentProps = DefaultPageProps & {
  className?: string;
  }

function IcFilleddocument (props: IcFilleddocumentProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666942291420-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_32} src={assets('1666942291420-svg')} alt='Image32' /></div>);
}

export default IcFilleddocument;
