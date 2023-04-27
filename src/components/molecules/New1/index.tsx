import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type New1Props = DefaultPageProps & {
  className?: string;
  }

function New1 (props: New1Props): JSX.Element {
  
  
  
  
  return (<div className={`${styles.custom_component_container} ${props.className}`} />);
}

export default New1;
