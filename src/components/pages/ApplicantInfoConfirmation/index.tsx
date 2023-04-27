import Property1Detail from "@components/molecules/Property1Detail";
import Paragraphpattern2 from "@components/molecules/Paragraphpattern2";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ApplicantInfoConfirmationProps = DefaultPageProps & {
  className?: string;
  }

function ApplicantInfoConfirmation (props: ApplicantInfoConfirmationProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189035} ><div className={styles.frame_4273189023} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_4273188625} ><div className={styles.frame_4273188625} ><Paragraphpattern2 className={styles.paragraphpattern_25} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_25} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_25} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_25} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_25} marginTop={{}} label={{}} value={{}} /></div></div></div>
<div className={styles.frame_4273188566} ><ButtonActive className={styles.btn_6} children={{}} /></div></div>);
}

export default ApplicantInfoConfirmation;
