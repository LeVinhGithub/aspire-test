import Searchbar from "@components/molecules/Searchbar";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type DefaultHeaderProps = DefaultPageProps & {
  className?: string;
  }

function DefaultHeader (props: DefaultHeaderProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.header_0} ${props.className}`} ><Searchbar className={styles.searchbar_1} /></div>);
}

export default DefaultHeader;
