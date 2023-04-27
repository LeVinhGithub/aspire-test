import assets from "@assets/index";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Iconman from "@components/molecules/Iconman";
import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import Loginstate from "@components/molecules/Loginstate";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import SizeLgStateNormaliconNone from "@components/molecules/SizeLgStateNormaliconNone";
import Image from "next/image";
import Illustrationpreview from "@components/molecules/Illustrationpreview";
import Stateon from "@components/molecules/Stateon";
import Stateoff from "@components/molecules/Stateoff";
import Divider from "@components/molecules/Divider";
import Paragraphpattern2 from "@components/molecules/Paragraphpattern2";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Screen1667376799747Props = DefaultPageProps & {
  className?: string;
  }

function Screen1667376799747 (props: Screen1667376799747Props): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667376799747} ><div className={styles.frame_42731902217} ><div className={styles.frame_4273188788} ><div className={styles.frame_4273190037} ><IcLineArrowleft className={styles.ic_line_arrowleft_4} />
<Iconman className={styles.iconman_4} />
<div className={styles.frame_4273188807} ><div className={styles.frame_4273190237} ><Header className={styles.header_6} />
<Text textType='Text' className={styles.text_7} >{'株式会社DeNA'}</Text></div>
<Loginstate className={styles.loginstate_7} /></div></div>
<div className={styles.frame_4273190198} ><SizeLgStateDefaulticonNone className={styles.btn_8} children={{}} />
<SizeLgStateNormaliconNone className={styles.btn_8} /></div></div>
<div className={styles.frame_42731903417} ><div className={styles.group_413} ><Image sourceType='upload' className={styles.image_11} src={assets('1667376799603-png')} alt='Image11' />
<div className={styles.image_312} />
<div className={styles.frame_42731904013} ><Illustrationpreview className={styles.illustrationpreview_13} /></div></div>
<div className={styles.body_17} ><div className={styles.head_16} ><div className={styles.main_menu_16} ><Stateon className={styles.sidemenu_list_16} />
<Stateoff className={styles.sidemenu_list_16} />
<Stateoff className={styles.sidemenu_list_16} />
<Stateoff className={styles.sidemenu_list_16} /></div>
<Divider className={styles.divider_16} /></div>
<div className={styles.frame_42731897117} ><Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_217} marginTop={{}} label={{}} value={{}} /></div></div></div></div>
<HeaderDefault className={styles.header_default_17} />
<div className={styles.rectangle_2518} />
<Image sourceType='upload' className={styles.image_19} src={assets('1667376799640-png')} alt='Image19' /></div></div>);
}

export default Screen1667376799747;
