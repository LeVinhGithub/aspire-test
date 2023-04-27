import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import Divider from "@components/molecules/Divider";
import Searchtype2 from "@components/molecules/Searchtype2";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateRecCandidatesView2Props = DefaultPageProps & {
  className?: string;
  }

function CorporateRecCandidatesView2 (props: CorporateRecCandidatesView2Props): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667978447203} ><div className={styles.frame_42731903215} ><div className={styles.titlearea_5} ><div className={styles.title_5} ><IcLineArrowleft className={styles.ic_line_arrowleft_4} />
<div className={styles.frame_4273190235} ><Header className={styles.header_5} /></div></div></div>
<div className={styles.frame_42731905115} ><div className={styles.element_15} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'テンプレートを編集'}</Text></div>
<Divider className={styles.divider_10} /></div>
<div className={styles.frame_42731904915} ><div className={styles.body_13} ><Text textType='Text' className={styles.text_13} >{'タイトル'}</Text>
<Searchtype2 className={styles.searchtype_213} /></div>
<div className={styles.frame_42731905015} ><Text textType='Text' className={styles.text_13} >{'テンプレート文面'}</Text>
<Searchtype2 className={styles.searchtype_215} /></div></div></div>
<SizeLgStateDefaulticonNone className={styles.btn_15} children={{}} /></div></div>
<HeaderDefault className={styles.header_default_15} /></div></div>);
}

export default CorporateRecCandidatesView2;
