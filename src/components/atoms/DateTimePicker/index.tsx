import React, { useMemo } from 'react'
import { DatePicker, DatePickerProps } from 'antd'

export enum PickerEnum {
  TIME = 'time',
  DATE = 'date',
  WEEK = 'week',
  MONTH = 'month'
}

export interface Props
  extends Omit<DatePickerProps, 'picker' | 'defaultValue' | 'value'> {
  picker?: `${PickerEnum}`
  showTime?: boolean
  defaultValue?: string
  value?: Date | string
}

const DateTimePicker = (props: Props) => {
  const {
    defaultValue,
    picker = 'date',
    className,
    value,
    ...rest
  } = props

  const memoDefaultValue = useMemo<undefined | Date>(() => {
    if (typeof defaultValue === 'string') return new Date(defaultValue)
    return defaultValue
  }, [defaultValue])

  const currentValue = useMemo(() => {
    if (!value) {
      return undefined
    }

    if (typeof value === 'string') {
      return new Date(value)
    }
    return value
  }, [value])

  return (
    <div className={className}>
      <DatePicker
        picker={picker}
        defaultValue={memoDefaultValue}
        value={currentValue}
        {...rest}
      />
    </div>
  )
}

export { DateTimePicker }
