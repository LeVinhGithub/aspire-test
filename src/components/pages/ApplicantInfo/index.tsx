import Property1Detail from "@components/molecules/Property1Detail";
import TextField from "@components/molecules/TextField";
import TextFieldTitle from "@components/molecules/TextFieldTitle";
import StateDefaultPostIconFalseTagFalsePreIconFalse from "@components/molecules/StateDefaultPostIconFalseTagFalsePreIconFalse";
import IcFilledattention from "@components/molecules/IcFilledattention";
import { Text } from "@components/atoms/Text";
import SizeMdStateDefaulticonNone from "@components/molecules/SizeMdStateDefaulticonNone";
import StateDefaultPostIconTrueTagFalsePreIconFalse from "@components/molecules/StateDefaultPostIconTrueTagFalsePreIconFalse";
import IcLineplus from "@components/molecules/IcLineplus";
import Property1DefaultRequiredFalseQuestionFalseFillFalse from "@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse";
import ButtonActive from "@components/molecules/ButtonActive";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type ApplicantInfoProps = DefaultPageProps & {
  className?: string;
  }

function ApplicantInfo (props: ApplicantInfoProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><div className={styles.frame_42731893658} ><div className={styles.frame_4273189023} ><Property1Detail className={styles.searchbar_3} /></div>
<div className={styles.frame_42731886258} ><div className={styles.frame_42731886158} ><TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<div className={styles.text_field_5} ><TextFieldTitle className={styles.text_field_title_6} />
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_6} />
<div className={styles.frame_75858} ><IcFilledattention className={styles.ic_filledattention_7} />
<Text textType='Text' className={styles.text_8} >{'本人認証未完了です'}</Text></div>
<SizeMdStateDefaulticonNone className={styles.btn_8} /></div>
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<div className={styles.text_field_16} ><TextFieldTitle className={styles.text_field_title_6} />
<div className={styles.frame_42731893014} ><div className={styles.frame_42731893112} ><Text textType='Text' className={styles.text_12} >{'言語名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_12} /></div>
<div className={styles.frame_42731893214} ><Text textType='Text' className={styles.text_12} >{'レベル'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_14} /></div></div>
<div className={styles.btn_16} ><IcLineplus className={styles.ic_lineplus_15} />
<Text textType='Text' className={styles.text_16} >{'追加'}</Text></div></div>
<div className={styles.text_field_5} ><TextFieldTitle className={styles.text_field_title_6} />
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_6} />
<div className={styles.btn_16} ><IcLineplus className={styles.ic_lineplus_15} />
<Text textType='Text' className={styles.text_16} >{'追加'}</Text></div></div>
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<Property1DefaultRequiredFalseQuestionFalseFillFalse className={styles.text_field_5} />
<div className={styles.text_field_25} ><TextFieldTitle className={styles.text_field_title_6} />
<div className={styles.frame_42731893014} ><div className={styles.frame_42731893123} ><Text textType='Text' className={styles.text_12} >{'年'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_23} /></div>
<div className={styles.frame_42731893123} ><Text textType='Text' className={styles.text_12} >{'月'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_23} /></div></div></div>
<div className={styles.text_field_5} ><TextFieldTitle className={styles.text_field_title_6} />
<div className={styles.frame_42731893014} ><div className={styles.frame_42731893112} ><Text textType='Text' className={styles.text_12} >{'会社名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_12} /></div>
<div className={styles.frame_42731893214} ><Text textType='Text' className={styles.text_12} >{'職種'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_14} /></div></div>
<div className={styles.frame_42731893214} ><div className={styles.frame_42731893112} ><Text textType='Text' className={styles.text_12} >{'会社名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_12} /></div>
<div className={styles.frame_42731893214} ><Text textType='Text' className={styles.text_12} >{'職種'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_14} /></div></div>
<div className={styles.frame_42731893014} ><div className={styles.frame_42731893112} ><Text textType='Text' className={styles.text_12} >{'会社名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_12} /></div>
<div className={styles.frame_42731893214} ><Text textType='Text' className={styles.text_12} >{'職種'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_14} /></div></div></div>
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<div className={styles.text_field_44} ><TextFieldTitle className={styles.text_field_title_6} />
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_42} />
<div className={styles.btn_16} ><IcLineplus className={styles.ic_lineplus_15} />
<Text textType='Text' className={styles.text_16} >{'追加'}</Text></div></div>
<div className={styles.text_field_51} ><TextFieldTitle className={styles.text_field_title_6} />
<div className={styles.frame_42731893147} ><Text textType='Text' className={styles.text_12} >{'スキル名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_6} /></div>
<div className={styles.frame_42731893147} ><Text textType='Text' className={styles.text_12} >{'スキル名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_6} /></div>
<div className={styles.frame_42731893147} ><Text textType='Text' className={styles.text_12} >{'スキル名'}</Text>
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_6} /></div></div>
<div className={styles.text_field_5} ><TextFieldTitle className={styles.text_field_title_6} />
<div className={styles.frame_42731893014} ><div className={styles.frame_42731893112} ><Text textType='Text' className={styles.text_12} >{'経験レベル'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_55} /></div>
<div className={styles.frame_42731893214} ><Text textType='Text' className={styles.text_12} >{'年数'}</Text>
<StateDefaultPostIconTrueTagFalsePreIconFalse className={styles.assets_14} /></div></div></div>
<TextField className={styles.text_field_5} required={{}} label={{}} placeholder={{}} disabled={{}} value={{}} noBadge={{}} />
<div className={styles.text_field_58} ><TextFieldTitle className={styles.text_field_title_58} />
<StateDefaultPostIconFalseTagFalsePreIconFalse className={styles.assets_58} /></div></div></div></div>
<div className={styles.frame_42731885659} ><ButtonActive className={styles.btn_59} children={{}} /></div></div>);
}

export default ApplicantInfo;
