import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Action2CoverFalseProps = DefaultPageProps & {
  className?: string;
  }

function Action2CoverFalse (props: Action2CoverFalseProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.lists_pref_one_line_text_25} ><Text textType='Text' className={styles.text_25} >{'この求人をオススメ求人から外しますか？'}</Text></div>
<div className={styles.frame_12930} ><Text textType='Text' className={styles.text_30} >{'この設定は全ての応募者に反映されます'}</Text></div>
<div className={styles.frame_13040} ><div className={styles.btn_36} ><Text textType='Text' className={styles.text_36} >{'キャンセル'}</Text></div>
<div className={styles.btn_40} ><Text textType='Text' className={styles.text_40} >{'オススメから外す'}</Text></div></div></div>);
}

export default Action2CoverFalse;
