import DefaultHeader from "@components/molecules/DefaultHeader";
import { Text } from "@components/atoms/Text";
import { ImagePicker } from "@components/atoms/ImagePicker";
import { Button } from "@components/atoms/Button";
import DefaultFooter from "@components/molecules/DefaultFooter";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
  }

function Home (props: HomeProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><DefaultHeader className={styles.defaultheader_1} />
<div className={styles.box_0} ><div className={styles.imagepicker_1_container} ><div className={styles.imagepicker_1_inner} ><Text textType='Text' className={styles.imagepicker_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.imagepicker_1_required} >{'*'}</Text></div>
<ImagePicker multiple={false} maxCount={1} className={styles.imagepicker_1} ><Button buttonType='primary' className={styles.imagepicker_1_button} >{'[ImagePicker]'}</Button></ImagePicker></div></div>
<DefaultFooter className={styles.defaultheader_1} /></div>);
}

export default Home;
