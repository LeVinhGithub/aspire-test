import assets from "@assets/index";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Header from "@components/molecules/Header";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import { Text } from "@components/atoms/Text";
import Divider from "@components/molecules/Divider";
import Paragraphpattern2 from "@components/molecules/Paragraphpattern2";
import Image from "next/image";
import Property1Company from "@components/molecules/Property1Company";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateCompanyInfoProps = DefaultPageProps & {
  className?: string;
  }

function CorporateCompanyInfo (props: CorporateCompanyInfoProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731887979} ><div className={styles.titlearea_5} ><div className={styles.title_5} ><IcLineArrowleft className={styles.ic_line_arrowleft_1} />
<div className={styles.frame_4273190235} ><Header className={styles.header_1} /></div></div>
<SizeLgStateDefaulticonNone className={styles.btn_1} /></div>
<div className={styles.frame_42731903479} ><div className={styles.body_11} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'企業概要'}</Text></div>
<Divider className={styles.divider_1} /></div>
<div className={styles.frame_42731897111} ><Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} /></div></div>
<div className={styles.frame_42731903579} ><div className={styles.body_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'事業内容'}</Text></div>
<Divider className={styles.divider_2} /></div>
<Text textType='Text' className={styles.text_17} >{'インターネット広告最大手の同社のアカウントプランナーとして、
大手クライアントに対してデジタルプロモーション全体の戦略立案からプランニングを行って頂きます。
年間広告費10億～100億程度の大手クライアントに対してデジタルプロモーション戦略の立案、プランニングをお任せします。
金融・不動産・人財・消費財等、様々な業界のクライアントがおりますので、ご自身の経験を活かしていただくことが可能です。
お客さまの課題を抽出し、解決するためのマーケティングやデータ分析から手がけて頂きます。
※プロジェクトごとにチームを組んで提案をします。

＜具体的な仕事内容＞
● 顧客の事業に寄り添いパートナーとして一緒に成功に導く
┗顧客グリップとニーズ発掘
┗マーケティング戦略の立案
┗プロモーション効果の最大化
※上記を実現していく中で、プランニング、ディレクション等々が発生します。'}</Text></div>
<div className={styles.body_23} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'Mission'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_42731897123} ><Text textType='Text' className={styles.text_17} >{'ミッションが入ります'}</Text></div></div>
<div className={styles.body_23} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'Vision'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_42731897123} ><Text textType='Text' className={styles.text_17} >{'ビジョンが入ります'}</Text></div></div>
<div className={styles.body_23} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'Value'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_42731897123} ><Text textType='Text' className={styles.text_17} >{'バリューが入ります'}</Text></div></div>
<div className={styles.body_44} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'代表者'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_42731928844} ><Image sourceType='upload' className={styles.image_41} src={assets('1671605507782-png')} alt='Image41' />
<div className={styles.proflie_44} ><Text textType='Text' className={styles.text_43} >{'山川 タロウ'}</Text>
<Text textType='Text' className={styles.text_44} >{'ニューヨーク州立大学バッファロー校卒業後､
積水ハウス株式会社にて個人向けの企画提案､
法人･資産家向けの資産活用提案､海外事業開発において企画営業。
1995年、郵政省（現総務省）入省。
2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div></div>
<div className={styles.body_59} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'役員'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_42731929059} ><div className={styles.frame_42731928854} ><Image sourceType='upload' className={styles.image_41} src={assets('1671605507817-png')} alt='Image51' />
<div className={styles.proflie_54} ><Text textType='Text' className={styles.text_43} >{'岡村 信悟'}</Text>
<Text textType='Text' className={styles.text_44} >{'東京大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div>
<div className={styles.frame_42731928854} ><Image sourceType='upload' className={styles.image_41} src={assets('1671605507835-png')} alt='Image56' />
<div className={styles.proflie_54} ><Text textType='Text' className={styles.text_43} >{'鈴木 典明'}</Text>
<Text textType='Text' className={styles.text_44} >{'京都大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div></div></div>
<div className={styles.body_79} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'メンバー'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_42731929079} ><div className={styles.frame_42731928854} ><Image sourceType='upload' className={styles.image_41} src={assets('1671605507857-png')} alt='Image66' />
<div className={styles.proflie_54} ><Text textType='Text' className={styles.text_43} >{'佐藤 花子'}</Text>
<Text textType='Text' className={styles.text_44} >{'東京大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div>
<div className={styles.frame_42731928854} ><Image sourceType='upload' className={styles.image_41} src={assets('1671605507877-png')} alt='Image71' />
<div className={styles.proflie_54} ><Text textType='Text' className={styles.text_43} >{'佐藤 花子'}</Text>
<Text textType='Text' className={styles.text_44} >{'東京大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div>
<div className={styles.frame_42731928854} ><Image sourceType='upload' className={styles.image_41} src={assets('1671605507895-png')} alt='Image76' />
<div className={styles.proflie_54} ><Text textType='Text' className={styles.text_43} >{'佐藤 花子'}</Text>
<Text textType='Text' className={styles.text_44} >{'東京大学大学院（人文科学研究科）修了。1995年、郵政省（現総務省）入省。2015年、総務省情報流通行政局 郵政行政部企画課企画官に就任。'}</Text></div></div></div></div>
<SizeLgStateDefaulticonNone className={styles.btn_2} /></div></div></div>
<Property1Company className={styles.header_1} /></div>);
}

export default CorporateCompanyInfo;
