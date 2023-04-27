import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IconmanProps = DefaultPageProps & {
  className?: string;
  }

function Iconman (props: IconmanProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.user_19157} ><Image sourceType='upload' className={styles.image_45} src={assets('1667376673165-svg')} alt='Image45' />
<Image sourceType='upload' className={styles.image_56} src={assets('1667376673189-svg')} alt='Image56' /></div></div>);
}

export default Iconman;
