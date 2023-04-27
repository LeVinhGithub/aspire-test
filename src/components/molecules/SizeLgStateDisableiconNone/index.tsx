import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SizeLgStateDisableiconNoneProps = DefaultPageProps & {
  className?: string;
  }

function SizeLgStateDisableiconNone (props: SizeLgStateDisableiconNoneProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text className={styles.text_22} >{'テキスト'}</Text></div>);
}

export default SizeLgStateDisableiconNone;
