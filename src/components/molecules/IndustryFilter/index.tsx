import { Text } from "@components/atoms/Text";
import IcLinedelete from "@components/molecules/IcLinedelete";
import Property1Close from "@components/molecules/Property1Close";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type IndustryFilterProps = DefaultPageProps & {
  className?: string;
  }

function IndustryFilter (props: IndustryFilterProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.header_3} ><Text textType='Text' className={styles.text_3} >{'希望業界を選択しましょう'}</Text>
<IcLinedelete className={styles.ic_linedelete_3} /></div>
<div className={styles.frame_4273189564} ><Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} />
<Property1Close className={styles.togglebtn_4} /></div>
<SizeLgStateDefaulticonNone className={styles.btn_4} children={{}} /></div>);
}

export default IndustryFilter;
