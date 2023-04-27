import HeaderDefault from "@components/molecules/HeaderDefault";
import { Tab } from "@components/atoms/Tab";
import Header from "@components/molecules/Header";
import IcLinesearch from "@components/molecules/IcLinesearch";
import { Text } from "@components/atoms/Text";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import Switcheditmode from "@components/molecules/Switcheditmode";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateTemplateManagementProps = DefaultPageProps & {
  className?: string;
  }

function CorporateTemplateManagement (props: CorporateTemplateManagementProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><HeaderDefault className={styles.header_default_63} />
<div className={styles.inner_container_1667978418629} ><div className={styles.frame_42731901463} ><Tab type='card' tabs={{ 0: { title: "スカウト送信"}, 1: { title: "テンプレ管理"}, 2: { title: "ターゲットリスト"}}} defaultActiveKey='スカウト送信_0' className={styles.tab_1} activeColor='#ffffff' ><div className={styles.box_45} />
<div className={styles.box_46} ><div className={styles.frame_42731887963} ><div className={styles.frame_4273188787} ><div className={styles.frame_4273188807} ><Header className={styles.header_5} />
<div className={styles.search_7} ><IcLinesearch className={styles.ic_linesearch_6} />
<Text textType='Text' className={styles.text_7} >{'タイトル・テンプレ内容で検索'}</Text></div></div>
<SizeLgStateDefaulticonprefix className={styles.btn_7} /></div>
<div className={styles.frame_42731887763} ><div className={styles.table_record_18} ><div className={styles.container_17} ><div className={styles.text_area_17} ><div className={styles.frame_777913} ><Text textType='Text' className={styles.text_13} >{'作成日'}</Text></div>
<div className={styles.frame_42731888015} ><Text textType='Text' className={styles.text_13} >{'タイトル'}</Text></div>
<div className={styles.frame_763717} ><Text textType='Text' className={styles.text_17} >{'テンプレ内容'}</Text></div></div></div>
<div className={styles.line_2118} /></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_27} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'2022/09/20'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'マネージャー採用'}</Text></div>
<div className={styles.frame_763727} ><Text textType='Text' className={styles.text_27} >{'こんにちは！株式会社MINTの採用担当です。この度ご連絡したのはあなたのマネージャー志望の項目に興味を持ったからです。現在弊社ではマネージャーの採用を行っており、○○○○○。'}</Text></div></div></div></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_27} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'2022/09/20'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'エンジニア採用'}</Text></div>
<div className={styles.frame_763727} ><Text textType='Text' className={styles.text_27} >{'こんにちは！株式会社MINTの採用担当です。この度ご連絡したのはあなたのマネージャー志望の項目に興味を持ったからです。現在弊社ではマネージャーの採用を行っており、○○○○○。'}</Text></div></div></div></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_27} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'2022/09/20'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'人事採用'}</Text></div>
<div className={styles.frame_763727} ><Text textType='Text' className={styles.text_27} >{'こんにちは！株式会社MINTの採用担当です。この度ご連絡したのはあなたのマネージャー志望の項目に興味を持ったからです。現在弊社ではマネージャーの採用を行っており、○○○○○。'}</Text></div></div></div></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_27} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'2022/09/20'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'第二新卒採用'}</Text></div>
<div className={styles.frame_763727} ><Text textType='Text' className={styles.text_27} >{'こんにちは！株式会社MINTの採用担当です。この度ご連絡したのはあなたのマネージャー志望の項目に興味を持ったからです。現在弊社ではマネージャーの採用を行っており、○○○○○。'}</Text></div></div></div></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_27} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'2022/09/20'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'CFO採用'}</Text></div>
<div className={styles.frame_763727} ><Text textType='Text' className={styles.text_27} >{'こんにちは！株式会社MINTの採用担当です。この度ご連絡したのはあなたのマネージャー志望の項目に興味を持ったからです。現在弊社ではマネージャーの採用を行っており、○○○○○。'}</Text></div></div></div></div></div></div></div>
<div className={styles.box_45} /></Tab>
<Switcheditmode className={styles.switcheditmode_2} /></div></div></div>);
}

export default CorporateTemplateManagement;
