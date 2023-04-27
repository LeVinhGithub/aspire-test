import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import IcLinedown from "@components/molecules/IcLinedown";
import IcLinesearch from "@components/molecules/IcLinesearch";
import SizeLgStateDefaulticonprefix from "@components/molecules/SizeLgStateDefaulticonprefix";
import TableRecord from "@components/molecules/TableRecord";
import HeaderDefault from "@components/molecules/HeaderDefault";
import Sidemenuprod from "@components/molecules/Sidemenuprod";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Screen1667376970672Props = DefaultPageProps & {
  className?: string;
  }

function Screen1667376970672 (props: Screen1667376970672Props): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667376970672} ><div className={styles.frame_42731887910} ><div className={styles.frame_4273188789} ><div className={styles.frame_4273188809} ><Header className={styles.header_4} />
<div className={styles.frame_79349} ><div className={styles.frame_79317} ><Text textType='Text' className={styles.text_7} >{'ステータス'}</Text>
<IcLinedown className={styles.ic_linedown_7} /></div>
<div className={styles.search_9} ><IcLinesearch className={styles.ic_linedown_7} />
<Text textType='Text' className={styles.text_9} >{'タイトルで検索'}</Text></div></div></div>
<SizeLgStateDefaulticonprefix className={styles.btn_9} /></div>
<div className={styles.frame_42731887710} ><TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} />
<TableRecord className={styles.table_record_10} /></div></div>
<HeaderDefault className={styles.header_default_10} />
<Sidemenuprod className={styles.sidemenuprod_10} /></div></div>);
}

export default Screen1667376970672;
