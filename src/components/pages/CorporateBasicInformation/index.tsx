import assets from "@assets/index";
import HeaderDefault from "@components/molecules/HeaderDefault";
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
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateBasicInformationProps = DefaultPageProps & {
  className?: string;
  }

function CorporateBasicInformation (props: CorporateBasicInformationProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><HeaderDefault className={styles.header_default_18} />
<div className={styles.inner_container_1667376673213} ><div className={styles.frame_42731902218} ><div className={styles.frame_4273190359} ><div className={styles.frame_4273190038} ><IcLineArrowleft className={styles.ic_line_arrowleft_4} />
<Iconman className={styles.iconman_4} />
<div className={styles.frame_4273188807} ><div className={styles.frame_4273190237} ><Header className={styles.header_6} />
<Text textType='Text' className={styles.text_7} >{'株式会社DeNA'}</Text></div>
<Loginstate className={styles.loginstate_7} /></div>
<div className={styles.btn_icon_8} ><IcLinemorehorizontal className={styles.ic_linemorehorizontal_8} /></div></div>
<div className={styles.frame_4273190199} ><SizeLgStateDefaulticonNone className={styles.btn_9} children={{}} />
<SizeLgStateNormaliconNone className={styles.btn_9} /></div></div>
<div className={styles.frame_42731903418} ><div className={styles.group_414} ><Image sourceType='upload' className={styles.image_12} src={assets('1667376673123-png')} alt='Image12' />
<div className={styles.image_313} />
<div className={styles.frame_42731904014} ><Illustrationpreview className={styles.illustrationpreview_14} /></div></div>
<div className={styles.body_18} ><div className={styles.head_17} ><div className={styles.main_menu_17} ><Stateon className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} /></div>
<Divider className={styles.divider_17} /></div>
<div className={styles.frame_42731897118} ><Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_218} marginTop={{}} label={{}} value={{}} /></div></div></div></div></div></div>);
}

export default CorporateBasicInformation;
