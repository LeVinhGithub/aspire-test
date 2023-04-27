import IcLinesearch from "@components/molecules/IcLinesearch";
import { Input } from "@components/atoms/Input";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchInputProps = DefaultPageProps & {
  className?: string;
  value: string;
onChange: any;
}

function SearchInput (props: SearchInputProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><IcLinesearch className={styles.ic_linesearch_1} />
<Input placeholder={'条件で検索'} className={styles.value} inputStyle={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0)", fontWeight: "500"}} /></div>);
}

export default SearchInput;
