import Switcheditmode from "@components/molecules/Switcheditmode";
import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import SizeLgStateNormaliconNone from "@components/molecules/SizeLgStateNormaliconNone";
import Boxpeople from "@components/molecules/Boxpeople";
import IcMore from "@components/molecules/IcMore";
import IcLineright from "@components/molecules/IcLineright";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateSearchResultsSetProps = DefaultPageProps & {
  className?: string;
  }

function CorporateSearchResultsSet (props: CorporateSearchResultsSetProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667376625277} ><div className={styles.frame_42731901423} ><Switcheditmode className={styles.switcheditmode_2} />
<div className={styles.frame_42731904823} ><Header className={styles.header_3} />
<div className={styles.frame_42731904623} ><div className={styles.frame_42731900711} ><div className={styles.frame_4273190129} ><div className={styles.frame_4273188808} ><Text textType='Text' className={styles.text_8} >{'検索条件'}</Text></div>
<Text textType='Text' className={styles.text_9} >{'経験職種：プロダクトマネジャー, 最終学歴：大学 他5件'}</Text></div>
<div className={styles.frame_42731901311} ><Text textType='Text' className={styles.text_11} >{'213件の人材'}</Text>
<SizeLgStateNormaliconNone className={styles.btn_11} /></div></div>
<div className={styles.frame_42731902123} ><Boxpeople className={styles.boxpeople_12} image={{}} description={{}} new_prop_baQo={{}} />
<Boxpeople className={styles.boxpeople_12} image={{}} description={{}} new_prop_baQo={{}} />
<div className={styles.pagination_23} ><div className={styles.paging_btnon_15} ><Text textType='Text' className={styles.text_15} >{'1'}</Text></div>
<div className={styles.paging_btnoff_17} ><Text textType='Text' className={styles.text_15} >{'2'}</Text></div>
<div className={styles.paging_btnoff_17} ><Text textType='Text' className={styles.text_15} >{'3'}</Text></div>
<div className={styles.paging_btnoff_17} ><IcMore className={styles.ic_more_20} /></div>
<div className={styles.paging_btnoff_17} ><Text textType='Text' className={styles.text_15} >{'30'}</Text></div>
<div className={styles.paging_btnoff_17} ><IcLineright className={styles.ic_more_20} /></div></div></div></div></div></div>
<HeaderDefault className={styles.header_default_23} /></div></div>);
}

export default CorporateSearchResultsSet;
