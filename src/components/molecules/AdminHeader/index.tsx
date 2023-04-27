import assets from "@assets/index";
import Logo from "@components/molecules/Logo";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdminHeaderProps = DefaultPageProps & {
  className?: string;
  }

function AdminHeader (props: AdminHeaderProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_42731929570} ><div className={styles.menu_69} ><Logo className={styles.logo_1} />
<div className={styles.main_menu_69} ><div className={styles.sidemenu_list_65} ><Text textType='Text' className={styles.text_65} >{'オススメ求人管理'}</Text></div>
<div className={styles.sidemenu_list_67} ><Text textType='Text' className={styles.text_67} >{'企業管理'}</Text></div>
<div className={styles.sidemenu_list_67} ><Text textType='Text' className={styles.text_67} >{'応募者管理'}</Text></div></div></div>
<Image sourceType='upload' className={styles.image_70} src={assets('1667376911541-png')} alt='Image70' /></div>
<Image sourceType='upload' className={styles.image_71} src={assets('1667376911551-svg')} alt='Image71' /></div>);
}

export default AdminHeader;
