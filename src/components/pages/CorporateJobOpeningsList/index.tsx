import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import IcLinedown from "@components/molecules/IcLinedown";
import IcLinesearch from "@components/molecules/IcLinesearch";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import TableRecord from "@components/molecules/TableRecord";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateJobOpeningsListProps = DefaultPageProps & {
  className?: string;
  }

function CorporateJobOpeningsList (props: CorporateJobOpeningsListProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1671711905095} ><div className={styles.frame_42731887910} ><div className={styles.frame_4273188789} ><div className={styles.frame_4273188809} ><Header className={styles.header_1} />
<div className={styles.frame_79349} ><div className={styles.frame_79317} ><Text textType='Text' className={styles.text_7} >{'ステータス'}</Text>
<IcLinedown className={styles.ic_linedown_1} /></div>
<div className={styles.search_9} ><IcLinesearch className={styles.ic_linedown_1} />
<Text textType='Text' className={styles.text_9} >{'タイトルで検索'}</Text></div></div></div>
<SizeLgStateDefaulticonprefix className={styles.btn_1} /></div>
<div className={styles.frame_42731887710} ><TableRecord className={styles.table_record_1} />
<TableRecord className={styles.table_record_1} />
<TableRecord className={styles.table_record_1} />
<TableRecord className={styles.table_record_1} /></div></div>
<HeaderDefault className={styles.header_1} /></div></div>);
}

export default CorporateJobOpeningsList;
