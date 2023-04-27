import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcpeopleProps = DefaultPageProps & {
  className?: string;
  }

function Icpeople (props: IcpeopleProps): JSX.Element {
  
  
  
  
  return (<div source={undefined} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_7} src={assets('people-rc-upload-1667566264150-5-svg')} alt='Image7' /></div>);
}

export default Icpeople;
