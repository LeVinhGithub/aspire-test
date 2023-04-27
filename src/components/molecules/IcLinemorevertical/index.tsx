import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinemoreverticalProps = DefaultPageProps & {
  className?: string;
  }

function IcLinemorevertical (props: IcLinemoreverticalProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_85} src={assets('1669356669163-png')} alt='Image85' />
<Image sourceType='upload' className={styles.image_92} src={assets('1669356669238-png')} alt='Image92' />
<Image sourceType='upload' className={styles.image_96} src={assets('1669356669251-png')} alt='Image96' /></div>);
}

export default IcLinemorevertical;
