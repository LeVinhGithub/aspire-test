import assets from "@assets/index";
import HeaderDefault from "@components/molecules/HeaderDefault";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Iconman from "@components/molecules/Iconman";
import { Text } from "@components/atoms/Text";
import Loginstate from "@components/molecules/Loginstate";
import IcLinemorehorizontal from "@components/molecules/IcLinemorehorizontal";
import ButtonActive from "@components/molecules/ButtonActive";
import SizeLgStateNormaliconNone from "@components/molecules/SizeLgStateNormaliconNone";
import Image from "next/image";
import Illustrationpreview from "@components/molecules/Illustrationpreview";
import { Tab } from "@components/atoms/Tab";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateBasicInfoStepFourProps = DefaultPageProps & {
  className?: string;
  }

function CorporateBasicInfoStepFour (props: CorporateBasicInfoStepFourProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><HeaderDefault className={styles.header_default_20} />
<div className={styles.inner_container_1667376756450} ><div className={styles.frame_42731902220} ><div className={styles.frame_4273190359} ><div className={styles.frame_4273190038} ><IcLineArrowleft className={styles.ic_line_arrowleft_4} />
<Iconman className={styles.iconman_4} />
<div className={styles.frame_4273188807} ><div className={styles.frame_4273190237} ><Text textType='Text' className={styles.text_3} >{'検索条件を設定'}</Text>
<Text textType='Text' className={styles.text_7} >{'株式会社DeNA'}</Text></div>
<Loginstate className={styles.loginstate_7} /></div>
<div className={styles.btn_icon_8} ><IcLinemorehorizontal className={styles.ic_linemorehorizontal_8} /></div></div>
<div className={styles.frame_4273190199} ><ButtonActive className={styles.buttonactive_1} children={{}} />
<SizeLgStateNormaliconNone className={styles.btn_9} /></div></div>
<div className={styles.frame_42731903420} ><div className={styles.group_414} ><Image sourceType='upload' className={styles.image_12} src={assets('1667376756371-png')} alt='Image12' />
<div className={styles.image_313} />
<div className={styles.frame_42731904014} ><Illustrationpreview className={styles.illustrationpreview_14} /></div></div>
<div className={styles.body_20} ><Tab type='card' tabs={{ 0: { title: "経験"}, 1: { title: "経験"}, 2: { title: "経験"}, 3: { title: "基本情報"}, 4: { title: "経験"}}} defaultActiveKey='経験_0' className={styles.tab_1} ><div className={styles.box_18} />
<div className={styles.box_19} />
<div className={styles.box_18} />
<div className={styles.box_19} ><div className={styles.frame_42731897120} ><div className={styles.paragraphpattern_220} ><Text textType='Text' className={styles.text_20} >{'新卒で、三井住友銀行に入社。
事務職としての経験年数は少ないのですが、基本的な事務の流れは理解しております。
パソコンスキルは業務での経験の他に、子供の弁当表の作成など、独自でエクセルやワードを使用しております。
特に販売では「女性の職場」という独特の環境下にあり、相手の心理を考え、気持ちよく業務を行ってもらうように心がけたことでコミュニケーション力を鍛えられたと思います。'}</Text></div></div></div>
<div className={styles.box_18} /></Tab></div></div></div></div></div>);
}

export default CorporateBasicInfoStepFour;
