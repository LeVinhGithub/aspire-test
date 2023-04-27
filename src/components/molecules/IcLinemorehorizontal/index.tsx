import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLinemorehorizontalProps = DefaultPageProps & {
  className?: string;
  }

function IcLinemorehorizontal (props: IcLinemorehorizontalProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667376673160-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_42} src={assets('1667376673160-svg')} alt='Image42' /></div>);
}

export default IcLinemorehorizontal;
