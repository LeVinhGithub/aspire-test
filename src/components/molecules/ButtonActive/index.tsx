import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ButtonActiveProps = DefaultPageProps & {
  className?: string;
  children: string;
}

function ButtonActive (props: ButtonActiveProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_2} >{props.children}</Text></div>);
}

export default ButtonActive;
