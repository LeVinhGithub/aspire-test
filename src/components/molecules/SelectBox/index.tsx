import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SelectBoxProps = DefaultPageProps & {
  className?: string;
  }

function SelectBox (props: SelectBoxProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_18} >{'会社名を選択'}</Text>
<Image sourceType='upload' className={styles.image_52} src={assets('1667376911482-svg')} alt='Image52' /></div>);
}

export default SelectBox;
