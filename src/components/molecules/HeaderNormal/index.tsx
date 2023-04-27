import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HeaderNormalProps = DefaultPageProps & {
  className?: string;
  text: string;
}

function HeaderNormal (props: HeaderNormalProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_18} src={assets('1667203870100-svg')} alt='Image18' />
<Text textType='Text' className={styles.text_19} >{props.text}</Text></div>);
}

export default HeaderNormal;
