import Header from "@components/molecules/Header";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import Property1On from "@components/molecules/Property1On";
import Property1Off from "@components/molecules/Property1Off";
import { Text } from "@components/atoms/Text";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import AdminHeader from "@components/molecules/AdminHeader";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorMyPageProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorMyPage (props: AdministratorMyPageProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1669356750487} ><div className={styles.frame_42731887912} ><div className={styles.frame_4273188784} ><div className={styles.frame_4273188804} ><Header className={styles.header_4} /></div>
<SizeLgStateDefaulticonprefix className={styles.btn_4} /></div>
<div className={styles.frame_42731883912} ><div className={styles.meutaskdetail_6} ><Property1On className={styles.task_menu_button_6} />
<Property1Off className={styles.task_menu_button_6} /></div>
<div className={styles.frame_42731900612} ><Text textType='Text' className={styles.text_8} >{'パスワードを変更'}</Text>
<div className={styles.frame_42731883612} ><div className={styles.frame_42731884010} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_10} /></div>
<div className={styles.frame_42731884010} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_10} /></div>
<div className={styles.frame_42731884010} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_10} /></div>
<SizeLgStateDefaulticonNone className={styles.btn_12} children={{}} /></div></div></div></div>
<AdminHeader className={styles.header_inner_12} /></div></div>);
}

export default AdministratorMyPage;
