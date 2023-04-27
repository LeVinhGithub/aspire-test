import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinehamburgerProps = DefaultPageProps & {
  className?: string;
  }

function IcLinehamburger (props: IcLinehamburgerProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667211072438-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_78} src={assets('1667211072438-svg')} alt='Image78' /></div>);
}

export default IcLinehamburger;
