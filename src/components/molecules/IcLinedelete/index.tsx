import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinedeleteProps = DefaultPageProps & {
  className?: string;
  }

function IcLinedelete (props: IcLinedeleteProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667197270156-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_19} src={assets('1667197270156-svg')} alt='Image19' /></div>);
}

export default IcLinedelete;
