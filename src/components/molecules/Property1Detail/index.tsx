import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1DetailProps = DefaultPageProps & {
  className?: string;
  }

function Property1Detail (props: Property1DetailProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_42731881768} ><div className={styles.frame_717768} ><Image sourceType='upload' className={styles.image_67} src={assets('back-arr-rc-upload-1666958379721-6-svg')} alt='Image67' /></div></div>
<Image sourceType='upload' className={styles.image_71} src={assets('1666338290753-svg')} alt='Image71' />
<Text textType='Text' className={styles.text_73} >{'募集内容'}</Text></div>);
}

export default Property1Detail;
