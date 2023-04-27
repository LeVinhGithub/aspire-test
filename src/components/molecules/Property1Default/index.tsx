import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1DefaultProps = DefaultPageProps & {
  className?: string;
  }

function Property1Default (props: Property1DefaultProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text className={styles.text_72} >{'口座・クレカ名'}</Text></div>);
}

export default Property1Default;
