import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IcFilledinvoiceProps = DefaultPageProps & {
  className?: string;
  }

function IcFilledinvoice (props: IcFilledinvoiceProps): JSX.Element {
  
  
  
  
  return (<div source={assets('1667211072440-svg')} sourceType='upload' className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_81} src={assets('1667211072440-svg')} alt='Image81' /></div>);
}

export default IcFilledinvoice;
