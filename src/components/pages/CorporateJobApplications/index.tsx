import { Text } from "@components/atoms/Text";
import Boxentry from "@components/molecules/Boxentry";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateJobApplicationsProps = DefaultPageProps & {
  className?: string;
  }

function CorporateJobApplications (props: CorporateJobApplicationsProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1672693912361} ><div className={styles.frame_42731904815} ><Text textType='Text' className={styles.text_3} >{'45 名の候補者がいます！'}</Text>
<div className={styles.frame_42731902115} ><Boxentry className={styles.boxentry_1} /></div></div></div></div>);
}

export default CorporateJobApplications;
