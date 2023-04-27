import { Text } from "@components/atoms/Text";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorSignInProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorSignIn (props: AdministratorSignInProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1668084523027} ><div className={styles.frame_4273188206} ><Text textType='Text' className={styles.text_3} >{'管理者ログイン'}</Text>
<div className={styles.frame_4273188366} ><div className={styles.frame_4273188395} ><Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<ButtonActive className={styles.btn_5} children={{}} /></div>
<Text textType='Text' className={styles.text_6} >{'パスワードがわからない方はこちら'}</Text></div></div></div></div>);
}

export default AdministratorSignIn;
