import Property1Detail from "@components/molecules/Property1Detail";
import Paragraphpattern2 from "@components/molecules/Paragraphpattern2";
import ButtonActive from "@components/molecules/ButtonActive";
import SizeMdStateNormaliconNone from "@components/molecules/SizeMdStateNormaliconNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ApplicationDataConfirmationProps = DefaultPageProps & {
  className?: string;
  }

function ApplicationDataConfirmation (props: ApplicationDataConfirmationProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273189037} ><div className={styles.frame_4273189023} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_4273188607} ><div className={styles.frame_4273188637} ><div className={styles.frame_4273188627} ><div className={styles.frame_4273188617} ><Paragraphpattern2 className={styles.paragraphpattern_27} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_27} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_27} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_27} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_27} marginTop={{}} label={{}} value={{}} />
<Paragraphpattern2 className={styles.paragraphpattern_27} marginTop={{}} label={{}} value={{}} /></div>
<ButtonActive className={styles.btn_7} children={{}} /></div>
<SizeMdStateNormaliconNone className={styles.btn_7} /></div></div></div></div>);
}

export default ApplicationDataConfirmation;
