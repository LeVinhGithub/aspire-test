import assets from "@assets/index";
import Header from "@components/molecules/Header";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import Property1On from "@components/molecules/Property1On";
import Property1Off from "@components/molecules/Property1Off";
import { Text } from "@components/atoms/Text";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import Image from "next/image";
import StatusDefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/StatusDefaultRequiredFalseQuestionFalseFillFalse";
import Searchtype2 from "@components/molecules/Searchtype2";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import Property1Company from "@components/molecules/Property1Company";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateMyPageProps = DefaultPageProps & {
  className?: string;
  }

function CorporateMyPage (props: CorporateMyPageProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731887911} ><div className={styles.frame_4273188784} ><div className={styles.frame_4273188804} ><Header className={styles.header_1} /></div>
<SizeLgStateDefaulticonprefix className={styles.btn_1} /></div>
<div className={styles.frame_42731883911} ><div className={styles.meutaskdetail_6} ><Property1On className={styles.task_menu_button_1} />
<Property1Off className={styles.task_menu_button_1} />
<Property1Off className={styles.task_menu_button_1} />
<Property1Off className={styles.task_menu_button_1} /></div>
<div className={styles.frame_42731900611} ><Text textType='Text' className={styles.text_8} >{'プロフィールを編集'}</Text>
<div className={styles.frame_42731905611} ><div className={styles.text_field_11} ><TextFieldTitle className={styles.text_field_title_1} />
<Image sourceType='upload' className={styles.image_11} src={assets('1671437608431-png')} alt='Image11' /></div>
<StatusDefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_1} />
<Searchtype2 className={styles.searchtype_21} /></div>
<SizeLgStateDefaulticonNone className={styles.btn_1} /></div></div></div>
<Property1Company className={styles.header_1} /></div>);
}

export default CorporateMyPage;
