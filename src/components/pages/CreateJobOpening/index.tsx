import assets from "@assets/index";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Header from "@components/molecules/Header";
import { Text } from "@components/atoms/Text";
import Divider from "@components/molecules/Divider";
import Searchtype2 from "@components/molecules/Searchtype2";
import Image from "next/image";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import HeaderDefault from "@components/molecules/HeaderDefault";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CreateJobOpeningProps = DefaultPageProps & {
  className?: string;
  }

function CreateJobOpening (props: CreateJobOpeningProps): JSX.Element {
  
  
  
  
  return (<div className={styles.container} ><div className={styles.inner_container_1671664782794} ><div className={styles.frame_42731903272} ><div className={styles.titlearea_5} ><div className={styles.title_5} ><IcLineArrowleft className={styles.ic_line_arrowleft_1} />
<div className={styles.frame_4273190235} ><Header className={styles.header_1} /></div></div></div>
<div className={styles.frame_42731903672} ><div className={styles.element_11} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'基本情報'}</Text></div>
<Divider className={styles.divider_1} /></div>
<div className={styles.body_11} ><Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_22} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_211} /></div></div>
<div className={styles.frame_42731903772} ><div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'求人タイトル'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'仕事内容'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'福利厚生'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'休暇/休日'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'賞与・昇格'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'アピールポイント'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'マッチするキャリアの方向性'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'将来のキャリアパスイメージ'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'評価されるコンピテンシー'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.element_17} ><div className={styles.head_16} ><div className={styles.title_16} ><Text textType='Text' className={styles.text_10} >{'トレンドキーワード'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_17} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.frame_42731899872} ><div className={styles.element_72} ><div className={styles.head_67} ><div className={styles.title_67} ><Text textType='Text' className={styles.text_10} >{'サムネイル画像'}</Text></div>
<Divider className={styles.divider_12} /></div>
<div className={styles.group_172} ><div className={styles.rectangle_269} />
<div className={styles.upload_2172} ><Image sourceType='upload' className={styles.image_71} src={assets('1671664781192-svg')} alt='Image71' />
<Image sourceType='upload' className={styles.image_72} src={assets('1671664781201-svg')} alt='Image72' /></div></div></div></div>
<SizeLgStateDefaulticonNone className={styles.btn_1} children={{}} /></div></div></div>
<HeaderDefault className={styles.header_1} /></div></div>);
}

export default CreateJobOpening;
