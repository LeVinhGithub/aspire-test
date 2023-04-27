import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SidemenuprodProps = DefaultPageProps & {
  className?: string;
  }

function Sidemenuprod (props: SidemenuprodProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.sidemenu_81} ><div className={styles.mypage_link_45} ><Image sourceType='upload' className={styles.image_45} src={assets('1667376970555-svg')} alt='Image45' /></div>
<div className={styles.menu_list_81} ><div className={styles.main_menu_70} ><div className={styles.sidemenu_list_57} ><Text textType='Text' className={styles.text_56} >{'募集'}</Text></div>
<div className={styles.sidemenu_list_63} ><Text textType='Text' className={styles.text_62} >{'応募者'}</Text></div>
<div className={styles.sidemenu_list_63} ><Text textType='Text' className={styles.text_62} >{'メッセージ'}</Text></div></div>
<Image sourceType='upload' className={styles.image_75} src={assets('1667376970642-svg')} alt='Image75' />
<div className={styles.sidemenu_list_79} ><div className={styles.frame_756279} ><Text textType='Text' className={styles.text_79} >{'お問い合わせ'}</Text></div></div>
<Image sourceType='upload' className={styles.image_75} src={assets('1667376970664-svg')} alt='Image81' /></div></div>
<Image sourceType='upload' className={styles.image_82} src={assets('1667376970670-svg')} alt='Image82' /></div>);
}

export default Sidemenuprod;
