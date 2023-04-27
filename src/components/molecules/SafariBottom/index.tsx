import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SafariBottomProps = DefaultPageProps & {
  className?: string;
  }

function SafariBottom (props: SafariBottomProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.barbg_6} />
<div className={styles.safariicons_20} ><Image sourceType='upload' className={styles.image_10} src={assets('1667203870067-svg')} alt='Image10' />
<Image sourceType='upload' className={styles.image_10} src={assets('1667203870076-svg')} alt='Image12' />
<Image sourceType='upload' className={styles.image_10} src={assets('1667203870083-svg')} alt='Image14' />
<Image sourceType='upload' className={styles.image_10} src={assets('1667203870097-svg')} alt='Image17' />
<Image sourceType='upload' className={styles.image_10} src={assets('1667203870106-svg')} alt='Image20' /></div>
<div className={styles.safariaddressbar_27} ><div className={styles.safaribarinput_22} />
<Image sourceType='upload' className={styles.image_23} src={assets('1667203870111-svg')} alt='Image23' />
<div className={styles.address_26} ><Image sourceType='upload' className={styles.image_25} src={assets('1667203870113-svg')} alt='Image25' />
<Text className={styles.text_26} >{'apple.com'}</Text></div>
<Image sourceType='upload' className={styles.image_27} src={assets('1667203870116-svg')} alt='Image27' /></div></div>);
}

export default SafariBottom;
