import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type StateDefaultPostIconTrueTagFalsePreIconFalseProps = DefaultPageProps & {
  className?: string;
  }

function StateDefaultPostIconTrueTagFalsePreIconFalse (props: StateDefaultPostIconTrueTagFalsePreIconFalseProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text className={styles.text_75} >{'選択'}</Text>
<Image sourceType='upload' className={styles.image_92} src={assets('1666942201471-svg')} alt='Image92' /></div>);
}

export default StateDefaultPostIconTrueTagFalsePreIconFalse;
