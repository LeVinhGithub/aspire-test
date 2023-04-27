import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IllustrationpreviewProps = DefaultPageProps & {
  className?: string;
  }

function Illustrationpreview (props: IllustrationpreviewProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667376673161-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_43} src={assets('1667376673161-svg')} alt='Image43' /></div>);
}

export default Illustrationpreview;
