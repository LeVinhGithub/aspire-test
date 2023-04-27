import assets from "@assets/index";
import Property1Detail from "@components/molecules/Property1Detail";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import Paragraphpattern1 from "@components/molecules/Paragraphpattern1";
import Tag from "@components/molecules/Tag";
import Divider from "@components/molecules/Divider";
import IcLinerightone from "@components/molecules/IcLinerightone";
import ButtonActive from "@components/molecules/ButtonActive";
import Property1On from "@components/molecules/Property1On";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type JobOpeningDetailProps = DefaultPageProps & {
  className?: string;
  }

function JobOpeningDetail (props: JobOpeningDetailProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731890147} ><div className={styles.frame_42731890046} ><div className={styles.frame_42731890046} ><Property1Detail className={styles.searchbar_4} /></div>
<div className={styles.frame_42731889846} ><Image sourceType='upload' className={styles.image_6} src={assets('1666338290611-png')} alt='Image6' />
<div className={styles.content_46} ><div className={styles.frame_42731884619} ><div className={styles.frame_42731885714} ><div className={styles.frame_42731883211} ><Text textType='Text' className={styles.text_11} >{'人気Youtuberと一緒にエンタメ業界を盛り上げる！正社員募集！'}</Text></div>
<div className={styles.frame_726114} ><Image sourceType='upload' className={styles.image_13} src={assets('1666338290680-png')} alt='Image13' />
<Text textType='Text' className={styles.text_14} >{'株式会社Entertainment'}</Text></div></div>
<div className={styles.frame_42731884319} ><div className={styles.frame_42731885714} ><Paragraphpattern1 className={styles.frame_42731885714} />
<div className={styles.frame_42731883117} ><Tag className={styles.tag_17} value={{}} />
<Tag className={styles.tag_17} value={{}} /></div></div>
<Divider className={styles.divider_17} />
<div className={styles.frame_42731884819} ><Text textType='Text' className={styles.text_19} >{'転職診断をリトライ'}</Text>
<IcLinerightone className={styles.ic_linerightone_19} /></div></div></div>
<div className={styles.frame_42731884546} ><Paragraphpattern1 className={styles.frame_42731885714} />
<div className={styles.line_321} />
<div className={styles.frame_42731889846} ><Paragraphpattern1 className={styles.frame_42731885714} />
<div className={styles.frame_42731885526} ><div className={styles.frame_42731883117} ><Tag className={styles.tag_24} value={{}} />
<Tag className={styles.tag_24} value={{}} />
<Tag className={styles.tag_24} value={{}} /></div></div></div>
<div className={styles.line_321} />
<div className={styles.frame_42731885526} ><Text textType='Text' className={styles.text_29} >{'募集要項'}</Text>
<div className={styles.frame_42731885246} ><div className={styles.frame_42731885714} ><div className={styles.frame_42731884933} ><Text textType='Text' className={styles.text_33} >{'仕事内容'}</Text></div>
<Text textType='Text' className={styles.text_34} >{' 雑貨店などへアパレル雑貨や文具の案内・提案からPOP作成など売り場づくりまで提案する営業職'}</Text></div>
<div className={styles.frame_42731885714} ><div className={styles.frame_42731884933} ><Text textType='Text' className={styles.text_33} >{'求めている人材'}</Text></div>
<Text textType='Text' className={styles.text_34} >{'≪こんな方を歓迎します≫
◇雑貨や文具が好きな方
◇明るく元気な対応ができる方
◇企画力・商品力のある会社で働きたい方
◇売り場づくりや企画にも携わりたい方'}</Text></div>
<div className={styles.frame_42731885714} ><div className={styles.frame_42731884933} ><Text textType='Text' className={styles.text_33} >{'給与'}</Text></div>
<Text textType='Text' className={styles.text_34} >{' 月給：23万円以上
※経験・能力・年齢を考慮し、決定します。

【昇給】
年1回
10月

【賞与】
年2回
7月・12月　＋　決算賞与：7月'}</Text></div>
<div className={styles.frame_42731885714} ><div className={styles.frame_42731884945} ><Text textType='Text' className={styles.text_33} >{'勤務時間 '}</Text></div>
<Text textType='Text' className={styles.text_34} >{'勤務時間：8:50～17:50
(休憩時間 1時間00分)

※休憩／12：30～13：30'}</Text></div></div></div></div></div></div></div>
<div className={styles.frame_42731885647} ><ButtonActive className={styles.btn_47} children={{}} />
<Property1On className={styles.like_47} /></div></div></div>);
}

export default JobOpeningDetail;
