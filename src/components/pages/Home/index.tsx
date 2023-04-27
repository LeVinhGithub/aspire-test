import DefaultHeader from "@components/molecules/DefaultHeader";
import Image from "next/image";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { Row } from "@components/atoms/Row";
import { Col } from "@components/atoms/Col";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
  }

function Home (props: HomeProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><DefaultHeader className={styles.defaultheader_1} />
<div className={styles.box_10} ><Image sourceType='upload' className={styles.image_1} width='300' height='300' src='https://picsum.photos/600/600' alt='image_1' /></div>
<DefaultFooter className={styles.defaultheader_1} />
<Row gutter={[0,32]} justify='center' align='middle' className={styles.form_1_container} ><Col xs={24} md={12} xl={8} className={styles.form_1_inner} /></Row></div>);
}

export default Home;
