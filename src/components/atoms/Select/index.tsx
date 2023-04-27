import React, { useMemo, CSSProperties } from 'react'
import ReactSelect, {
  CSSObjectWithLabel,
  components as SelectComponents,
  Props as ReactSelectProps,
  SelectInstance,
  DropdownIndicatorProps,
  GroupBase,
  OptionsOrGroups
} from 'react-select'

import { Icon, IconProps } from '@components/atoms/Icon'

export interface SelectPropsDatum {
  label: string
  value: string
}

export interface Props
  extends Omit<ReactSelectProps, 'onChange' | 'defaultValue' | 'value'> {
  placeholderStyle?: CSSProperties
  containerStyle?: CSSProperties
  dropdownStyle?: CSSProperties
  optionStyle?: CSSProperties
  iconProps?: IconProps
  data?: OptionsOrGroups<SelectPropsDatum, GroupBase<SelectPropsDatum>> | undefined
  defaultValue?: string | string[] | undefined
  value?: string | string[] | undefined
  onChange?: (value: string) => void
}

const extractSelectOptions = (
  value: string | string[] | undefined,
  data: OptionsOrGroups<SelectPropsDatum, GroupBase<SelectPropsDatum>> | undefined,
  isMulti: boolean
) => {
  if (!value || !data) {
    return undefined
  }

  if (isMulti) {
    return data.filter((opt) => (value as string[]).includes((opt as SelectPropsDatum).value))
  }

  return data.find((opt) => (opt as SelectPropsDatum).value === value)
}

const Select = React.forwardRef<SelectInstance, Props>((props) => {
  const {
    responsiveVisibility,
    className,
    styles,
    data,
    placeholderStyle,
    containerStyle,
    dropdownStyle,
    optionStyle,
    iconProps,
    defaultValue,
    value,
    isMulti = false,
    onChange,
    ...rest
  } = props

  const customStyles = useMemo(() => {
    const results = styles || {}

    if (placeholderStyle) {
      results.placeholder = (style: CSSObjectWithLabel) => ({ ...style, ...placeholderStyle })
    }
    if (containerStyle) {
      results.control = (style: CSSObjectWithLabel) => ({ ...style, ...containerStyle })
    }
    if (dropdownStyle) {
      results.menu = (style: CSSObjectWithLabel) => ({ ...style, ...dropdownStyle })
    }
    if (optionStyle) {
      results.option = (style: CSSObjectWithLabel) => ({ ...style, ...optionStyle })
    }
    return results
  }, [styles, placeholderStyle, containerStyle, dropdownStyle, optionStyle])
  const components = useMemo(() => {
    if (!iconProps) {
      return
    }
    return {
      DropdownIndicator: (
        dropdownIndicatorProps: DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
      ) => {
        return (
          <SelectComponents.DropdownIndicator {...dropdownIndicatorProps}>
            <Icon {...iconProps} />
          </SelectComponents.DropdownIndicator>
        )
      }
    }
  }, [iconProps])

  const defaultValueOption = useMemo(
    () => extractSelectOptions(defaultValue, data, isMulti),
    [defaultValue, data, isMulti]
  )

  const valueOption = useMemo(
    () => extractSelectOptions(value, data, isMulti),
    [value, data, isMulti]
  )

  return (
    <ReactSelect
      isMulti={isMulti}
      className={className}
      components={components}
      menuIsOpen={rest?.menuIsOpen}
      styles={customStyles}
      options={data}
      defaultValue={defaultValueOption}
      value={valueOption}
      onChange={(newValue: any) => {
        if (onChange) {
          if (isMulti) {
            onChange(newValue?.map((newValueItem: any) => newValueItem.value))
          } else {
            onChange(newValue?.value)
          }
        }
      }}
      {...rest}
    />
  )
})

export { Select }

export type { SelectInstance as SelectRef } from 'react-select'
