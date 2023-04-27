import DefaultHeaderMenu from "@components/molecules/DefaultHeaderMenu";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchbarProps = DefaultPageProps & {
  className?: string;
  }

function Searchbar (props: SearchbarProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.molecule_container} ${props.className}`} ><DefaultHeaderMenu className={styles.defaultheadermenu_1} /></div>);
}

export default Searchbar;
