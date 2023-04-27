import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type LoginstateProps = DefaultPageProps & {
  className?: string;
  }

function Loginstate (props: LoginstateProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.ellipse_2630} />
<Text textType='Text' className={styles.text_38} >{'3時間前'}</Text></div>);
}

export default Loginstate;
