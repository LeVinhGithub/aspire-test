import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type BoxpeopleProps = DefaultPageProps & {
  className?: string;
  image: string;
description: string;
new_prop_baQo: string;
}

function Boxpeople (props: BoxpeopleProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_42731902077} ><div className={styles.loginstate_43} ><div className={styles.ellipse_2639} />
<Text textType='Text' className={styles.text_42} >{'3時間前'}</Text></div>
<div className={styles.frame_42731901877} ><div className={styles.frame_42731901472} ><div className={styles.iconman_63} ><div className={styles.user_19163} ><Image sourceType='upload' className={styles.image_51} src={assets('1667376625223-svg')} alt='Image51' />
<Image sourceType='upload' className={styles.image_62} src={assets('1667376625235-svg')} alt='Image62' /></div></div>
<div className={styles.frame_42731901572} ><div className={styles.frame_42731901268} ><Text textType='Text' className={styles.text_66} >{'株式会社DeNA 所属'}</Text>
<Text textType='Text' className={styles.text_42} >{'IT / 営業'}</Text>
<Text textType='Text' className={styles.text_42} >{'マネージャー / 1,000万円以上'}</Text></div>
<div className={styles.frame_42731901372} ><Text textType='Text' className={styles.text_42} >{'年齢：24歳'}</Text>
<Text textType='Text' className={styles.text_42} >{'大学卒 / 慶應義塾大学'}</Text>
<Text textType='Text' className={styles.text_42} >{'転職回数：2回'}</Text></div></div></div>
<div className={styles.frame_42731901977} ><div className={styles.btn_75} ><Text textType='Text' className={styles.text_75} >{'スカウトを送る'}</Text></div>
<div className={styles.btn_77} ><Text textType='Text' className={styles.text_77} >{'ターゲットリストに追加'}</Text></div></div></div></div>
<div className={styles.frame_42731901779} ><Text textType='Text' className={styles.text_79} >{props.description}</Text></div></div>);
}

export default Boxpeople;
