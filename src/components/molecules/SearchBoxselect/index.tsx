import { Select } from "@components/atoms/Select";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchBoxselectProps = DefaultPageProps & {
  className?: string;
  placeholder: string;
options: any;
}

function SearchBoxselect (props: SearchBoxselectProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Select placeholder={'Placeholder'} data={[{ value: 'option_1', label: 'Option 1' }, { value: 'option_2', label: 'Option 2' }, { value: 'option_3', label: 'Option 3' }]} defaultValue={'option_1'} iconProps={{ elementKey: "", gutter: [], drawerTitle: [], placeholder: [], inputLabel: [], href: [], action: [], data: [], totalPage: [], defaultValue: [], source: [], title: [], childrenData: [], responsiveVisibility: [], dataSource: [], tableColumns: [], tableActions: [], onPaginationChange: [], onDataSortingChange: [], iconName: "BsCaretDownFill", color: "\"#a0a0a0\"", activeColor: "null", inactiveColor: "null", checkColor: "null", size: "12"}} className={styles.select_1} containerStyle={{ height: "auto", border: "3px solid rgb(23, 125, 220)"}} /></div>);
}

export default SearchBoxselect;
