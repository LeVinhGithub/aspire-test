import assets from "@assets/index";
import Logo from "@components/molecules/Logo";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HeaderDefaultProps = DefaultPageProps & {
  className?: string;
  }

function HeaderDefault (props: HeaderDefaultProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.header_inner_83} ><div className={styles.menu_74} ><Logo className={styles.logo_1} />
<div className={styles.main_menu_74} ><div className={styles.sidemenu_list_66} ><Text textType='Text' className={styles.text_65} >{'スカウト'}</Text></div>
<div className={styles.sidemenu_list_70} ><Text textType='Text' className={styles.text_70} >{'選考管理'}</Text></div>
<div className={styles.sidemenu_list_70} ><Text textType='Text' className={styles.text_70} >{'求人管理'}</Text></div>
<div className={styles.sidemenu_list_70} ><Text textType='Text' className={styles.text_70} >{'メッセージ'}</Text></div></div></div>
<Image sourceType='upload' className={styles.image_83} src={assets('1667376585821-png')} alt='Image83' /></div>
<Image sourceType='upload' className={styles.image_84} src={assets('1667376587295-svg')} alt='Image84' /></div>);
}

export default HeaderDefault;
