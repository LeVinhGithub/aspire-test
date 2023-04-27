import { Text } from "@components/atoms/Text";
import Property1RoundProperty2P1 from "@components/molecules/Property1RoundProperty2P1";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type DialogInactiveProps = DefaultPageProps & {
  className?: string;
  }

function DialogInactive (props: DialogInactiveProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.lists_pref_one_line_text_3} ><Text textType='Text' className={styles.text_3} >{'初期設定を行いましょう'}</Text></div>
<div className={styles.frame_4273189288} ><div className={styles.btn_6} ><Text textType='Text' className={styles.text_6} >{'経歴の登録'}</Text>
<Property1RoundProperty2P1 className={styles.tag_6} /></div>
<div className={styles.btn_6} ><Text textType='Text' className={styles.text_6} >{'希望条件の登録'}</Text>
<Property1RoundProperty2P1 className={styles.tag_6} /></div></div></div>);
}

export default DialogInactive;
