import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcFilledattentionProps = DefaultPageProps & {
  className?: string;
  }

function IcFilledattention (props: IcFilledattentionProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666942201451-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_90} src={assets('1666942201451-svg')} alt='Image90' /></div>);
}

export default IcFilledattention;
