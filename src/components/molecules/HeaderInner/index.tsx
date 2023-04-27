import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HeaderInnerProps = DefaultPageProps & {
  className?: string;
  }

function HeaderInner (props: HeaderInnerProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_42731929548} ><div className={styles.menu_47} ><div className={styles.main_menu_47} ><div className={styles.sidemenu_list_41} ><Text className={styles.text_41} >{'オススメ求人管理'}</Text></div>
<div className={styles.sidemenu_list_43} ><Text className={styles.text_43} >{'企業管理'}</Text></div>
<div className={styles.sidemenu_list_43} ><Text className={styles.text_43} >{'応募者管理'}</Text></div>
<div className={styles.sidemenu_list_43} ><Text className={styles.text_43} >{'求人審査'}</Text></div></div>
<div className={styles.harebiz_yoko_1138} ><Image sourceType='upload' className={styles.image_31} src={assets('1671071903034-png')} alt='Image31' />
<Image sourceType='upload' className={styles.image_32} src={assets('1671071903040-png')} alt='Image32' />
<Image sourceType='upload' className={styles.image_30} src={assets('1671071903026-png')} alt='Image30' />
<Image sourceType='upload' className={styles.image_34} src={assets('1671071903057-png')} alt='Image34' />
<Image sourceType='upload' className={styles.image_36} src={assets('1671071903070-png')} alt='Image36' />
<Image sourceType='upload' className={styles.image_37} src={assets('1671071903076-png')} alt='Image37' />
<Image sourceType='upload' className={styles.image_37} src={assets('1671071903084-png')} alt='Image38' />
<Image sourceType='upload' className={styles.image_33} src={assets('1671071903046-png')} alt='Image33' />
<Image sourceType='upload' className={styles.image_35} src={assets('1671071903064-png')} alt='Image35' />
<Image sourceType='upload' className={styles.image_29} src={assets('1671071902957-png')} alt='Image29' /></div></div>
<Image sourceType='upload' className={styles.image_48} src={assets('1671071903104-png')} alt='Image48' /></div>
<Image sourceType='upload' className={styles.image_49} src={assets('1671071903112-png')} alt='Image49' /></div>);
}

export default HeaderInner;
