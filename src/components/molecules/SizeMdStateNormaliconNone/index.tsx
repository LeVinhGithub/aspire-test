import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SizeMdStateNormaliconNoneProps = DefaultPageProps & {
  className?: string;
  }

function SizeMdStateNormaliconNone (props: SizeMdStateNormaliconNoneProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_17} >{'編集する'}</Text></div>);
}

export default SizeMdStateNormaliconNone;
