import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1DefaultRequiredFalseQuestionFalseFillFalseProps = DefaultPageProps & {
  className?: string;
  }

function Property1DefaultRequiredFalseQuestionFalseFillFalse (props: Property1DefaultRequiredFalseQuestionFalseFillFalseProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.text_field_title_19} ><Text textType='Text' className={styles.text_19} >{'メールアドレス'}</Text></div>
<div className={styles.assets_21} ><Text textType='Text' className={styles.text_21} >{'例：example@sample.co.jp'}</Text></div></div>);
}

export default Property1DefaultRequiredFalseQuestionFalseFillFalse;
