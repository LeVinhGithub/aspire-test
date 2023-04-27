import Header from "@components/molecules/Header";
import IcLinesearch from "@components/molecules/IcLinesearch";
import { Text } from "@components/atoms/Text";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import IcMore from "@components/molecules/IcMore";
import IcLineright from "@components/molecules/IcLineright";
import AdminHeader from "@components/molecules/AdminHeader";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorCompanyUsersListProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorCompanyUsersList (props: AdministratorCompanyUsersListProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1668084693282} ><div className={styles.frame_42731887956} ><div className={styles.frame_4273188786} ><div className={styles.frame_4273188806} ><Header className={styles.header_4} />
<div className={styles.search_6} ><IcLinesearch className={styles.ic_linesearch_5} />
<Text textType='Text' className={styles.text_6} >{'企業名で検索'}</Text></div></div>
<SizeLgStateDefaulticonprefix className={styles.btn_6} /></div>
<div className={styles.frame_42731888156} ><div className={styles.frame_42731887745} ><div className={styles.table_record_16} ><div className={styles.container_15} ><div className={styles.text_area_15} ><div className={styles.frame_777913} ><Text textType='Text' className={styles.text_13} >{'企業ID'}</Text></div>
<div className={styles.frame_42731888015} ><Text textType='Text' className={styles.text_13} >{'企業名'}</Text></div></div></div>
<div className={styles.line_2116} /></div>
<div className={styles.table_record_24} ><div className={styles.container_24} ><div className={styles.text_area_24} ><div className={styles.frame_763621} ><Text textType='Text' className={styles.text_21} >{'co-120399'}</Text></div>
<div className={styles.frame_778323} ><Text textType='Text' className={styles.text_23} >{'ABC株式会社'}</Text></div>
<div className={styles.frame_763724} /></div></div></div>
<div className={styles.table_record_24} ><div className={styles.container_24} ><div className={styles.text_area_24} ><div className={styles.frame_763621} ><Text textType='Text' className={styles.text_21} >{'co-230402'}</Text></div>
<div className={styles.frame_778323} ><Text textType='Text' className={styles.text_23} >{'DEF株式会社'}</Text></div></div></div></div>
<div className={styles.table_record_24} ><div className={styles.container_24} ><div className={styles.text_area_24} ><div className={styles.frame_763621} ><Text textType='Text' className={styles.text_21} >{'co-320392'}</Text></div>
<div className={styles.frame_778323} ><Text textType='Text' className={styles.text_23} >{'GHI株式会社'}</Text></div></div></div></div>
<div className={styles.table_record_24} ><div className={styles.container_24} ><div className={styles.text_area_24} ><div className={styles.frame_763621} ><Text textType='Text' className={styles.text_21} >{'co-822392'}</Text></div>
<div className={styles.frame_778323} ><Text textType='Text' className={styles.text_23} >{'XYZ株式会社'}</Text></div></div></div></div></div>
<div className={styles.pagination_56} ><div className={styles.paging_btnon_48} ><Text textType='Text' className={styles.text_48} >{'1'}</Text></div>
<div className={styles.paging_btnoff_50} ><Text textType='Text' className={styles.text_48} >{'2'}</Text></div>
<div className={styles.paging_btnoff_50} ><Text textType='Text' className={styles.text_48} >{'3'}</Text></div>
<div className={styles.paging_btnoff_50} ><IcMore className={styles.ic_more_53} /></div>
<div className={styles.paging_btnoff_50} ><Text textType='Text' className={styles.text_48} >{'30'}</Text></div>
<div className={styles.paging_btnoff_50} ><IcLineright className={styles.ic_more_53} /></div></div></div></div>
<AdminHeader className={styles.header_inner_56} /></div></div>);
}

export default AdministratorCompanyUsersList;
