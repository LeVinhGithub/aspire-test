import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ButtonProps = DefaultPageProps & {
  className?: string;
  : undefined;
}

function Button (props: ButtonProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.molecule_container} ${props.className}`} children={{}} />);
}

export default Button;
