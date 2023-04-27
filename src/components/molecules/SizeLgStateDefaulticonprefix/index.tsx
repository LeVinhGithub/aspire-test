import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SizeLgStateDefaulticonprefixProps = DefaultPageProps & {
  className?: string;
  }

function SizeLgStateDefaulticonprefix (props: SizeLgStateDefaulticonprefixProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_42} src={assets('1667376970534-svg')} alt='Image42' />
<Text textType='Text' className={styles.text_46} >{'新しい募集を作成'}</Text></div>);
}

export default SizeLgStateDefaulticonprefix;
