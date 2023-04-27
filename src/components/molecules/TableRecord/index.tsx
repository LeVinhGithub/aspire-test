import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TableRecordProps = DefaultPageProps & {
  className?: string;
  }

function TableRecord (props: TableRecordProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.container_49} ><div className={styles.text_area_49} ><div className={styles.frame_777929} ><Text textType='Text' className={styles.text_29} >{'掲載画像'}</Text></div>
<div className={styles.frame_42731887733} ><Text textType='Text' className={styles.text_29} >{'ステータス'}</Text></div>
<div className={styles.frame_763637} ><Text textType='Text' className={styles.text_37} >{'更新日'}</Text></div>
<div className={styles.frame_763741} ><Text textType='Text' className={styles.text_37} >{'タイトル'}</Text></div>
<div className={styles.frame_42731888043} ><Text textType='Text' className={styles.text_37} >{'タイトル'}</Text></div>
<div className={styles.frame_42731887845} ><Text textType='Text' className={styles.text_37} >{'PV'}</Text></div>
<div className={styles.frame_42731887947} ><Text textType='Text' className={styles.text_37} >{'エントリー'}</Text></div>
<div className={styles.frame_42731887845} ><Text textType='Text' className={styles.text_49} >{'選択'}</Text></div></div></div>
<div className={styles.line_2150} /></div>);
}

export default TableRecord;
