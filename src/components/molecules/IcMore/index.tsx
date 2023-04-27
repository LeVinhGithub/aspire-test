import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcMoreProps = DefaultPageProps & {
  className?: string;
  }

function IcMore (props: IcMoreProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.morehorizontal_1181} ><Image sourceType='upload' className={styles.image_49} src={assets('1667376625213-svg')} alt='Image49' />
<Image sourceType='upload' className={styles.image_61} src={assets('1667376625234-svg')} alt='Image61' />
<Image sourceType='upload' className={styles.image_80} src={assets('1667376625254-svg')} alt='Image80' /></div></div>);
}

export default IcMore;
