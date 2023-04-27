import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1OffProps = DefaultPageProps & {
  className?: string;
  }

function Property1Off (props: Property1OffProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.ic_lineradio_58} ><div className={styles.radiochecked_158} ><Image sourceType='upload' className={styles.image_54} src={assets('1667376585758-svg')} alt='Image54' /></div></div>
<Text className={styles.text_61} >{'3ヶ月以内'}</Text></div>);
}

export default Property1Off;
