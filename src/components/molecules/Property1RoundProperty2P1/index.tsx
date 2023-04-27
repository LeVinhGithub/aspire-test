import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1RoundProperty2P1Props = DefaultPageProps & {
  className?: string;
  active: boolean;
children: any;
}

function Property1RoundProperty2P1 (props: Property1RoundProperty2P1Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_10} >{'未登録'}</Text></div>);
}

export default Property1RoundProperty2P1;
