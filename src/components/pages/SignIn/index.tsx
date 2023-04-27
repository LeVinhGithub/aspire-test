import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import TextField from "@components/molecules/TextField";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SignInProps = DefaultPageProps & {
  className?: string;
  }

function SignIn (props: SignInProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.group_46} ><div className={styles.maskgroup_5} ><Image sourceType='upload' className={styles.image_4} src={assets('1666181151972-png')} alt='Image4' /></div>
<Image sourceType='upload' className={styles.image_4} src={assets('1666181152113-png')} alt='Image6' /></div>
<div className={styles.frame_42731889714} ><div className={styles.frame_42731883814} ><Text textType='Text' className={styles.text_9} >{'Luf Carrer'}</Text>
<div className={styles.frame_42731883714} ><Text textType='Text' className={styles.text_11} >{'会員登録（無料）'}</Text>
<div className={styles.frame_42731883613} ><TextField className={styles.textfield_1} required={'true'} label={'メールアドレス'} placeholder={'例：example@sample.co.jp'} disabled={{}} value={{}} noBadge={'true'} onChange={{}} />
<TextField className={styles.textfield_1} required={'true'} label={'メールアドレス'} placeholder={'例：example@sample.co.jp'} disabled={{}} value={{}} noBadge={'false'} onChange={{}} />
<Text textType='Text' className={styles.text_13} >{'登録することで個人情報保護方針および会員規約に同意したものと見なされます。'}</Text>
<ButtonActive className={styles.btn_13} children={{}} /></div>
<Text textType='Text' className={styles.text_14} >{'既に会員の方はログインへ'}</Text></div></div></div></div>);
}

export default SignIn;
