import HeaderNormal from "@components/molecules/HeaderNormal";
import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type TermsOfServiceProps = DefaultPageProps & {
  className?: string;
  }

function TermsOfService (props: TermsOfServiceProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1667203870119} ><HeaderNormal className={styles.header_normal_3} text={'利用規約'} />
<div className={styles.group_70223} ><Text textType='Text' className={styles.text_3} >{'第1条 （本規約の適用）
１ この利用規約（以下「本規約」といいます。）は、株式会社seedive（以下「当社」といいます。）が提供する「talkport」（名称が変更された場合には当該変更後のサービスを含み、以下「本サービス」といいます。）の利用についての一切に適用されます。

２ 当社が利用者に通知する本サービスの御案内、ガイドライン、利用上の注意等（以下「本御案内等」といいます。）は、本規約の一部を構成するものとします。

３ 利用者は、本規約に従って本サービスを利用するものとし、本規約に同意しない限り本サービスを利用することはできないものとします。利用者が本サービスを利用した時点で本規約に同意したものとみなします。

第2条 （本契約の成立及び利用者の情報）
１ 本規約に基づいて成立する当社と利用者の間の本サービスの利用に関する契約（以下「本契約」といいます。）は、当社が利用者から本サービスの利用申込を受け、当社がこれを承諾（利用者に対するアカウントの開設の通知を含みます。）したときに成立するものとします。当社は、当社の判断により利用申込を承諾しないことができるものとし、かつ、利用申込を承諾しない理由を開示する義務を負わないものとします。

２ 利用者が未成年であるときは、利用者は本サービスの利用について法定代理人の同意を得た上で、前項の利用申込を行うものとします。

３ 利用者は、第１項の利用申込の際に当社が指定する情報を提供するものとし、本契約成立後に当該情報に変更が生じた場合には、速やかに変更内容を通知するものとします。当社は、当該通知がなされなかったことにより利用者に生じた損害について一切の責任を負いません。

'}</Text></div></div></div>);
}

export default TermsOfService;
