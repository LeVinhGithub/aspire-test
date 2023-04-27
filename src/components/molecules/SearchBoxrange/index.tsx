import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import { DateTimePicker } from "@components/atoms/DateTimePicker";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SearchBoxrangeProps = DefaultPageProps & {
  className?: string;
  }

function SearchBoxrange (props: SearchBoxrangeProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.search_boxselect_58} ><div className={styles.assets_58} ><Text textType='Text' className={styles.text_50} >{'英語'}</Text>
<Image sourceType='upload' className={styles.image_57} src={assets('1667376585766-svg')} alt='Image57' /></div></div>
<Text textType='Text' className={styles.text_62} >{'が'}</Text>
<div className={styles.search_boxselect_58} ><div className={styles.assets_58} ><Text textType='Text' className={styles.text_50} >{'日常会話レベル'}</Text>
<Image sourceType='upload' className={styles.image_57} src={assets('1667376585814-svg')} alt='Image77' /></div></div>
<div className={styles.datetimepicker_1_container} ><div className={styles.datetimepicker_1_inner} ><Text textType='Text' className={styles.datetimepicker_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.datetimepicker_1_required} >{'*'}</Text></div>
<DateTimePicker defaultValue={undefined} picker='month' showTime={false} format='YYYY/MM' className={styles.datetimepicker_1} /></div></div>);
}

export default SearchBoxrange;
