import assets from "@assets/index";
import Image from "next/image";
import Property1Detail from "@components/molecules/Property1Detail";
import { Text } from "@components/atoms/Text";
import Table from "@components/molecules/Table";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CompanyUpdatedProps = DefaultPageProps & {
  className?: string;
  }

function CompanyUpdated (props: CompanyUpdatedProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><Image sourceType='upload' className={styles.image_2} src={assets('1667886667268-png')} alt='Image2' />
<div className={styles.frame_4273189183} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_42731888361} ><div className={styles.outline_7} ><Image sourceType='upload' className={styles.image_6} src={assets('1667886667351-png')} alt='Image6' />
<Text textType='Text' className={styles.text_7} >{'株式会社リクルート'}</Text></div>
<div className={styles.frame_42731894661} ><div className={styles.frame_42731894421} ><div className={styles.paragraphpattern_113} ><Text textType='Text' className={styles.text_11} >{'Vision'}</Text>
<div className={styles.frame_42731894313} ><Text textType='Text' className={styles.text_13} >{'新たな価値を生みだす
世界的なマーケットプレイス
を創る'}</Text></div></div>
<div className={styles.paragraphpattern_117} ><Text textType='Text' className={styles.text_11} >{'Mission'}</Text>
<div className={styles.frame_42731894317} ><Text textType='Text' className={styles.text_17} >{'信用を創造して、
なめらかな社会を創る'}</Text></div></div>
<div className={styles.paragraphpattern_121} ><Text textType='Text' className={styles.text_11} >{'Value'}</Text>
<div className={styles.frame_42731894317} ><Text textType='Text' className={styles.text_21} >{'Go Bold
All for One
Be a Pro'}</Text></div></div></div>
<div className={styles.frame_42731894421} ><div className={styles.paragraphpattern_129} ><Text textType='Text' className={styles.text_11} >{'代表紹介'}</Text>
<div className={styles.ceo_29} ><Image sourceType='upload' className={styles.image_26} src={assets('1667886667372-png')} alt='Image26' />
<div className={styles.proflie_29} ><Text textType='Text' className={styles.text_28} >{'山川 タロウ'}</Text>
<Text textType='Text' className={styles.text_29} >{'ニューヨーク州立大学バッファロー校卒業後､積水ハウス株式会社にて個人向けの企画提案､法人･資産家向けの資産活用提案､海外事業開発において企画営業。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div></div>
<div className={styles.paragraphpattern_129} ><Text textType='Text' className={styles.text_11} >{'役員紹介'}</Text>
<div className={styles.ceo_36} ><Image sourceType='upload' className={styles.image_33} src={assets('1667886667393-png')} alt='Image33' />
<div className={styles.proflie_36} ><Text textType='Text' className={styles.text_35} >{'岡村 信悟'}</Text>
<Text textType='Text' className={styles.text_36} >{'東京大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div>
<div className={styles.ceo_41} ><Image sourceType='upload' className={styles.image_38} src={assets('1667886667401-png')} alt='Image38' />
<div className={styles.proflie_41} ><Text textType='Text' className={styles.text_35} >{'鈴木 典明'}</Text>
<Text textType='Text' className={styles.text_29} >{'京都大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div></div>
<div className={styles.paragraphpattern_129} ><Text textType='Text' className={styles.text_11} >{'メンバー紹介'}</Text>
<div className={styles.ceo_41} ><Image sourceType='upload' className={styles.image_38} src={assets('1667886667411-png')} alt='Image45' />
<div className={styles.proflie_41} ><Text textType='Text' className={styles.text_35} >{'佐藤 花子'}</Text>
<Text textType='Text' className={styles.text_29} >{'京王大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div>
<div className={styles.ceo_41} ><Image sourceType='upload' className={styles.image_38} src={assets('1667886668662-png')} alt='Image50' />
<div className={styles.proflie_41} ><Text textType='Text' className={styles.text_35} >{'佐藤 花子'}</Text>
<Text textType='Text' className={styles.text_29} >{'京王大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div>
<div className={styles.ceo_41} ><Image sourceType='upload' className={styles.image_38} src={assets('1667886668669-png')} alt='Image55' />
<div className={styles.proflie_41} ><Text textType='Text' className={styles.text_35} >{'佐藤 花子'}</Text>
<Text textType='Text' className={styles.text_29} >{'京王大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div></div></div>
<div className={styles.paragraphpattern_129} ><Text textType='Text' className={styles.text_11} >{'企業概要'}</Text>
<div className={styles.table_61} ><Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} />
<Table className={styles.table_61} title={{}} description={{}} /></div></div></div></div></div>);
}

export default CompanyUpdated;
