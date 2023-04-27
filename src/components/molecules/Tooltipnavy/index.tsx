import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TooltipnavyProps = DefaultPageProps & {
  className?: string;
  }

function Tooltipnavy (props: TooltipnavyProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.ic_lineradio_83} ><div className={styles.radiochecked_183} ><div className={styles.ellipse_880} />
<Image sourceType='upload' className={styles.image_83} src={assets('1669356669205-svg')} alt='Image83' /></div></div>
<Text className={styles.text_84} >{'新しい固定資産の登録が完了しました！'}</Text></div>);
}

export default Tooltipnavy;
