import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinecheckProps = DefaultPageProps & {
  className?: string;
  }

function IcLinecheck (props: IcLinecheckProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_23} src={assets('1669547143121-png')} alt='Image23' /></div>);
}

export default IcLinecheck;
