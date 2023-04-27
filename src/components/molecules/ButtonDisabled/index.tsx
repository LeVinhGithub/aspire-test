import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ButtonDisabledProps = DefaultPageProps & {
  className?: string;
  fullwidth: boolean;
}

function ButtonDisabled (props: ButtonDisabledProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_18} >{'はじめる'}</Text></div>);
}

export default ButtonDisabled;
