import { Text } from "@components/atoms/Text";
import Property1RoundProperty2P1 from "@components/molecules/Property1RoundProperty2P1";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type JobOpeningListPopupProps = DefaultPageProps & {
  className?: string;
  }

function JobOpeningListPopup (props: JobOpeningListPopupProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189257} />
<div className={styles.dialog_16} ><div className={styles.lists_pref_one_line_text_10} ><Text textType='Text' className={styles.text_10} >{'初期設定を行いましょう'}</Text></div>
<div className={styles.frame_42731892916} ><div className={styles.frame_42731892816} ><div className={styles.btn_14} ><Text textType='Text' className={styles.text_14} >{'経歴の登録'}</Text>
<Property1RoundProperty2P1 className={styles.tag_14} active={{}} children={{}} /></div>
<div className={styles.btn_16} ><Text textType='Text' className={styles.text_14} >{'経歴の登録'}</Text>
<Property1RoundProperty2P1 className={styles.tag_14} active={{}} children={{}} /></div></div>
<ButtonActive className={styles.btn_16} children={{}} /></div></div></div>);
}

export default JobOpeningListPopup;
