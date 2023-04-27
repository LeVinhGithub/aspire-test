import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchBoxfreewordProps = DefaultPageProps & {
  className?: string;
  }

function SearchBoxfreeword (props: SearchBoxfreewordProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.assets_49} ><Text textType='Text' className={styles.text_45} >{'企業名を入力'}</Text></div></div>);
}

export default SearchBoxfreeword;
