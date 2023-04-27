import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import { Checkbox } from "@components/atoms/Checkbox";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HeaderProps = DefaultPageProps & {
  className?: string;
  }

function Header (props: HeaderProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_4273188174} ><Image sourceType='upload' className={styles.image_3} src={assets('1666181761017-svg')} alt='Image3' />
<Image sourceType='upload' className={styles.image_4} src={assets('1666181761032-svg')} alt='Image4' /></div>
<Image sourceType='upload' className={styles.image_5} src={assets('1666181761035-svg')} alt='Image5' />
<div className={styles.frame_4273188758} ><Image sourceType='upload' className={styles.image_7} src={assets('1666181761038-svg')} alt='Image7' />
<Image sourceType='upload' className={styles.image_7} src={assets('1666181761039-svg')} alt='Image8' />
<div className={styles.checkbox_1_container} ><div className={styles.checkbox_1_inner} ><Text textType='Text' className={styles.checkbox_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.checkbox_1_required} >{'*'}</Text></div>
<Checkbox data={[{ value: 'option_1', label: 'Option 1' }]} defaultValue={'option_1'} className={styles.checkbox_1} activeColor='' inactiveColor='' checkColor='' /></div></div></div>);
}

export default Header;
