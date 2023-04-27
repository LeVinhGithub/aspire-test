import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1ActiveProps = DefaultPageProps & {
  className?: string;
  }

function Property1Active (props: Property1ActiveProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_40} >{'この条件で検索'}</Text></div>);
}

export default Property1Active;
