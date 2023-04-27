import Property1Detail from "@components/molecules/Property1Detail";
import { Text } from "@components/atoms/Text";
import SizeMdStateNormaliconNone from "@components/molecules/SizeMdStateNormaliconNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ApplicationCompletedProps = DefaultPageProps & {
  className?: string;
  }

function ApplicationCompleted (props: ApplicationCompletedProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189058} ><div className={styles.frame_4273189043} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_4273188638} ><div className={styles.frame_4273188647} ><Text textType='Text' className={styles.text_6} >{'応募が完了しました'}</Text>
<Text textType='Text' className={styles.text_7} >{'今後のやり取りはメッセージで行いましょう'}</Text></div>
<div className={styles.frame_4273188658} ><SizeMdStateNormaliconNone className={styles.btn_8} />
<SizeMdStateNormaliconNone className={styles.btn_8} /></div></div></div></div>);
}

export default ApplicationCompleted;
