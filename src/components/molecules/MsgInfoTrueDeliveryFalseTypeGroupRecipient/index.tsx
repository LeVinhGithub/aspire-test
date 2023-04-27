import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type MsgInfoTrueDeliveryFalseTypeGroupRecipientProps = DefaultPageProps & {
  className?: string;
  }

function MsgInfoTrueDeliveryFalseTypeGroupRecipient (props: MsgInfoTrueDeliveryFalseTypeGroupRecipientProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.message_bubbleavatar_45} ><Image sourceType='upload' className={styles.image_45} src={assets('1666942291428-png')} alt='Image45' /></div>
<div className={styles.message_send_time_54} ><div className={styles.sender_48} ><Text textType='Text' className={styles.text_48} >{'昨日 9:41'}</Text></div>
<div className={styles.bubble_tail_54} ><div className={styles.tail_52} ><div className={styles.container_52} ><Image sourceType='upload' className={styles.image_52} src={assets('1666942292583-svg')} alt='Image52' /></div></div>
<div className={styles.bubble_54} ><Text textType='Text' className={styles.text_54} >{'応募いただきありがとうございます！'}</Text></div></div></div></div>);
}

export default MsgInfoTrueDeliveryFalseTypeGroupRecipient;
