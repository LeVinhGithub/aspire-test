import assets from "@assets/index";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Iconman from "@components/molecules/Iconman";
import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import Loginstate from "@components/molecules/Loginstate";
import IcLinemorehorizontal from "@components/molecules/IcLinemorehorizontal";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import SizeLgStateNormaliconNone from "@components/molecules/SizeLgStateNormaliconNone";
import Image from "next/image";
import Illustrationpreview from "@components/molecules/Illustrationpreview";
import Stateon from "@components/molecules/Stateon";
import Stateoff from "@components/molecules/Stateoff";
import Divider from "@components/molecules/Divider";
import Paragraphpattern2 from "@components/molecules/Paragraphpattern2";
import Property1Company from "@components/molecules/Property1Company";
import BtnIcon from "@components/molecules/BtnIcon";
import Divider1 from "@components/molecules/Divider1";
import SearchBoxselect from "@components/molecules/SearchBoxselect";
import SizeLgStateDisableiconNone from "@components/molecules/SizeLgStateDisableiconNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SendScoutMessageProps = DefaultPageProps & {
  className?: string;
  }

function SendScoutMessage (props: SendScoutMessageProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731902218} ><div className={styles.frame_4273190359} ><div className={styles.frame_4273190038} ><IcLineArrowleft className={styles.ic_line_arrowleft_1} />
<Iconman className={styles.iconman_1} />
<div className={styles.frame_4273188807} ><div className={styles.frame_4273190237} ><Header className={styles.header_1} />
<Text textType='Text' className={styles.text_7} >{'株式会社DeNA'}</Text></div>
<Loginstate className={styles.loginstate_1} /></div>
<div className={styles.btn_icon_8} ><IcLinemorehorizontal className={styles.ic_linemorehorizontal_1} /></div></div>
<div className={styles.frame_4273190199} ><SizeLgStateDefaulticonNone className={styles.btn_1} />
<SizeLgStateNormaliconNone className={styles.btn_1} /></div></div>
<div className={styles.frame_42731903418} ><div className={styles.group_414} ><Image sourceType='upload' className={styles.image_12} src={assets('1672728953543-png')} alt='Image12' />
<div className={styles.image_313} />
<div className={styles.frame_42731904014} ><Illustrationpreview className={styles.illustrationpreview_1} /></div></div>
<div className={styles.body_18} ><div className={styles.head_17} ><div className={styles.main_menu_17} ><Stateon className={styles.sidemenu_list_1} />
<Stateoff className={styles.sidemenu_list_1} />
<Stateoff className={styles.sidemenu_list_1} />
<Stateoff className={styles.sidemenu_list_1} /></div>
<Divider className={styles.divider_1} /></div>
<div className={styles.frame_42731897118} ><Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} />
<Paragraphpattern2 className={styles.paragraphpattern_21} /></div></div></div></div>
<Property1Company className={styles.header_1} />
<div className={styles.frame_42731902431} ><div className={styles.frame_42731902731} ><div className={styles.frame_42731902523} ><div className={styles.frame_42731902923} ><Text textType='Text' className={styles.text_23} >{'スカウトを送る'}</Text>
<BtnIcon className={styles.btn_icon_1} /></div>
<Divider1 className={styles.divider_1} /></div>
<div className={styles.frame_42731902625} ><Text textType='Text' className={styles.text_25} >{'添付する求人'}</Text>
<SearchBoxselect className={styles.search_boxselect_1} /></div>
<div className={styles.frame_42731902625} ><Text textType='Text' className={styles.text_25} >{'求人テンプレート'}</Text>
<SearchBoxselect className={styles.search_boxselect_1} /></div>
<div className={styles.frame_42731902831} ><Text textType='Text' className={styles.text_25} >{'スカウト文面'}</Text>
<div className={styles.search_boxselect_31} ><Text textType='Text' className={styles.text_31} >{'入力してください'}</Text></div></div>
<SizeLgStateDisableiconNone className={styles.btn_1} /></div></div></div>);
}

export default SendScoutMessage;
