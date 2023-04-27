import HeaderNormal from "@components/molecules/HeaderNormal";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import { Text } from "@components/atoms/Text";
import Property1On from "@components/molecules/Property1On";
import ButtonActive from "@components/molecules/ButtonActive";
import IcLinedelete from "@components/molecules/IcLinedelete";
import Property1Open from "@components/molecules/Property1Open";
import Property1Close from "@components/molecules/Property1Close";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IndustryFilteringPopupOpenProps = DefaultPageProps & {
  className?: string;
  }

function IndustryFilteringPopupOpen (props: IndustryFilteringPopupOpenProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><HeaderNormal className={styles.header_normal_1} text={{}} />
<div className={styles.frame_42731890847} ><div className={styles.frame_42731889146} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_1} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_1} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_1} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_1} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_1} />
<div className={styles.text_field_46} ><TextFieldTitle className={styles.text_field_ui_1} />
<div className={styles.frame_42731893914} ><Text textType='Text' className={styles.text_6} >{'▼ 会社の特色'}</Text>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'自社サービスに携わりたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'クライアントワークに携わりたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'上場企業で働きたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'グローバル事業に携わりたい'}</Text></div></div>
<div className={styles.frame_42731893914} ><Text textType='Text' className={styles.text_6} >{'▼ グローバル事業に携わりたい'}</Text>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'ストックオプションが欲しい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'成果報酬型で働きたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'ワーク・ライフ・バランスを大事にしたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'女性が活躍している環境で働きたい'}</Text></div></div>
<div className={styles.frame_42731893914} ><Text textType='Text' className={styles.text_6} >{'▼ 事業内容'}</Text>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'社会に貢献したい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'地域に貢献したい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'新規事業を立ち上げたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'いつか起業したい'}</Text></div></div>
<div className={styles.frame_42731894246} ><Text textType='Text' className={styles.text_6} >{'▼ 業務内容'}</Text>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'英語力を活用したい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'マネジメントをしたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'スペシャリストになりたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'ジェネラリストになりたい'}</Text></div>
<div className={styles.assets_8} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_8} >{'大きい裁量を持ちたい'}</Text></div></div></div></div>
<div className={styles.frame_42731885647} ><ButtonActive className={styles.btn_1} children={{}} /></div></div>
<div className={styles.frame_42731895552} ><div className={styles.frame_42731895752} ><div className={styles.header_51} ><Text textType='Text' className={styles.text_51} >{'希望業界を選択しましょう'}</Text>
<IcLinedelete className={styles.ic_linedelete_1} /></div>
<div className={styles.frame_42731895652} ><Property1Open className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} />
<Property1Close className={styles.togglebtn_1} /></div>
<SizeLgStateDefaulticonNone className={styles.btn_1} children={{}} /></div></div></div>);
}

export default IndustryFilteringPopupOpen;
