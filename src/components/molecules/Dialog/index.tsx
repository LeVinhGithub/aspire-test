import { Text } from "@components/atoms/Text";
import Property1RoundProperty2P1 from "@components/molecules/Property1RoundProperty2P1";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type DialogProps = DefaultPageProps & {
  className?: string;
  }

function Dialog (props: DialogProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.lists_pref_one_line_text_3} ><Text textType='Text' className={styles.text_3} >{'初期設定を行いましょう'}</Text></div>
<div className={styles.frame_4273189299} ><div className={styles.frame_4273189289} ><div className={styles.btn_7} ><Text textType='Text' className={styles.text_7} >{'経歴の登録'}</Text>
<Property1RoundProperty2P1 className={styles.tag_7} /></div>
<div className={styles.btn_9} ><Text textType='Text' className={styles.text_7} >{'経歴の登録'}</Text>
<Property1RoundProperty2P1 className={styles.tag_7} /></div></div>
<ButtonActive className={styles.btn_9} /></div></div>);
}

export default Dialog;
