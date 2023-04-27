import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import IcLinehamburger from "@components/molecules/IcLinehamburger";
import Divider from "@components/molecules/Divider";
import IcFilledsignboard from "@components/molecules/IcFilledsignboard";
import IcFilledinvoice from "@components/molecules/IcFilledinvoice";
import Property1SubProperty2Normal from "@components/molecules/Property1SubProperty2Normal";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SideNavbarProps = DefaultPageProps & {
  className?: string;
  }

function SideNavbar (props: SideNavbarProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667211072474} ><div className={styles.frame_42731883441} ><div className={styles.frame_726126} ><div className={styles.frame_42731883314} ><Image sourceType='upload' className={styles.image_14} src={assets('1667211072301-png')} alt='Image14' /></div>
<div className={styles.frame_726226} ><div className={styles.frame_42731883222} ><div className={styles.frame_42731883121} ><div className={styles.frame_42731882919} ><Text textType='Text' className={styles.text_19} >{'中途'}</Text></div>
<div className={styles.frame_42731883021} ><Text textType='Text' className={styles.text_19} >{'エンタメ'}</Text></div></div>
<Text textType='Text' className={styles.text_22} >{'人気Youtuberと一緒にエンタメ業界を盛り上げる！正社員募集！'}</Text></div>
<div className={styles.line_123} />
<div className={styles.frame_726126} ><Image sourceType='upload' className={styles.image_25} src={assets('1667211072354-png')} alt='Image25' />
<Text textType='Text' className={styles.text_26} >{'株式会社Entertainment'}</Text></div></div></div>
<div className={styles.frame_726226} ><div className={styles.frame_42731883314} ><Image sourceType='upload' className={styles.image_14} src={assets('1667211072363-png')} alt='Image29' /></div>
<div className={styles.frame_726226} ><div className={styles.frame_42731883222} ><div className={styles.frame_42731883121} ><div className={styles.frame_42731882919} ><Text textType='Text' className={styles.text_19} >{'中途'}</Text></div>
<div className={styles.frame_42731883021} ><Text textType='Text' className={styles.text_19} >{'エンタメ'}</Text></div></div>
<Text textType='Text' className={styles.text_22} >{'人気Youtuberと一緒にエンタメ業界を盛り上げる！正社員募集！'}</Text></div>
<div className={styles.line_123} />
<div className={styles.frame_726126} ><Image sourceType='upload' className={styles.image_25} src={assets('1667211072397-png')} alt='Image40' />
<Text textType='Text' className={styles.text_26} >{'株式会社Entertainment'}</Text></div></div></div></div>
<div className={styles.searchbar_44} ><div className={styles.frame_42731881744} ><Text textType='Text' className={styles.text_44} >{'Luf Job'}</Text>
<IcLinehamburger className={styles.ic_linehamburger_44} /></div>
<Divider className={styles.divider_44} /></div>
<div className={styles.rectangle_845} />
<div className={styles.sidemenuprod_71} ><div className={styles.sidemenu_71} ><div className={styles.mypage_link_50} ><Text textType='Text' className={styles.text_49} >{'野田 太郎 様'}</Text>
<Text textType='Text' className={styles.text_50} >{'会員ID: 0233223'}</Text></div>
<div className={styles.menu_list_71} ><div className={styles.main_menu_66} ><div className={styles.sidemenu_list_57} ><div className={styles.selected_54} />
<div className={styles.flame_57} ><div className={styles.inner_57} ><IcFilledsignboard className={styles.ic_filledsignboard_56} />
<Text textType='Text' className={styles.text_57} >{'募集検索・一覧'}</Text></div></div></div>
<div className={styles.sidemenu_list_63} ><div className={styles.inner_63} ><div className={styles.ic_filledsignboard_56} ><Image sourceType='upload' className={styles.image_61} src={assets('1667211072420-svg')} alt='Image61' />
<Image sourceType='upload' className={styles.image_62} src={assets('1667211072422-svg')} alt='Image62' /></div>
<Text textType='Text' className={styles.text_63} >{'メッセージ'}</Text></div></div>
<div className={styles.sidemenu_list_63} ><div className={styles.inner_63} ><IcFilledinvoice className={styles.ic_filledsignboard_56} />
<Text textType='Text' className={styles.text_63} >{'マイページ'}</Text></div></div></div>
<Divider className={styles.divider_66} />
<div className={styles.dividerlinehorizontal_67} />
<div className={styles.sub_menu_71} ><div className={styles.sidemenu_list_71} ><div className={styles.frame_756271} ><Text textType='Text' className={styles.text_71} >{'設定'}</Text></div></div>
<Property1SubProperty2Normal className={styles.sidemenu_list_71} />
<Property1SubProperty2Normal className={styles.sidemenu_list_71} /></div>
<Divider className={styles.divider_71} /></div></div>
<Divider className={styles.divider_71} /></div></div></div>);
}

export default SideNavbar;
