import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import ButtonDisabled from "@components/molecules/ButtonDisabled";
import { ImagePicker } from "@components/atoms/ImagePicker";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateImportPhotoProps = DefaultPageProps & {
  className?: string;
  }

function CorporateImportPhoto (props: CorporateImportPhotoProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1669549732470} ><div className={styles.frame_4273188208} ><Text textType='Text' className={styles.text_3} >{'プロフィール画像を登録'}</Text>
<div className={styles.frame_4273188368} ><div className={styles.frame_6245898} ><div className={styles.user_1318} ><Image sourceType='upload' className={styles.image_7} src={assets('1669549732454-svg')} alt='Image7' />
<Image sourceType='upload' className={styles.image_8} src={assets('1669549732463-svg')} alt='Image8' /></div></div>
<ButtonDisabled className={styles.btn_1} fullwidth={{}} />
<div className={styles.imagepicker_1_container} ><ImagePicker action={'[URL]'} multiple={false} maxCount={7} className={styles.imagepicker_1} /></div></div></div></div></div>);
}

export default CorporateImportPhoto;
