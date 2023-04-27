import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TagProps = DefaultPageProps & {
  className?: string;
  value: string;
}

function Tag (props: TagProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_57} >{props.value}</Text></div>);
}

export default Tag;
