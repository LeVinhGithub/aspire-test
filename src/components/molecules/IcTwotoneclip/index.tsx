import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcTwotoneclipProps = DefaultPageProps & {
  className?: string;
  }

function IcTwotoneclip (props: IcTwotoneclipProps): JSX.Element {
  
  
  
  
  return (<div source={undefined} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_5} src={assets('1673956310944-svg')} alt='Image5' /></div>);
}

export default IcTwotoneclip;
