import HeaderInner from "@components/molecules/HeaderInner";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import { Text } from "@components/atoms/Text";
import Property1On from "@components/molecules/Property1On";
import Property1Off from "@components/molecules/Property1Off";
import Divider from "@components/molecules/Divider";
import Paragraphpattern2 from "@components/molecules/Paragraphpattern2";
import SizeMdStateNormaliconNone from "@components/molecules/SizeMdStateNormaliconNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorCompanyDetailsProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorCompanyDetails (props: AdministratorCompanyDetailsProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><HeaderInner className={styles.header_inner_1} />
<div className={styles.frame_42731903812} ><div className={styles.title_4} ><IcLineArrowleft className={styles.ic_line_arrowleft_1} />
<Text textType='Text' className={styles.text_4} >{'戻る'}</Text></div>
<div className={styles.frame_42731883912} ><div className={styles.meutaskdetail_6} ><Property1On className={styles.task_menu_button_1} />
<Property1Off className={styles.task_menu_button_1} /></div>
<div className={styles.element_12} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'基本情報'}</Text></div>
<Divider className={styles.divider_1} /></div>
<div className={styles.frame_42731904012} ><div className={styles.frame_42731903912} ><Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} /></div>
<SizeMdStateNormaliconNone className={styles.btn_1} /></div></div></div></div></div>);
}

export default AdministratorCompanyDetails;
