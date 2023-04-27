import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ModalProps = DefaultPageProps & {
  className?: string;
  title: string;
}

function Modal (props: ModalProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.mode_light_type_1_action_7} ><div className={styles.content_4} ><Text textType='Text' className={styles.text_4} >{props.title}</Text></div>
<div className={styles.action_row_single_actions_7} ><div className={styles.top_divider_6} />
<Text textType='Text' className={styles.text_7} >{'OK'}</Text></div></div></div>);
}

export default Modal;
