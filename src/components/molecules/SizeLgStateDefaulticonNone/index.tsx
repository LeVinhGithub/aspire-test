import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SizeLgStateDefaulticonNoneProps = DefaultPageProps & {
  className?: string;
  children: any;
}

function SizeLgStateDefaulticonNone (props: SizeLgStateDefaulticonNoneProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_17} >{props.children}</Text></div>);
}

export default SizeLgStateDefaulticonNone;
