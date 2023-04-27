import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Searchtype2Props = DefaultPageProps & {
  className?: string;
  }

function Searchtype2 (props: Searchtype2Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.text_field_title_27} ><Text className={styles.text_26} >{'募集タイトル'}</Text></div>
<div className={styles.search_boxfreeword_31} ><div className={styles.assets_31} ><Text className={styles.text_31} >{'問わない'}</Text></div></div></div>);
}

export default Searchtype2;
