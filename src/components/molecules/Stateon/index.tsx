import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type StateonProps = DefaultPageProps & {
  className?: string;
  }

function Stateon (props: StateonProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_33} >{'基本情報'}</Text></div>);
}

export default Stateon;
