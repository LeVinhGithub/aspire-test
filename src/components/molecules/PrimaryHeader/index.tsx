import { Text } from "@components/atoms/Text";
import IcLinehamburger from "@components/molecules/IcLinehamburger";
import Logo from "@components/molecules/Logo";
import Icpeople from "@components/molecules/Icpeople";
import Icmessage from "@components/molecules/Icmessage";
import Divider from "@components/molecules/Divider";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type PrimaryHeaderProps = DefaultPageProps & {
  className?: string;
  title: string;
hasGoBackIcon: boolean;
}

function PrimaryHeader (props: PrimaryHeaderProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_4273188172} ><Text textType='Text' className={styles.text_1} >{props.title}</Text>
<IcLinehamburger className={styles.ic_linehamburger_2} />
<Logo className={styles.logo_2} />
<div className={styles.frame_4273188753} ><Icpeople className={styles.icpeople_3} />
<Icmessage className={styles.icmessage_3} /></div></div>
<Divider className={styles.divider_2} /></div>);
}

export default PrimaryHeader;
