import { Text } from "@components/atoms/Text";
import SizeMdStateNormaliconNone from "@components/molecules/SizeMdStateNormaliconNone";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import StateDefaultPostIconTrueTagFalsePreIconFalse from "@components/molecules/StateDefaultPostIconTrueTagFalsePreIconFalse";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ApplicationConfirmationProps = DefaultPageProps & {
  className?: string;
  }

function ApplicationConfirmation (props: ApplicationConfirmationProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_4273188603} ><Text textType='Text' className={styles.text_3} >{'あなたの経歴'}</Text>
<SizeMdStateNormaliconNone className={styles.btn_1} /></div>
<div className={styles.text_field_4} ><TextFieldTitle className={styles.text_field_ui_1} />
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_1} /></div></div>);
}

export default ApplicationConfirmation;
