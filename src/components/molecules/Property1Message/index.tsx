import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1MessageProps = DefaultPageProps & {
  className?: string;
  }

function Property1Message (props: Property1MessageProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_33} src={assets('1666942291423-svg')} alt='Image33' />
<div className={styles.frame_42731887042} ><Image sourceType='upload' className={styles.image_37} src={assets('1666942291450-svg')} alt='Image37' />
<div className={styles.frame_42731887142} ><Image sourceType='upload' className={styles.image_40} src={assets('1666942291457-png')} alt='Image40' />
<Text textType='Text' className={styles.text_42} >{'株式会社リクルート'}</Text></div></div></div>);
}

export default Property1Message;
