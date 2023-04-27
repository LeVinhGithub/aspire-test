import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcmessageProps = DefaultPageProps & {
  className?: string;
  }

function Icmessage (props: IcmessageProps): JSX.Element {
  
  
  
  
  return (<div source={undefined} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_8} src={assets('1667548295353-svg')} alt='Image8' /></div>);
}

export default Icmessage;
