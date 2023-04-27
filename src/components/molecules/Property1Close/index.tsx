import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1CloseProps = DefaultPageProps & {
  className?: string;
  }

function Property1Close (props: Property1CloseProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text className={styles.text_65} >{'金融'}</Text>
<Image sourceType='upload' className={styles.image_76} src={assets('1667892725054-svg')} alt='Image76' /></div>);
}

export default Property1Close;
