import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinedownProps = DefaultPageProps & {
  className?: string;
  }

function IcLinedown (props: IcLinedownProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667376970526-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_40} src={assets('1667376970526-svg')} alt='Image40' /></div>);
}

export default IcLinedown;
