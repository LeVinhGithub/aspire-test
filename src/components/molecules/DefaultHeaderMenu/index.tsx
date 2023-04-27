import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type DefaultHeaderMenuProps = DefaultPageProps & {
  className?: string;
  }

function DefaultHeaderMenu (props: DefaultHeaderMenuProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.header_menu_molecule_0} ${props.className}`} />);
}

export default DefaultHeaderMenu;
