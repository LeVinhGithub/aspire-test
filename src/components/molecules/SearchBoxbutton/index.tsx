import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchBoxbuttonProps = DefaultPageProps & {
  className?: string;
  }

function SearchBoxbutton (props: SearchBoxbuttonProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_42} >{'OR条件を追加'}</Text></div>);
}

export default SearchBoxbutton;
