import React, { CSSProperties, useMemo } from 'react'
import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
  Space as AntSpace,
  SpaceProps as AntSpaceProps
} from 'antd'
import { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox'

import { CheckboxWrapper } from './Checkbox.styles'

export interface CheckboxOptions extends AntCheckboxProps {
  label: string
}

export interface CheckboxStateColor {
  checkColor?: string
  activeColor?: string
  inactiveColor?: string
  labelStyle?: CSSProperties
}
export interface Props
  extends CheckboxStateColor,
    Omit<AntCheckboxGroupProps, 'options'> {
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap'
  data: CheckboxOptions[]
  spaceProps?: AntSpaceProps
  containerStyle?: Record<string, unknown> | string
  direction?: 'horizontal' | 'vertical' | undefined
}

export function isWrap(wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap') {
  return (typeof wrap === 'string' && ['wrap', 'wrap-reverse'].includes(wrap)) || wrap === true
}

const Checkbox = (props: Props) => {
  const {
    data,
    wrap = 'wrap',
    spaceProps,
    containerStyle = {},
    activeColor,
    inactiveColor,
    checkColor,
    labelStyle,
    direction,
    className,
    ...rest
  } = props

  const customSpaceProps = useMemo<AntSpaceProps>(() => {
    return {
      ...spaceProps,
      wrap: isWrap(wrap)
    }
  }, [wrap, spaceProps])

  return (
    <CheckboxWrapper
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      checkColor={checkColor}
      labelStyle={labelStyle}
      className={className}
    >
      <AntCheckbox.Group {...rest}>
        <AntSpace direction={direction} {...customSpaceProps}>
          {data?.map((option) => (
            <AntCheckbox {...option}>{option.label}</AntCheckbox>
          ))}
        </AntSpace>
      </AntCheckbox.Group>
    </CheckboxWrapper>
  )
}

export { Checkbox }
