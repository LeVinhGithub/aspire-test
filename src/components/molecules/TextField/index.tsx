import { Text } from "@components/atoms/Text";
import { Input } from "@components/atoms/Input";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TextFieldProps = DefaultPageProps & {
  className?: string;
  required: boolean;
label: string;
placeholder: string;
disabled: boolean;
value: string;
noBadge: boolean;
onChange: any;
}

function TextField (props: TextFieldProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.text_field_title_86} ><Text textType='Text' className={styles.text_80} >{props.label}</Text>
<div className={styles.tagmust_86} ><Text textType='Text' className={styles.text_86} >{'必須'}</Text></div></div>
<div className={styles.input_1_container} ><Input placeholder={props.placeholder} isPasswordField={false} className={styles.input_1} inputStyle={{ backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", fontWeight: "500", height: "56px", padding: "0px 6px 0px 6px"}} /></div></div>);
}

export default TextField;
