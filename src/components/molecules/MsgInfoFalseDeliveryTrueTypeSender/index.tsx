import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type MsgInfoFalseDeliveryTrueTypeSenderProps = DefaultPageProps & {
  className?: string;
  }

function MsgInfoFalseDeliveryTrueTypeSender (props: MsgInfoFalseDeliveryTrueTypeSenderProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.message_send_time_30} ><div className={styles.bubble_tail_30} ><div className={styles.bubble_30} ><Text className={styles.text_30} >{'お返事ありがとうございます！！！'}</Text></div></div></div>
<Text className={styles.text_31} >{'既読 10:02'}</Text></div>);
}

export default MsgInfoFalseDeliveryTrueTypeSender;
