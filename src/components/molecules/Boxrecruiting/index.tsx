import assets from "@assets/index";
import Image from "next/image";
import Tag from "@components/molecules/Tag";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type BoxrecruitingProps = DefaultPageProps & {
  className?: string;
  image: string;
tags: any;
title: string;
companyName: string;
link: string;
companyLogo: string;
}

function Boxrecruiting (props: BoxrecruitingProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.image_3} ><Image sourceType='upload' className={styles.image_3} src={assets('1666856717632-png')} alt='Image3' /></div>
<div className={styles.content_16} ><div className={styles.frame_42731883211} ><div className={styles.frame_42731883110} ><Tag className={styles.tag_1} value={{}} /></div>
<Text textType='Text' className={styles.text_11} >{props.title}</Text></div>
<div className={styles.frame_42731883316} ><div className={styles.line_113} />
<div className={styles.frame_726116} ><Image sourceType='upload' className={styles.image_15} src={assets('1666856717700-png')} alt='Image15' />
<Text textType='Text' className={styles.text_16} >{'Entertainment Inc.'}</Text></div></div></div>
<div className={styles.like_22} ><div className={styles.ellipse_2518} />
<div className={styles.frame_42731883422} ><div className={styles.star_1121} ><Image sourceType='upload' className={styles.image_21} src={assets('1666856717709-svg')} alt='Image21' /></div>
<Text textType='Text' className={styles.text_22} >{'preservation'}</Text></div></div></div>);
}

export default Boxrecruiting;
