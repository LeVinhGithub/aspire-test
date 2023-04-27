import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type InputProps = DefaultPageProps & {
  className?: string;
  }

function Input (props: InputProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.molecule_container} ${props.className}`} />);
}

export default Input;
