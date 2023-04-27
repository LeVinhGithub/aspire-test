import assets from "@assets/index";
import HeaderNormal from "@components/molecules/HeaderNormal";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import Divider from "@components/molecules/Divider";
import Property1On from "@components/molecules/Property1On";
import Paragraphpattern1 from "@components/molecules/Paragraphpattern1";
import Table from "@components/molecules/Table";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type JobOpeningDetailUpdatedProps = DefaultPageProps & {
  className?: string;
  }

function JobOpeningDetailUpdated (props: JobOpeningDetailUpdatedProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.all_40} ><div className={styles.frame_42731894739} ><HeaderNormal className={styles.header_normal_1} text={{}} />
<div className={styles.frame_42731889839} ><Image sourceType='upload' className={styles.image_5} src={assets('1669802026919-png')} alt='Image5' />
<div className={styles.content_39} ><div className={styles.title_area_20} ><div className={styles.frame_42731883216} ><Text textType='Text' className={styles.text_9} >{'人気Youtuberと一緒にエンタメ業界を盛り上げる！正社員募集！'}</Text>
<div className={styles.frame_42731894816} ><div className={styles.tag_12} ><Text textType='Text' className={styles.text_12} >{'新規事業'}</Text></div>
<div className={styles.tag_14} ><Text textType='Text' className={styles.text_12} >{'UIターン歓迎'}</Text></div>
<div className={styles.tag_16} ><Text textType='Text' className={styles.text_12} >{'地域活性化事業'}</Text></div></div></div>
<div className={styles.frame_726119} ><Image sourceType='upload' className={styles.image_18} src={assets('1669802026986-png')} alt='Image18' />
<Text textType='Text' className={styles.text_19} >{'株式会社Entertainment'}</Text></div>
<Text textType='Text' className={styles.text_20} >{'情報更新日：2022/08/21'}</Text></div>
<Divider className={styles.divider_1} />
<div className={styles.paragraphpattern_128} ><Text textType='Text' className={styles.text_22} >{'マッチするキャリアの方向性'}</Text>
<div className={styles.frame_42731894924} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_24} >{'自社サービスに携わりたい'}</Text></div>
<div className={styles.frame_42731894924} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_24} >{'ストックオプションが欲しい'}</Text></div>
<div className={styles.frame_42731894924} ><Property1On className={styles.ic_line_checkcircle_1} />
<Text textType='Text' className={styles.text_24} >{'社会に貢献したい'}</Text></div></div>
<Divider className={styles.divider_1} />
<Paragraphpattern1 className={styles.paragraphpattern_11} />
<Divider className={styles.divider_1} />
<Paragraphpattern1 className={styles.paragraphpattern_12} />
<Divider className={styles.divider_1} />
<Paragraphpattern1 className={styles.paragraphpattern_13} />
<Divider className={styles.divider_1} />
<div className={styles.frame_42731895330} ><Paragraphpattern1 className={styles.paragraphpattern_14} />
<div className={styles.table_30} ><Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_3} title={{}} description={{}} /></div></div>
<Divider className={styles.divider_1} />
<div className={styles.paragraphpattern_133} ><Text textType='Text' className={styles.text_22} >{'求める人物像'}</Text>
<div className={styles.table_33} ><Table className={styles.table_4} title={{}} description={{}} />
<Table className={styles.table_4} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} /></div></div>
<div className={styles.paragraphpattern_136} ><Text textType='Text' className={styles.text_22} >{'業務詳細'}</Text>
<div className={styles.table_36} ><Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} /></div></div>
<div className={styles.paragraphpattern_139} ><Text textType='Text' className={styles.text_22} >{'労働条件'}</Text>
<div className={styles.table_39} ><Table className={styles.table_3} title={{}} description={{}} />
<Table className={styles.table_11} title={{}} description={{}} />
<Table className={styles.table_4} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} />
<Table className={styles.table_1} title={{}} description={{}} /></div></div></div></div></div>
<div className={styles.footer_40} ><ButtonActive className={styles.btn_1} children={{}} />
<Property1On className={styles.like_1} /></div></div></div>);
}

export default JobOpeningDetailUpdated;
