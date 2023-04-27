import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TableProps = DefaultPageProps & {
  className?: string;
  title: string;
description: string;
}

function Table (props: TableProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.th_70} ><Text textType='Text' className={styles.text_70} >{props.title}</Text></div>
<div className={styles.td_73} ><Text textType='Text' className={styles.text_73} >{props.description}</Text></div></div>);
}

export default Table;
