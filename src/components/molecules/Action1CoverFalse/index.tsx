import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Action1CoverFalseProps = DefaultPageProps & {
  className?: string;
  }

function Action1CoverFalse (props: Action1CoverFalseProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.lists_pref_one_line_text_77} ><Text textType='Text' className={styles.text_77} >{'Title'}</Text></div>
<div className={styles.frame_12982} ><Text textType='Text' className={styles.text_82} >{'The backups created with this functionality may contain some sensitive data.'}</Text></div>
<div className={styles.frame_13087} ><div className={styles.btn_87} ><Text textType='Text' className={styles.text_87} >{'OK'}</Text></div></div></div>);
}

export default Action1CoverFalse;
