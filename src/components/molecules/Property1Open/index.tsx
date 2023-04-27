import assets from "@assets/index";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1OpenProps = DefaultPageProps & {
  className?: string;
  }

function Property1Open (props: Property1OpenProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.frame_42731928081} ><Text className={styles.text_69} >{'金融'}</Text>
<div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_81} src={assets('1670195755347-svg')} alt='Image81' /></div></div>
<div className={styles.frame_427319281136} ><div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755365-svg')} alt='Image86' /></div>
<Text className={styles.text_87} >{'銀行・信託銀行'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755371-svg')} alt='Image91' /></div>
<Text className={styles.text_87} >{'信用金庫・組合'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755383-svg')} alt='Image100' /></div>
<Text className={styles.text_87} >{'証券'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755389-svg')} alt='Image107' /></div>
<Text className={styles.text_87} >{'投資銀行'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755396-svg')} alt='Image111' /></div>
<Text className={styles.text_87} >{'アセットマネジメント'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755399-svg')} alt='Image115' /></div>
<Text className={styles.text_87} >{'プライベートエクイティ・ファンド'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755408-svg')} alt='Image119' /></div>
<Text className={styles.text_87} >{'不動産ファンド'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755411-svg')} alt='Image123' /></div>
<Text className={styles.text_87} >{'ベンチャーキャピタル'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755414-svg')} alt='Image127' /></div>
<Text className={styles.text_87} >{'クレジット・信販'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755418-svg')} alt='Image131' /></div>
<Text className={styles.text_87} >{'政府系金融機関'}</Text></div>
<div className={styles.select_87} ><div className={styles.ic_lineup_81} ><Image sourceType='upload' className={styles.image_86} src={assets('1670195755422-svg')} alt='Image135' /></div>
<Text className={styles.text_87} >{'その他'}</Text></div></div></div>);
}

export default Property1Open;
