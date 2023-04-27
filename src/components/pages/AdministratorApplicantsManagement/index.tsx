import Header from "@components/molecules/Header";
import IcLinesearch from "@components/molecules/IcLinesearch";
import { Text } from "@components/atoms/Text";
import IcMore from "@components/molecules/IcMore";
import IcLineright from "@components/molecules/IcLineright";
import AdminHeader from "@components/molecules/AdminHeader";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorApplicantsManagementProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorApplicantsManagement (props: AdministratorApplicantsManagementProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1668085261115} ><div className={styles.frame_42731887955} ><div className={styles.frame_4273188805} ><Header className={styles.header_3} />
<div className={styles.search_5} ><IcLinesearch className={styles.ic_linesearch_4} />
<Text textType='Text' className={styles.text_5} >{'応募者名で検索'}</Text></div></div>
<div className={styles.frame_42731888155} ><div className={styles.frame_42731887744} ><div className={styles.table_record_15} ><div className={styles.container_14} ><div className={styles.text_area_14} ><div className={styles.frame_777912} ><Text textType='Text' className={styles.text_12} >{'応募者ID'}</Text></div>
<div className={styles.frame_42731888014} ><Text textType='Text' className={styles.text_12} >{'応募者名'}</Text></div></div></div>
<div className={styles.line_2115} /></div>
<div className={styles.table_record_23} ><div className={styles.container_23} ><div className={styles.text_area_23} ><div className={styles.frame_763620} ><Text textType='Text' className={styles.text_20} >{'1'}</Text></div>
<div className={styles.frame_778322} ><Text textType='Text' className={styles.text_22} >{'新島 賢人'}</Text></div>
<div className={styles.frame_763723} /></div></div></div>
<div className={styles.table_record_23} ><div className={styles.container_23} ><div className={styles.text_area_23} ><div className={styles.frame_763620} ><Text textType='Text' className={styles.text_20} >{'2'}</Text></div>
<div className={styles.frame_778322} ><Text textType='Text' className={styles.text_22} >{'小林 太郎'}</Text></div></div></div></div>
<div className={styles.table_record_23} ><div className={styles.container_23} ><div className={styles.text_area_23} ><div className={styles.frame_763620} ><Text textType='Text' className={styles.text_20} >{'3'}</Text></div>
<div className={styles.frame_778322} ><Text textType='Text' className={styles.text_22} >{'田川 のりこ'}</Text></div></div></div></div>
<div className={styles.table_record_23} ><div className={styles.container_23} ><div className={styles.text_area_23} ><div className={styles.frame_763620} ><Text textType='Text' className={styles.text_20} >{'4'}</Text></div>
<div className={styles.frame_778322} ><Text textType='Text' className={styles.text_22} >{'小松 次郎'}</Text></div></div></div></div></div>
<div className={styles.pagination_55} ><div className={styles.paging_btnon_47} ><Text textType='Text' className={styles.text_47} >{'1'}</Text></div>
<div className={styles.paging_btnoff_49} ><Text textType='Text' className={styles.text_47} >{'2'}</Text></div>
<div className={styles.paging_btnoff_49} ><Text textType='Text' className={styles.text_47} >{'3'}</Text></div>
<div className={styles.paging_btnoff_49} ><IcMore className={styles.ic_more_52} /></div>
<div className={styles.paging_btnoff_49} ><Text textType='Text' className={styles.text_47} >{'30'}</Text></div>
<div className={styles.paging_btnoff_49} ><IcLineright className={styles.ic_more_52} /></div></div></div></div>
<AdminHeader className={styles.header_inner_55} /></div></div>);
}

export default AdministratorApplicantsManagement;
