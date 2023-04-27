import DefaultHeader from "@components/molecules/DefaultHeader";
import { Text } from "@components/atoms/Text";
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
<div className={styles.box_0} ><Text textType='Text' className={styles.text_1} >{'[Text]'}</Text>
<Button buttonType='primary' className={styles.button_1} >{'[Button]'}</Button></div>
<DefaultFooter className={styles.defaultheader_1} /></div>);
}

export default Home;
