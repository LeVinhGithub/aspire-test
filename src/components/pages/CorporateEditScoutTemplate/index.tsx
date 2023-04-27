import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import Divider from "@components/molecules/Divider";
import Searchtype2 from "@components/molecules/Searchtype2";
import SizeLgStateDisableiconNone from "@components/molecules/SizeLgStateDisableiconNone";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateEditScoutTemplateProps = DefaultPageProps & {
  className?: string;
  }

function CorporateEditScoutTemplate (props: CorporateEditScoutTemplateProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731903215} ><div className={styles.titlearea_5} ><div className={styles.title_5} ><IcLineArrowleft className={styles.ic_line_arrowleft_1} />
<div className={styles.frame_4273190235} ><Header className={styles.header_1} /></div></div></div>
<div className={styles.frame_42731905115} ><div className={styles.element_15} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'テンプレートを編集'}</Text></div>
<Divider className={styles.divider_1} /></div>
<div className={styles.frame_42731904915} ><div className={styles.body_13} ><Text textType='Text' className={styles.text_13} >{'タイトル'}</Text>
<Searchtype2 className={styles.searchtype_21} /></div>
<div className={styles.frame_42731905015} ><Text textType='Text' className={styles.text_13} >{'テンプレート文面'}</Text>
<Searchtype2 className={styles.searchtype_22} /></div></div></div>
<SizeLgStateDisableiconNone className={styles.btn_1} /></div></div>
<HeaderDefault className={styles.header_default_1} /></div>);
}

export default CorporateEditScoutTemplate;
