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
import Stateoff from "@components/molecules/Stateoff";
import Stateon from "@components/molecules/Stateon";
import Divider from "@components/molecules/Divider";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Screen1667376823176Props = DefaultPageProps & {
  className?: string;
  }

function Screen1667376823176 (props: Screen1667376823176Props): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667376823176} ><div className={styles.frame_42731902220} ><div className={styles.frame_4273190359} ><div className={styles.frame_4273190038} ><IcLineArrowleft className={styles.ic_line_arrowleft_4} />
<Iconman className={styles.iconman_4} />
<div className={styles.frame_4273188807} ><div className={styles.frame_4273190237} ><Header className={styles.header_6} />
<Text textType='Text' className={styles.text_7} >{'株式会社DeNA'}</Text></div>
<Loginstate className={styles.loginstate_7} /></div>
<div className={styles.btn_icon_8} ><IcLinemorehorizontal className={styles.ic_linemorehorizontal_8} /></div></div>
<div className={styles.frame_4273190199} ><SizeLgStateDefaulticonNone className={styles.btn_9} children={{}} />
<SizeLgStateNormaliconNone className={styles.btn_9} /></div></div>
<div className={styles.frame_42731903420} ><div className={styles.group_414} ><Image sourceType='upload' className={styles.image_12} src={assets('1667376823091-png')} alt='Image12' />
<div className={styles.image_313} />
<div className={styles.frame_42731904014} ><Illustrationpreview className={styles.illustrationpreview_14} /></div></div>
<div className={styles.body_20} ><div className={styles.head_17} ><div className={styles.main_menu_17} ><Stateoff className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} />
<Stateoff className={styles.sidemenu_list_17} />
<Stateon className={styles.sidemenu_list_17} /></div>
<Divider className={styles.divider_17} /></div>
<div className={styles.frame_42731897120} ><div className={styles.paragraphpattern_220} ><Text textType='Text' className={styles.text_20} >{'評価メモはありません'}</Text></div>
<SizeLgStateDefaulticonNone className={styles.btn_20} children={{}} /></div></div></div></div>
<HeaderDefault className={styles.header_default_20} /></div></div>);
}

export default Screen1667376823176;
