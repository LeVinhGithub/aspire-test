import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ChatProps = DefaultPageProps & {
  className?: string;
  }

function Chat (props: ChatProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_42731886921} ><Image sourceType='upload' className={styles.image_16} src={assets('1666942268810-png')} alt='Image16' />
<div className={styles.frame_42731886721} ><Text className={styles.text_20} >{'株式会社リクルート'}</Text>
<Text className={styles.text_21} >{'応募が完了しました'}</Text></div></div>
<div className={styles.frame_42731886824} ><Text className={styles.text_23} >{'午前 6:00'}</Text>
<div className={styles.ellipse_124} /></div></div>);
}

export default Chat;
