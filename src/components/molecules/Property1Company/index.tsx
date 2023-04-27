import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1CompanyProps = DefaultPageProps & {
  className?: string;
  }

function Property1Company (props: Property1CompanyProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.header_inner_64} ><div className={styles.menu_63} ><div className={styles.logo_54} ><Image sourceType='upload' className={styles.image_43} src={assets('1671437608486-png')} alt='Image43' />
<Image sourceType='upload' className={styles.image_45} src={assets('1671437608510-png')} alt='Image45' />
<Image sourceType='upload' className={styles.image_47} src={assets('1671437608523-png')} alt='Image47' />
<Image sourceType='upload' className={styles.image_48} src={assets('1671437608531-png')} alt='Image48' />
<Image sourceType='upload' className={styles.image_49} src={assets('1671437608538-png')} alt='Image49' />
<Image sourceType='upload' className={styles.image_50} src={assets('1671437608545-png')} alt='Image50' />
<Image sourceType='upload' className={styles.image_51} src={assets('1671437608552-png')} alt='Image51' />
<Image sourceType='upload' className={styles.image_52} src={assets('1671437608559-png')} alt='Image52' />
<Image sourceType='upload' className={styles.image_53} src={assets('1671437608566-png')} alt='Image53' />
<Image sourceType='upload' className={styles.image_53} src={assets('1671437608573-png')} alt='Image54' /></div>
<div className={styles.main_menu_63} ><div className={styles.sidemenu_list_57} ><Text className={styles.text_57} >{'スカウト'}</Text></div>
<div className={styles.sidemenu_list_59} ><Text className={styles.text_59} >{'採用検討中'}</Text></div>
<div className={styles.sidemenu_list_59} ><Text className={styles.text_59} >{'求人管理'}</Text></div>
<div className={styles.sidemenu_list_59} ><Text className={styles.text_59} >{'メッセージ'}</Text></div></div></div>
<Image sourceType='upload' className={styles.image_64} src={assets('1671437608591-png')} alt='Image64' /></div>
<div className={styles.divider_66} ><Image sourceType='upload' className={styles.image_66} src={assets('1671437608598-png')} alt='Image66' /></div></div>);
}

export default Property1Company;
