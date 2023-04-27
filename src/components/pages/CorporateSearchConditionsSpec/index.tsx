import HeaderDefault from "@components/molecules/HeaderDefault";
import { Text } from "@components/atoms/Text";
import Header from "@components/molecules/Header";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import SearchBoxselect from "@components/molecules/SearchBoxselect";
import Searchtype1 from "@components/molecules/Searchtype1";
import SearchBoxfreeword from "@components/molecules/SearchBoxfreeword";
import SearchBoxbutton from "@components/molecules/SearchBoxbutton";
import Property1On from "@components/molecules/Property1On";
import Property1Off from "@components/molecules/Property1Off";
import SearchBoxrange from "@components/molecules/SearchBoxrange";
import Property1Active from "@components/molecules/Property1Active";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateSearchConditionsSpecProps = DefaultPageProps & {
  className?: string;
  }

function CorporateSearchConditionsSpec (props: CorporateSearchConditionsSpecProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667376587297} ><div className={styles.header_default_20} ><HeaderDefault className={styles.header_default_20} /></div>
<div className={styles.frame_42731900719} ><div className={styles.frame_42731901219} ><Text textType='Text' className={styles.text_4} >{'1123 件のスカウトが可能'}</Text>
<div className={styles.frame_42731901219} ><Header className={styles.header_5} />
<div className={styles.frame_42731901019} ><div className={styles.frame_42731900810} ><div className={styles.search_10} ><TextFieldTitle className={styles.text_field_title_8} />
<div className={styles.search_boxdoubleselect_10} ><SearchBoxselect className={styles.search_boxselect_9} placeholder={{}} options={{}} />
<Text textType='Text' className={styles.text_10} >{'が'}</Text>
<SearchBoxselect className={styles.search_boxselect_9} placeholder={{}} options={{}} /></div></div>
<Searchtype1 className={styles.searchtype_110} /></div>
<div className={styles.frame_42731900810} ><Searchtype1 className={styles.searchtype_110} />
<Searchtype1 className={styles.searchtype_110} />
<Searchtype1 className={styles.searchtype_110} />
<div className={styles.searchtype_112} ><TextFieldTitle className={styles.text_field_title_8} />
<SearchBoxfreeword className={styles.search_boxfreeword_12} />
<SearchBoxbutton className={styles.search_boxbutton_12} /></div></div>
<div className={styles.frame_42731901215} ><div className={styles.searchtype_112} ><TextFieldTitle className={styles.text_field_title_8} />
<div className={styles.search_boxradio_15} ><Property1On className={styles.radio_button_15} />
<Property1Off className={styles.radio_button_15} />
<Property1Off className={styles.radio_button_15} />
<Property1Off className={styles.radio_button_15} />
<Property1Off className={styles.radio_button_15} /></div></div>
<Searchtype1 className={styles.searchtype_115} />
<Searchtype1 className={styles.searchtype_115} />
<Searchtype1 className={styles.searchtype_115} /></div>
<div className={styles.frame_42731900810} ><Searchtype1 className={styles.searchtype_110} />
<Searchtype1 className={styles.searchtype_110} />
<Searchtype1 className={styles.searchtype_110} />
<Searchtype1 className={styles.searchtype_110} />
<div className={styles.searchtype_117} ><TextFieldTitle className={styles.text_field_title_8} />
<SearchBoxrange className={styles.search_boxrange_17} />
<SearchBoxbutton className={styles.search_boxbutton_12} /></div></div>
<div className={styles.frame_42731901019} ><div className={styles.frame_42731901119} ><Searchtype1 className={styles.searchtype_119} />
<SearchBoxbutton className={styles.search_boxbutton_12} /></div></div></div></div></div>
<Property1Active className={styles.output_19} /></div></div></div>);
}

export default CorporateSearchConditionsSpec;
