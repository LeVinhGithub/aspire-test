import Property1Detail from "@components/molecules/Property1Detail";
import Chat from "@components/molecules/Chat";
import Divider from "@components/molecules/Divider";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type MessagesProps = DefaultPageProps & {
  className?: string;
  }

function Messages (props: MessagesProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_4273188956} ><Property1Detail className={styles.searchbar_2} />
<div className={styles.frame_4273188746} ><div className={styles.frame_4273188704} ><Chat className={styles.chat_4} />
<Divider className={styles.divider_4} /></div>
<div className={styles.frame_4273188704} ><Chat className={styles.chat_4} />
<Divider className={styles.divider_4} /></div>
<div className={styles.frame_4273188704} ><Chat className={styles.chat_4} />
<Divider className={styles.divider_4} /></div></div></div></div>);
}

export default Messages;
