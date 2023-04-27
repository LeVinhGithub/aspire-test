import React, { forwardRef, HTMLAttributes } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div {...rest} className={className} ref={ref}>
      {children}
    </div>
  )
})

export { Divider }
