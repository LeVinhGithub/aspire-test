import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SizeLgStateNormaliconNoneProps = DefaultPageProps & {
  className?: string;
  }

function SizeLgStateNormaliconNone (props: SizeLgStateNormaliconNoneProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_32} >{'検索条件を変更'}</Text></div>);
}

export default SizeLgStateNormaliconNone;
