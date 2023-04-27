import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TestingProps = DefaultPageProps & {
  className?: string;
  name: string;
}

function Testing (props: TestingProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.custom_component_container} ${props.className}`} ><Text textType='Text' className={styles.text_1} >{props.name}</Text></div>);
}

export default Testing;
