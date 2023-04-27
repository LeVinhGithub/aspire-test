import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TableRecordrecommenditemProps = DefaultPageProps & {
  className?: string;
  }

function TableRecordrecommenditem (props: TableRecordrecommenditemProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.container_87} ><div className={styles.text_area_87} ><Image sourceType='upload' className={styles.image_72} src={assets('1667376911489-png')} alt='Image72' />
<div className={styles.frame_777975} ><div className={styles.taggeneric_75} ><Text textType='Text' className={styles.text_75} >{'募集中'}</Text></div></div>
<div className={styles.frame_763677} ><Text textType='Text' className={styles.text_77} >{'2022/09/20'}</Text></div>
<div className={styles.frame_778379} ><Text textType='Text' className={styles.text_79} >{'株式会社MINT'}</Text></div>
<div className={styles.frame_763781} ><Text textType='Text' className={styles.text_79} >{'エンタメ業界を盛り上げる！正社員募集！'}</Text></div>
<div className={styles.frame_778183} ><Text textType='Text' className={styles.text_83} >{'265'}</Text></div>
<div className={styles.frame_778285} ><Text textType='Text' className={styles.text_83} >{'3'}</Text></div>
<div className={styles.switch_87} ><div className={styles.frame_42731865087} /></div></div></div></div>);
}

export default TableRecordrecommenditem;
