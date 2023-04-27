import assets from "@assets/index";
import IcLineArrowleft from "@components/molecules/IcLineArrowleft";
import Header from "@components/molecules/Header";
import SizeLgStateDefaulticonNone from "@components/molecules/SizeLgStateDefaulticonNone";
import { Text } from "@components/atoms/Text";
import Divider from "@components/molecules/Divider";
import Searchtype2 from "@components/molecules/Searchtype2";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import SearchBoxbutton from "@components/molecules/SearchBoxbutton";
import Image from "next/image";
import SearchBoxfreeword from "@components/molecules/SearchBoxfreeword";
import IcLineplus from "@components/molecules/IcLineplus";
import Property1Company from "@components/molecules/Property1Company";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type CorporateEditCompanyInfoProps = DefaultPageProps & {
  className?: string;
  }

function CorporateEditCompanyInfo (props: CorporateEditCompanyInfoProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731887979} ><div className={styles.titlearea_5} ><div className={styles.title_5} ><IcLineArrowleft className={styles.ic_line_arrowleft_1} />
<div className={styles.frame_4273190235} ><Header className={styles.header_1} /></div></div>
<SizeLgStateDefaulticonNone className={styles.btn_1} /></div>
<div className={styles.frame_42731903479} ><div className={styles.body_12} ><div className={styles.head_10} ><div className={styles.title_10} ><Text textType='Text' className={styles.text_10} >{'企業概要'}</Text></div>
<Divider className={styles.divider_1} /></div>
<div className={styles.frame_42731897112} ><Searchtype2 className={styles.searchtype_21} />
<div className={styles.searchtype_212} ><TextFieldTitle className={styles.text_field_title_1} />
<SearchBoxbutton className={styles.search_boxbutton_1} /></div>
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} />
<Searchtype2 className={styles.searchtype_21} /></div></div>
<div className={styles.frame_42731903579} ><div className={styles.body_18} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'事業内容'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_18} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.body_18} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'Mission'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_18} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.body_18} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'Vision'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_18} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.body_18} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'Value'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.body_18} ><Searchtype2 className={styles.searchtype_212} /></div></div>
<div className={styles.body_47} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'代表者'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_62458941} ><div className={styles.user_13141} ><Image sourceType='upload' className={styles.image_40} src={assets('1671608222420-svg')} alt='Image40' />
<Image sourceType='upload' className={styles.image_41} src={assets('1671608222433-svg')} alt='Image41' /></div></div>
<div className={styles.frame_42731904947} ><div className={styles.body_44} ><Text textType='Text' className={styles.text_44} >{'名前'}</Text>
<Searchtype2 className={styles.searchtype_212} /></div>
<div className={styles.frame_42731905047} ><Text textType='Text' className={styles.text_46} >{'プロフィール文'}</Text>
<div className={styles.searchtype_247} ><SearchBoxfreeword className={styles.search_boxfreeword_1} /></div></div></div></div>
<div className={styles.body_63} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'役員'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_62458941} ><div className={styles.user_13141} ><Image sourceType='upload' className={styles.image_40} src={assets('1671608222465-svg')} alt='Image54' />
<Image sourceType='upload' className={styles.image_41} src={assets('1671608222468-svg')} alt='Image55' /></div></div>
<div className={styles.frame_42731904947} ><div className={styles.body_44} ><Text textType='Text' className={styles.text_44} >{'名前'}</Text>
<Searchtype2 className={styles.searchtype_212} /></div>
<div className={styles.frame_42731905047} ><Text textType='Text' className={styles.text_46} >{'プロフィール文'}</Text>
<div className={styles.searchtype_247} ><SearchBoxfreeword className={styles.search_boxfreeword_1} /></div></div></div>
<div className={styles.btn_63} ><IcLineplus className={styles.ic_lineplus_1} />
<Text textType='Text' className={styles.text_63} >{'役員を追加'}</Text></div></div>
<div className={styles.body_63} ><div className={styles.head_17} ><div className={styles.title_17} ><Text textType='Text' className={styles.text_10} >{'メンバー'}</Text></div>
<Divider className={styles.divider_2} /></div>
<div className={styles.frame_62458941} ><div className={styles.user_13141} ><Image sourceType='upload' className={styles.image_40} src={assets('1671608222499-svg')} alt='Image70' />
<Image sourceType='upload' className={styles.image_41} src={assets('1671608222501-svg')} alt='Image71' /></div></div>
<div className={styles.frame_42731904947} ><div className={styles.body_44} ><Text textType='Text' className={styles.text_44} >{'名前'}</Text>
<Searchtype2 className={styles.searchtype_212} /></div>
<div className={styles.frame_42731905047} ><Text textType='Text' className={styles.text_46} >{'プロフィール文'}</Text>
<div className={styles.searchtype_247} ><SearchBoxfreeword className={styles.search_boxfreeword_1} /></div></div></div>
<div className={styles.btn_79} ><IcLineplus className={styles.ic_lineplus_1} />
<Text textType='Text' className={styles.text_63} >{'メンバーを追加'}</Text></div></div>
<SizeLgStateDefaulticonNone className={styles.btn_2} /></div></div></div>
<Property1Company className={styles.header_1} /></div>);
}

export default CorporateEditCompanyInfo;
