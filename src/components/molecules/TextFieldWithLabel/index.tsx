import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TextFieldWithLabelProps = DefaultPageProps & {
  className?: string;
  }

function TextFieldWithLabel (props: TextFieldWithLabelProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.molecule_container} ${props.className}`} />);
}

export default TextFieldWithLabel;
