import React from 'react'
import { Col as AntCol, ColProps as AntColProps } from 'antd'

export interface ColProps extends AntColProps {}

const Col = (props: ColProps) => {
  const { children, className, ...rest } = props
  return (
    <AntCol {...rest} className={className}>
      {children}
    </AntCol>
  )
}

export { Col }
