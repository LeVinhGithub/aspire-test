import Property1Detail from "@components/molecules/Property1Detail";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import { Text } from "@components/atoms/Text";
import Property1On from "@components/molecules/Property1On";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type JobOpeningEditProps = DefaultPageProps & {
  className?: string;
  }

function JobOpeningEdit (props: JobOpeningEditProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189062} ><Property1Detail className={styles.searchbar_2} /></div>
<div className={styles.frame_42731890851} ><div className={styles.frame_42731889150} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_4} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_4} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_4} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_4} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_4} />
<div className={styles.text_field_7} ><TextFieldTitle className={styles.text_field_title_5} />
<div className={styles.assets_7} ><Text textType='Text' className={styles.text_7} >{'ファイルを選択してください
対応拡張子 : .pdf'}</Text></div></div>
<div className={styles.text_field_50} ><TextFieldTitle className={styles.text_field_title_8} />
<div className={styles.frame_42731893918} ><Text textType='Text' className={styles.text_10} >{'▼ 会社の特色'}</Text>
<div className={styles.assets_12} ><Property1On className={styles.ic_line_checkcircle_11} />
<Text textType='Text' className={styles.text_12} >{'自社サービスに携わりたい'}</Text></div>
<div className={styles.assets_12} ><Property1On className={styles.ic_line_checkcircle_11} />
<Text textType='Text' className={styles.text_12} >{'クライアントワークに携わりたい'}</Text></div>
<div className={styles.assets_12} ><Property1On className={styles.ic_line_checkcircle_11} />
<Text textType='Text' className={styles.text_12} >{'上場企業で働きたい'}</Text></div>
<div className={styles.assets_12} ><Property1On className={styles.ic_line_checkcircle_11} />
<Text textType='Text' className={styles.text_12} >{'グローバル事業に携わりたい'}</Text></div></div></div></div>
<div className={styles.frame_42731885651} ><ButtonActive className={styles.btn_51} children={{}} /></div></div></div>);
}

export default JobOpeningEdit;
