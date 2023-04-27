import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Paragraphpattern2Props = DefaultPageProps & {
  className?: string;
  marginTop: number;
label: string;
value: string;
}

function Paragraphpattern2 (props: Paragraphpattern2Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_15} >{props.label}</Text>
<Text textType='Text' className={styles.text_20} >{props.value}</Text></div>);
}

export default Paragraphpattern2;
