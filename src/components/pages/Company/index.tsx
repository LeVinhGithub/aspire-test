import assets from "@assets/index";
import Image from "next/image";
import Property1Detail from "@components/molecules/Property1Detail";
import { Text } from "@components/atoms/Text";
import IcLineexternallink from "@components/molecules/IcLineexternallink";
import Boxrecruiting from "@components/molecules/Boxrecruiting";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CompanyProps = DefaultPageProps & {
  className?: string;
  }

function Company (props: CompanyProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><Image sourceType='upload' className={styles.image_2} src={assets('1666944241360-png')} alt='Image2' />
<div className={styles.frame_4273189183} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_42731887815} ><div className={styles.frame_42731888314} ><div className={styles.frame_42731888111} ><Image sourceType='upload' className={styles.image_7} src={assets('1666944241456-png')} alt='Image7' />
<div className={styles.frame_42731887911} ><Text textType='Text' className={styles.text_9} >{'株式会社リクルート'}</Text>
<div className={styles.frame_42731888411} ><Text textType='Text' className={styles.text_11} >{'https://www.rakus-partners.co.jp'}</Text>
<IcLineexternallink className={styles.ic_lineexternallink_11} /></div></div></div>
<div className={styles.frame_42731888014} ><Text textType='Text' className={styles.text_13} >{'未来をもっと「楽」にする
プロフェッショナルへ'}</Text>
<Text textType='Text' className={styles.text_14} >{'私たちが目指すものは２つあります。

１つは、「お客様が困っているすべてのIT課題を解決する」こと。ラクスパートナーズのITエンジニアが技術を提供し、お客様のITに関わるすべての課題解決を徹底支援します。

２つ目は、「世の中のITエンジニアのキャリアハブになる」こと。ラクスパートナーズに入社したエンジニアを、どこでも通用するスペシャリストに育成します。IT業界でキャリアを積んでいきたい人材にとっての 「ハブ＝中心地」でありたいという想いがあります。'}</Text></div></div>
<div className={styles.frame_42731888215} ><Boxrecruiting className={styles.boxrecruiting_15} image={{}} tags={{}} title={{}} companyName={{}} link={{}} companyLogo={{}} />
<Boxrecruiting className={styles.boxrecruiting_15} image={{}} tags={{}} title={{}} companyName={{}} link={{}} companyLogo={{}} /></div></div></div>);
}

export default Company;
