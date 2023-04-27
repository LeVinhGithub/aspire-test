import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type LogoProps = DefaultPageProps & {
  className?: string;
  }

function Logo (props: LogoProps): JSX.Element {
  
  
  
  
  return (<div source={undefined} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_5} src={assets('logo-rc-upload-1667685337970-2-svg')} alt='Image5' /></div>);
}

export default Logo;
