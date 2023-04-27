import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import { Text } from "@components/atoms/Text";
import Property1On from "@components/molecules/Property1On";
import Property1Off from "@components/molecules/Property1Off";
import Divider from "@components/molecules/Divider";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import AdminHeader from "@components/molecules/AdminHeader";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorCompanyUserRegistrationProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorCompanyUserRegistration (props: AdministratorCompanyUserRegistrationProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1668084900090} ><div className={styles.frame_42731903811} ><div className={styles.title_4} ><IcLineArrowleft className={styles.ic_line_arrowleft_3} />
<Text textType='Text' className={styles.text_4} >{'戻る'}</Text></div>
<div className={styles.frame_42731883911} ><div className={styles.meutaskdetail_6} ><Property1On className={styles.task_menu_button_6} />
<Property1Off className={styles.task_menu_button_6} /></div>
<div className={styles.element_11} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'基本情報'}</Text></div>
<Divider className={styles.divider_10} /></div>
<div className={styles.body_11} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_11} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_11} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_11} />
<SizeLgStateDefaulticonNone className={styles.btn_11} children={{}} /></div></div></div></div>
<AdminHeader className={styles.header_inner_11} /></div></div>);
}

export default AdministratorCompanyUserRegistration;
