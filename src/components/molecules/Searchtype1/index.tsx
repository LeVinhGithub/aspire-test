import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import { Checkbox } from "@components/atoms/Checkbox";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Searchtype1Props = DefaultPageProps & {
  className?: string;
  }

function Searchtype1 (props: Searchtype1Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.text_field_title_49} ><Text textType='Text' className={styles.text_44} >{'検索対象'}</Text></div>
<div className={styles.search_boxmultiselect_82} ><div className={styles.select_60} ><Image sourceType='upload' className={styles.image_58} src={assets('1667376585768-svg')} alt='Image58' />
<Checkbox data={[{ value: 'option_3', label: 'Option 3' }]} defaultValue={['option_1', 'option_1']} className={styles.checkbox_1} activeColor='' inactiveColor='' checkColor='' />
<Text textType='Text' className={styles.text_60} >{'自社がスカウトを送っていない人'}</Text></div>
<div className={styles.select_78} ><Image sourceType='upload' className={styles.image_58} src={assets('1667376585810-svg')} alt='Image76' />
<Text textType='Text' className={styles.text_78} >{'自社にエントリーしていない人'}</Text></div>
<div className={styles.select_82} ><Image sourceType='upload' className={styles.image_58} src={assets('1667376585847-svg')} alt='Image81' />
<Text textType='Text' className={styles.text_78} >{'職務経歴書が未読の人'}</Text></div></div></div>);
}

export default Searchtype1;
