import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import assets from "@assets/index";
import Image from "next/image";
import { Text } from "@components/atoms/Text";
import { ImagePicker } from "@components/atoms/ImagePicker";
import { Button } from "@components/atoms/Button";
import { ControlledInput } from "@components/atoms/ControlledInput";
import { Select } from "@components/atoms/Select";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type SafariStatusbarProps = DefaultPageProps & {
  className?: string;
  children: any;
}
interface Form1FormData {
input_1: string
input_2: string
}
function SafariStatusbar (props: SafariStatusbarProps): JSX.Element {
  
  const formForm1 = useForm1()
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><div className={styles.statusi_phone_12_mini_75} ><div className={styles.batteryi_phone_12_mini_73} ><Image sourceType='upload' className={styles.image_66} src={assets('1675162167698-svg')} alt='Image66' />
<Image sourceType='upload' className={styles.image_70} src={assets('1666338290751-svg')} alt='Image70' />
<div className={styles.capacity_72} /></div>
<Image sourceType='upload' className={styles.image_74} src={assets('1666338290772-svg')} alt='Image74' />
<Image sourceType='upload' className={styles.image_75} src={assets('1666338290776-svg')} alt='Image75' /></div>
<Text textType='Text' className={styles.text_76} >{'9:41'}</Text>
<div className={styles.imagepicker_1_container} ><div className={styles.imagepicker_1_inner} ><Text textType='Text' className={styles.imagepicker_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.imagepicker_1_required} >{'*'}</Text></div>
<ImagePicker action={'[URL]'} multiple={false} maxCount={7} className={styles.imagepicker_1} ><Button buttonType='primary' className={styles.imagepicker_1_button} >{'[ImagePicker]'}</Button></ImagePicker>
<form className={styles.form_1} ><Text textType='Text' className={styles.form_1_name} >{'Form Name'}</Text>
<div className={styles.input_1_container} ><div className={styles.input_1_inner} ><Text textType='Text' className={styles.input_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.input_1_required} >{'*'}</Text></div>
<ControlledInput placeholder={'Placeholder'} className={styles.input_1} control={formForm1.control} formField='input_1' inputStyle={{ backgroundColor: "rgb(255, 255, 255)", width: "100%", fontWeight: "500", border: "1px solid rgb(217, 217, 217)"}} />
<div className={styles.input_1_error_message_container} ><Text textType='Text' className={styles.input_1_required} >{'Error Message'}</Text></div></div>
<div className={styles.input_1_container} ><div className={styles.input_1_inner} ><Text textType='Text' className={styles.input_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.input_1_required} >{'*'}</Text></div>
<ControlledInput placeholder={'Placeholder'} className={styles.input_1} control={formForm1.control} formField='input_2' inputStyle={{ backgroundColor: "rgb(255, 255, 255)", width: "100%", fontWeight: "500", border: "1px solid rgb(217, 217, 217)"}} />
<div className={styles.input_1_error_message_container} ><Text textType='Text' className={styles.input_1_required} >{'Error Message'}</Text></div></div>
<Button buttonType='primary' className={styles.form_1_button} >{'Submit'}</Button></form>
<div className={styles.imagepicker_1_container} ><div className={styles.select_1_inner} ><Text textType='Text' className={styles.input_1_label} >{'Label'}</Text>
<Text textType='Text' className={styles.input_1_required} >{'*'}</Text></div>
<Select placeholder={'Placeholder'} data={[{ value: 'option_1', label: 'Option 1' }, { value: 'option_2', label: 'Option 2' }, { value: 'option_3', label: 'Option 3' }]} defaultValue={'option_1'} iconProps={{ elementKey: "", gutter: [], drawerTitle: [], placeholder: [], inputLabel: [], href: [], action: [], data: [], totalPage: [], defaultValue: [], source: [], title: [], childrenData: [], responsiveVisibility: [], dataSource: [], tableColumns: [], tableActions: [], onPaginationChange: [], onDataSortingChange: [], iconName: "FaChevronDown", color: "\"#000\"", activeColor: "null", inactiveColor: "null", checkColor: "null", size: "16"}} className={styles.select_1} containerStyle={{ height: "auto", border: "3px solid rgb(23, 125, 220)"}} /></div></div></div>);
}

    const useForm1 = () => {
      const validationScheme = useMemo(() => (
yup.object().shape({
input_1: yup.string().notRequired(),
input_2: yup.string().notRequired(),
})), [])
      return useForm<Form1FormData>({
      resolver: yupResolver(validationScheme),
      shouldFocusError: true,
      mode: 'onChange',
      reValidateMode: 'onChange',
    });
    }
export default SafariStatusbar;
