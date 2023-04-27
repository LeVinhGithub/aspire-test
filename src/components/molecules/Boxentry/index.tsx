import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type BoxentryProps = DefaultPageProps & {
  className?: string;
  }

function Boxentry (props: BoxentryProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.tag_28} ><Text textType='Text' className={styles.text_27} >{'こちらからスカウト'}</Text></div>
<div className={styles.frame_42731902085} ><div className={styles.loginstate_38} ><div className={styles.ellipse_2635} />
<Text textType='Text' className={styles.text_37} >{'3時間前'}</Text></div>
<div className={styles.frame_42731901885} ><div className={styles.frame_42731905260} ><div className={styles.frame_42731901458} ><div className={styles.iconman_49} ><div className={styles.user_19149} ><Image sourceType='upload' className={styles.image_45} src={assets('1672693910571-svg')} alt='Image45' />
<Image sourceType='upload' className={styles.image_49} src={assets('1672693910587-svg')} alt='Image49' /></div></div>
<div className={styles.frame_42731901558} ><div className={styles.frame_42731901254} ><Text textType='Text' className={styles.text_52} >{'株式会社DeNA 所属'}</Text>
<Text textType='Text' className={styles.text_53} >{'IT / 営業'}</Text>
<Text textType='Text' className={styles.text_53} >{'エンジニア / 800万円以上'}</Text></div>
<div className={styles.frame_42731901254} ><Text textType='Text' className={styles.text_37} >{'年齢：24歳'}</Text>
<Text textType='Text' className={styles.text_37} >{'大学卒 / 慶應義塾大学'}</Text>
<Text textType='Text' className={styles.text_37} >{'転職回数：2回'}</Text></div></div></div>
<div className={styles.frame_42731901760} ><Text textType='Text' className={styles.text_60} >{'新卒で、三井住友銀行に入社。
事務職としての経験年数は少ないのですが、基本的な事務の流れは理解しております。'}</Text></div></div>
<div className={styles.frame_42731901985} ><div className={styles.task_69} ><Text textType='Text' className={styles.text_63} >{'面接調整'}</Text>
<div className={styles.ic_line_checkcircle_69} ><Image sourceType='upload' className={styles.image_66} src={assets('1672693910624-svg')} alt='Image66' />
<Image sourceType='upload' className={styles.image_69} src={assets('1672693910629-svg')} alt='Image69' /></div></div>
<div className={styles.task_69} ><Text textType='Text' className={styles.text_63} >{'一次面接'}</Text>
<div className={styles.ic_line_checkcircle_69} ><Image sourceType='upload' className={styles.image_66} src={assets('1672693910640-svg')} alt='Image74' />
<Image sourceType='upload' className={styles.image_69} src={assets('1672693910644-svg')} alt='Image77' /></div></div>
<div className={styles.task_79} ><Text textType='Text' className={styles.text_79} >{'面接調整'}</Text></div>
<div className={styles.task_81} ><Text textType='Text' className={styles.text_81} >{'最終面接'}</Text></div>
<div className={styles.task_81} ><Text textType='Text' className={styles.text_81} >{'内定'}</Text></div>
<div className={styles.task_81} ><Text textType='Text' className={styles.text_81} >{'成約'}</Text></div></div></div></div></div>);
}

export default Boxentry;
