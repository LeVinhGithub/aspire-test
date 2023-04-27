import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1OnProps = DefaultPageProps & {
  className?: string;
  }

function Property1On (props: Property1OnProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.ellipse_2559} />
<div className={styles.frame_42731883469} ><div className={styles.star_1168} ><Image sourceType='upload' className={styles.image_68} src={assets('1666338290723-svg')} alt='Image68' /></div>
<Text textType='Text' className={styles.text_69} >{'保存'}</Text></div></div>);
}

export default Property1On;
