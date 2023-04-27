import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1SubProperty2NormalProps = DefaultPageProps & {
  className?: string;
  }

function Property1SubProperty2Normal (props: Property1SubProperty2NormalProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_756276} ><Text textType='Text' className={styles.text_76} >{'ヘルプ'}</Text></div></div>);
}

export default Property1SubProperty2Normal;
