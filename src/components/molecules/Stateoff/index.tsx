import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type StateoffProps = DefaultPageProps & {
  className?: string;
  }

function Stateoff (props: StateoffProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_34} >{'経験'}</Text></div>);
}

export default Stateoff;
