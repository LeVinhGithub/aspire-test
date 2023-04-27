import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcFilledsignboardProps = DefaultPageProps & {
  className?: string;
  }

function IcFilledsignboard (props: IcFilledsignboardProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667211072439-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_80} src={assets('1667211072439-svg')} alt='Image80' /></div>);
}

export default IcFilledsignboard;
