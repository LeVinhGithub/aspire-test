import Property1Detail from "@components/molecules/Property1Detail";
import { Text } from "@components/atoms/Text";
import TextField from "@components/molecules/TextField";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type PhoneNumberConfirmationProps = DefaultPageProps & {
  className?: string;
  }

function PhoneNumberConfirmation (props: PhoneNumberConfirmationProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189249} ><div className={styles.frame_4273189233} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_4273188379} ><Text textType='Text' className={styles.text_5} >{'電話番号の確認'}</Text>
<div className={styles.frame_4273188369} ><div className={styles.frame_4273188399} ><Text textType='Text' className={styles.text_8} >{'セキュリティ強化のため、本人認証を行って下さい。'}</Text>
<div className={styles.frame_4273188399} ><TextField className={styles.textfield_1} required={undefined} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={'true'} />
<SizeLgStateDefaulticonNone className={styles.btn_9} children={{}} /></div></div></div></div></div></div>);
}

export default PhoneNumberConfirmation;
