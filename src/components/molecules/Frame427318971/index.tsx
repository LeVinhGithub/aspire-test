import { Text } from "@components/atoms/Text";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Frame427318971Props = DefaultPageProps & {
  className?: string;
  }

function Frame427318971 (props: Frame427318971Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.paragraphpattern_23} ><Text textType='Text' className={styles.text_3} >{'評価メモはありません'}</Text></div>
<SizeLgStateDefaulticonNone className={styles.btn_3} children={{}} /></div>);
}

export default Frame427318971;
