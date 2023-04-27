import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SwitcheditmodeProps = DefaultPageProps & {
  className?: string;
  }

function Switcheditmode (props: SwitcheditmodeProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.switch_button_38} ><Text className={styles.text_36} >{'スカウト送信'}</Text></div>
<div className={styles.switch_button_43} ><Text className={styles.text_43} >{'テンプレ管理'}</Text></div></div>);
}

export default Switcheditmode;
