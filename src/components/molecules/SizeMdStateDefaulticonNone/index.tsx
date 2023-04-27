import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SizeMdStateDefaulticonNoneProps = DefaultPageProps & {
  className?: string;
  }

function SizeMdStateDefaulticonNone (props: SizeMdStateDefaulticonNoneProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text className={styles.text_74} >{'本人認証を行う'}</Text></div>);
}

export default SizeMdStateDefaulticonNone;
