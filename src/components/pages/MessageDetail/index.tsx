import SafariStatusbar from "@components/molecules/SafariStatusbar";
import Property1Message from "@components/molecules/Property1Message";
import { Text } from "@components/atoms/Text";
import MsgInfoTrueDeliveryFalseTypeGroupRecipient from "@components/molecules/MsgInfoTrueDeliveryFalseTypeGroupRecipient";
import MsgInfoFalseDeliveryTrueTypeSender from "@components/molecules/MsgInfoFalseDeliveryTrueTypeSender";
import IcFilleddocument from "@components/molecules/IcFilleddocument";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type MessageDetailProps = DefaultPageProps & {
  className?: string;
  }

function MessageDetail (props: MessageDetailProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731891711} ><div className={styles.frame_4273189163} ><SafariStatusbar className={styles.safari_statusbar_3} children={{}} />
<Property1Message className={styles.searchbar_3} /></div>
<div className={styles.frame_42731891211} ><div className={styles.frame_4273189139} ><div className={styles.frame_4273188759} ><Text textType='Text' className={styles.text_7} >{'応募が完了しました'}</Text>
<div className={styles.frame_4273188769} ><Text textType='Text' className={styles.text_9} >{'人気Youtuberと一緒にエンタメ業界を盛り上げる！正社員募集！'}</Text></div></div></div>
<div className={styles.frame_42731891410} ><MsgInfoTrueDeliveryFalseTypeGroupRecipient className={styles.message_bubble_10} /></div>
<div className={styles.frame_42731891511} ><MsgInfoFalseDeliveryTrueTypeSender className={styles.message_bubble_11} /></div></div></div>
<div className={styles.inputbar_19} ><IcFilleddocument className={styles.ic_filleddocument_12} />
<div className={styles.form_19} ><div className={styles.frame_62472116} ><Text textType='Text' className={styles.text_15} >{'|'}</Text>
<Text textType='Text' className={styles.text_16} >{'メッセージを送信'}</Text></div>
<div className={styles.frame_62472219} ><div className={styles.frame_42731888519} ><Text textType='Text' className={styles.text_19} >{'送信'}</Text></div></div></div></div></div>);
}

export default MessageDetail;
