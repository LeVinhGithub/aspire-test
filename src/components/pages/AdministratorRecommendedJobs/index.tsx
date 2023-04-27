import Header from "@components/molecules/Header";
import IcLinesearch from "@components/molecules/IcLinesearch";
import { Text } from "@components/atoms/Text";
import SelectBox from "@components/molecules/SelectBox";
import TableRecord from "@components/molecules/TableRecord";
import TableRecordrecommenditem from "@components/molecules/TableRecordrecommenditem";
import AdminHeader from "@components/molecules/AdminHeader";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorRecommendedJobsProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorRecommendedJobs (props: AdministratorRecommendedJobsProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1668085103870} ><div className={styles.frame_4273188797} ><div className={styles.frame_4273188806} ><Header className={styles.header_3} />
<div className={styles.frame_79346} ><div className={styles.search_6} ><IcLinesearch className={styles.ic_linesearch_5} />
<Text textType='Text' className={styles.text_6} >{'タイトルで検索'}</Text></div>
<SelectBox className={styles.select_box_6} /></div></div>
<div className={styles.frame_4273188777} ><TableRecord className={styles.table_record_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} /></div></div>
<AdminHeader className={styles.header_inner_7} /></div></div>);
}

export default AdministratorRecommendedJobs;
