import IcTwotoneclip from "@components/molecules/IcTwotoneclip";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type FileProps = DefaultPageProps & {
  className?: string;
  }

function File (props: FileProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><IcTwotoneclip className={styles.ic_twotoneclip_1} />
<div className={styles.frame_4273188934} ><Text textType='Text' className={styles.text_3} >{'小田履歴書.docx'}</Text>
<Text textType='Text' className={styles.text_4} >{'2022/09/14 23:33'}</Text></div></div>);
}

export default File;
