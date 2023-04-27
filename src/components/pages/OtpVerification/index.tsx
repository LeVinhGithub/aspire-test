import Property1Detail from "@components/molecules/Property1Detail";
import { Text } from "@components/atoms/Text";
import TextField from "@components/molecules/TextField";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type OtpVerificationProps = DefaultPageProps & {
  className?: string;
  }

function OtpVerification (props: OtpVerificationProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189229} ><div className={styles.frame_4273189213} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_4273188379} ><Text textType='Text' className={styles.text_5} >{'SMSコードの入力'}</Text>
<div className={styles.frame_4273188369} ><div className={styles.frame_4273188399} ><Text textType='Text' className={styles.text_8} >{'080-3423-2313に届いた4桁のSMSコードを入力して下さい'}</Text>
<div className={styles.frame_4273188399} ><TextField className={styles.textfield_1} required={{}} label={'電話番号'} placeholder={{}} disabled={{}} value={'080-3423-2313'} noBadge={'true'} />
<SizeLgStateDefaulticonNone className={styles.btn_9} children={'入力'} /></div></div></div></div></div></div>);
}

export default OtpVerification;
