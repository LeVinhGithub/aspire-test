import { Row } from "@components/atoms/Row";
import { Text } from "@components/atoms/Text";
import ButtonActive from "@components/molecules/ButtonActive";
import { TextArea } from "@components/atoms/TextArea";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Page404Props = DefaultPageProps & {
  className?: string;
  }

function Page404 (props: Page404Props): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.box_10} ><div className={styles.box_10} ><Row gutter={[30,30]} justify='center' align='top' className={styles.row_2} ><Text textType='Text' className={styles.text_13} >{'404'}</Text></Row>
<Row gutter={[30,28]} justify='center' align='top' className={styles.row_2} ><Text textType='Text' className={styles.text_13} >{'Page Not Found'}</Text></Row>
<Row gutter={[30,30]} justify='center' align='top' className={styles.row_2} ><Text textType='Text' className={styles.text_13} >{'The requested url was not found'}</Text></Row>
<Row gutter={[30,30]} justify='center' align='top' className={styles.row_2} ><ButtonActive className={styles.buttonactive_1} children={{}} /></Row></div></div>
<div className={styles.textarea_1_container} ><div className={styles.textarea_1_inner} ><Text textType='Text' className={styles.textarea_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.textarea_1_required} >{'*'}</Text></div>
<TextArea placeholder={undefined} className={styles.textarea_1} inputStyle={{ width: "100%"}} />
<div className={styles.textarea_1_error_message_container} ><Text textType='Text' className={styles.textarea_1_required} >{'Error Message'}</Text></div></div></div>);
}

export default Page404;
