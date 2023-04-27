import React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'

export interface Props
  extends AntUploadProps {
}

const ImagePicker = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <div className={className}>
      <AntUpload
        listType="picture"
        beforeUpload={() => false}
        {...rest}
      >
        {children}
      </AntUpload>
    </div>
  )
}

export { ImagePicker }
