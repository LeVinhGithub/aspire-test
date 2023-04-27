import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLineArrowleftProps = DefaultPageProps & {
  className?: string;
  }

function IcLineArrowleft (props: IcLineArrowleftProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667376673159-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_41} src={assets('1667376673159-svg')} alt='Image41' /></div>);
}

export default IcLineArrowleft;
