import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcLineexternallinkProps = DefaultPageProps & {
  className?: string;
  }

function IcLineexternallink (props: IcLineexternallinkProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1666944241487-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_24} src={assets('1666944241487-svg')} alt='Image24' /></div>);
}

export default IcLineexternallink;
