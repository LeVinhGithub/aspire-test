import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Divider1Props = DefaultPageProps & {
  className?: string;
  }

function Divider1 (props: Divider1Props): JSX.Element {
  
  
  
  
  return (<div source={undefined} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_66} src={assets('1672728953663-png')} alt='Image66' /></div>);
}

export default Divider1;
