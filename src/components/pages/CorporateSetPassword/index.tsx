import { Text } from "@components/atoms/Text";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import IcLinecheck from "@components/molecules/IcLinecheck";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateSetPasswordProps = DefaultPageProps & {
  className?: string;
  }

function CorporateSetPassword (props: CorporateSetPasswordProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1669547143288} ><div className={styles.frame_42731882014} ><Text textType='Text' className={styles.text_3} >{'パスワードを設定'}</Text>
<div className={styles.frame_42731883614} ><div className={styles.frame_42731883914} ><div className={styles.frame_4273188396} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_6} /></div>
<div className={styles.frame_4273188396} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_6} /></div>
<div className={styles.frame_42731882614} ><div className={styles.frame_42731882410} ><IcLinecheck className={styles.ic_linecheck_9} />
<Text textType='Text' className={styles.text_10} >{'英字を含む'}</Text></div>
<div className={styles.frame_42731882612} ><IcLinecheck className={styles.ic_linecheck_9} />
<Text textType='Text' className={styles.text_10} >{'数字または記号を含む'}</Text></div>
<div className={styles.frame_42731882514} ><IcLinecheck className={styles.ic_linecheck_9} />
<Text textType='Text' className={styles.text_10} >{'8文字以上'}</Text></div></div>
<ButtonActive className={styles.btn_14} children={{}} /></div></div></div></div></div>);
}

export default CorporateSetPassword;
