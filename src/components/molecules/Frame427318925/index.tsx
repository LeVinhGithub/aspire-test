import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Frame427318925Props = DefaultPageProps & {
  className?: string;
  }

function Frame427318925 (props: Frame427318925Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} />);
}

export default Frame427318925;
