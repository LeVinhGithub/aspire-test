import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type StatusDefaultRequiredFalseQuestionFalseFillFalseProps = DefaultPageProps & {
  className?: string;
  }

function StatusDefaultRequiredFalseQuestionFalseFillFalse (props: StatusDefaultRequiredFalseQuestionFalseFillFalseProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.text_field_title_34} ><Text className={styles.text_30} >{'FORM NAME'}</Text></div>
<div className={styles.assets_40} ><Text className={styles.text_39} >{'入力してください'}</Text></div></div>);
}

export default StatusDefaultRequiredFalseQuestionFalseFillFalse;
