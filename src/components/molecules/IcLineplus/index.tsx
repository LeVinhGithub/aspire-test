import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLineplusProps = DefaultPageProps & {
  className?: string;
  }

function IcLineplus (props: IcLineplusProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666942201452-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_91} src={assets('1666942201452-svg')} alt='Image91' /></div>);
}

export default IcLineplus;
