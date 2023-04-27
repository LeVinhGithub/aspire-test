import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Paragraphpattern1Props = DefaultPageProps & {
  className?: string;
  }

function Paragraphpattern1 (props: Paragraphpattern1Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_56} >{'あなたと相性がよい所'}</Text></div>);
}

export default Paragraphpattern1;
