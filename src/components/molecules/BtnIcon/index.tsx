import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type BtnIconProps = DefaultPageProps & {
  className?: string;
  }

function BtnIcon (props: BtnIconProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.ic_linetrash_73} ><Image sourceType='upload' className={styles.image_68} src={assets('1672728953679-png')} alt='Image68' />
<Image sourceType='upload' className={styles.image_72} src={assets('1672728953755-png')} alt='Image72' /></div></div>);
}

export default BtnIcon;
