import Header from "@components/molecules/Header";
import Property1Off from "@components/molecules/Property1Off";
import Property1On from "@components/molecules/Property1On";
import { Text } from "@components/atoms/Text";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import IcLinemorevertical from "@components/molecules/IcLinemorevertical";
import Property1Default from "@components/molecules/Property1Default";
import IcMore from "@components/molecules/IcMore";
import IcLineright from "@components/molecules/IcLineright";
import AdminHeader from "@components/molecules/AdminHeader";
import Tooltipnavy from "@components/molecules/Tooltipnavy";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorMembersListProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorMembersList (props: AdministratorMembersListProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1669356670851} ><div className={styles.frame_42731887957} ><div className={styles.frame_4273188784} ><div className={styles.frame_4273188804} ><Header className={styles.header_4} /></div></div>
<div className={styles.frame_42731883957} ><div className={styles.meutaskdetail_6} ><Property1Off className={styles.task_menu_button_6} />
<Property1On className={styles.task_menu_button_6} /></div>
<div className={styles.frame_42731888157} ><div className={styles.frame_4273190419} ><Text textType='Text' className={styles.text_9} >{'メンバーリスト'}</Text>
<SizeLgStateDefaulticonprefix className={styles.btn_9} /></div>
<div className={styles.frame_42731887746} ><div className={styles.table_record_18} ><div className={styles.container_17} ><div className={styles.text_area_17} ><div className={styles.frame_777915} ><Text textType='Text' className={styles.text_15} >{'名前'}</Text></div>
<div className={styles.frame_42731888017} ><Text textType='Text' className={styles.text_15} >{'メールアドレス'}</Text></div></div></div>
<div className={styles.line_2118} /></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_25} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'山田 太郎'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'example@sample.com'}</Text></div></div>
<div className={styles.frame_797727} ><div className={styles.btn_area_27} ><IcLinemorevertical className={styles.ic_linemorevertical_27} /></div></div></div></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_25} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'山田 太郎'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'example@sample.com'}</Text></div></div>
<div className={styles.frame_797727} ><div className={styles.btn_area_27} ><IcLinemorevertical className={styles.ic_linemorevertical_27} /></div></div></div></div>
<div className={styles.table_record_27} ><div className={styles.container_27} ><div className={styles.text_area_25} ><div className={styles.frame_763623} ><Text textType='Text' className={styles.text_23} >{'山田 太郎'}</Text></div>
<div className={styles.frame_778325} ><Text textType='Text' className={styles.text_25} >{'example@sample.com'}</Text></div></div>
<div className={styles.frame_797727} ><div className={styles.btn_area_27} ><IcLinemorevertical className={styles.ic_linemorevertical_27} /></div></div></div></div>
<div className={styles.dialog_select_46} ><Property1Default className={styles.listbutton_46} /></div></div>
<div className={styles.pagination_57} ><div className={styles.paging_btnon_49} ><Text textType='Text' className={styles.text_49} >{'1'}</Text></div>
<div className={styles.paging_btnoff_51} ><Text textType='Text' className={styles.text_49} >{'2'}</Text></div>
<div className={styles.paging_btnoff_51} ><Text textType='Text' className={styles.text_49} >{'3'}</Text></div>
<div className={styles.paging_btnoff_51} ><IcMore className={styles.ic_more_54} /></div>
<div className={styles.paging_btnoff_51} ><Text textType='Text' className={styles.text_49} >{'30'}</Text></div>
<div className={styles.paging_btnoff_51} ><IcLineright className={styles.ic_more_54} /></div></div></div></div></div>
<AdminHeader className={styles.header_inner_57} />
<Tooltipnavy className={styles.tooltipnavy_57} /></div></div>);
}

export default AdministratorMembersList;
