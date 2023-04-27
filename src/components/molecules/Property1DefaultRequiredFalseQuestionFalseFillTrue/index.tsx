import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1DefaultRequiredFalseQuestionFalseFillTrueProps = DefaultPageProps & {
  className?: string;
  }

function Property1DefaultRequiredFalseQuestionFalseFillTrue (props: Property1DefaultRequiredFalseQuestionFalseFillTrueProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.text_field_title_20} ><Text textType='Text' className={styles.text_20} >{'電話番号'}</Text></div>
<div className={styles.assets_22} ><Text textType='Text' className={styles.text_22} >{'080-3423-2313'}</Text></div></div>);
}

export default Property1DefaultRequiredFalseQuestionFalseFillTrue;
