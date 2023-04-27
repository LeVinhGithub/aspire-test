import AdminHeader from "@components/molecules/AdminHeader";
import Header from "@components/molecules/Header";
import IcLinesearch from "@components/molecules/IcLinesearch";
import { Text } from "@components/atoms/Text";
import SelectBox from "@components/molecules/SelectBox";
import TableRecord from "@components/molecules/TableRecord";
import TableRecordrecommenditem from "@components/molecules/TableRecordrecommenditem";
import Action2CoverFalse from "@components/molecules/Action2CoverFalse";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type AdministratorRemoveRecommendedPopupProps = DefaultPageProps & {
  className?: string;
  }

function AdministratorRemoveRecommendedPopup (props: AdministratorRemoveRecommendedPopupProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667376912834} ><AdminHeader className={styles.header_inner_1} />
<div className={styles.frame_4273188797} ><div className={styles.frame_4273188806} ><Header className={styles.header_3} />
<div className={styles.frame_79346} ><div className={styles.search_6} ><IcLinesearch className={styles.ic_linesearch_5} />
<Text textType='Text' className={styles.text_6} >{'タイトルで検索'}</Text></div>
<SelectBox className={styles.select_box_6} /></div></div>
<div className={styles.frame_4273188777} ><TableRecord className={styles.table_record_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} />
<TableRecordrecommenditem className={styles.table_recordrecommenditem_7} /></div></div>
<div className={styles.rectangle_18} />
<Action2CoverFalse className={styles.dialog_8} /></div></div>);
}

export default AdministratorRemoveRecommendedPopup;
