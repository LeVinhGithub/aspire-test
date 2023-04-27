import assets from "@assets/index";
import PrimaryHeader from "@components/molecules/PrimaryHeader";
import IcLinesearch from "@components/molecules/IcLinesearch";
import { Text } from "@components/atoms/Text";
import IcLinedelete from "@components/molecules/IcLinedelete";
import Image from "next/image";
import Boxrecruiting from "@components/molecules/Boxrecruiting";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type JobOpeningsListProps = DefaultPageProps & {
  className?: string;
  }

function JobOpeningsList (props: JobOpeningsListProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><PrimaryHeader className={styles.primaryheader_1} title={'募集一覧'} hasGoBackIcon={{}} />
<div className={styles.frame_42731884110} ><div className={styles.frame_4273188864} ><IcLinesearch className={styles.ic_linesearch_3} />
<Text textType='Text' className={styles.text_4} >{'条件で検索'}</Text></div>
<div className={styles.frame_42731888810} ><div className={styles.frame_4273188429} ><div className={styles.matching_8} ><Text textType='Text' className={styles.text_8} >{'マッチした募集が72件ありました！
気になる募集を覗いてみましょう！'}</Text>
<IcLinedelete className={styles.ic_linedelete_8} /></div>
<Image sourceType='upload' className={styles.image_9} src={assets('1667197270148-svg')} alt='Image9' /></div>
<div className={styles.frame_42731884110} ><Boxrecruiting className={styles.boxrecruiting_10} image={{}} tags={{}} title={{}} companyName={{}} link={{}} companyLogo={{}} />
<Boxrecruiting className={styles.boxrecruiting_10} image={{}} tags={{}} title={{}} companyName={{}} link={{}} companyLogo={{}} /></div></div></div></div>);
}

export default JobOpeningsList;
