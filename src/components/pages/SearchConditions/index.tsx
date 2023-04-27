import Property1Detail from "@components/molecules/Property1Detail";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import Property1On from "@components/molecules/Property1On";
import { Text } from "@components/atoms/Text";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchConditionsProps = DefaultPageProps & {
  className?: string;
  }

function SearchConditions (props: SearchConditionsProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731890927} ><div className={styles.frame_42731890927} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_42731890827} ><div className={styles.frame_42731889126} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<div className={styles.text_field_26} ><TextFieldTitle className={styles.text_field_title_6} />
<div className={styles.frame_42731888911} ><div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'産休育休制度あり'}</Text></div>
<div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'転勤異動なし'}</Text></div></div>
<div className={styles.frame_42731888911} ><div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'残業なし'}</Text></div>
<div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'職種変更なし'}</Text></div></div>
<div className={styles.frame_42731888911} ><div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'○○○'}</Text></div>
<div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'○○○'}</Text></div></div>
<div className={styles.frame_42731888911} ><div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'○○○'}</Text></div>
<div className={styles.assets_9} ><Property1On className={styles.ic_line_checkcircle_8} />
<Text textType='Text' className={styles.text_9} >{'○○○'}</Text></div></div></div></div>
<div className={styles.frame_42731885627} ><ButtonActive className={styles.btn_27} children={{}} /></div></div></div></div>);
}

export default SearchConditions;
