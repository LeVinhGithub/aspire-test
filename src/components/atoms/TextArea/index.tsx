import React, { forwardRef, HTMLAttributes } from 'react'

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return <textarea ref={ref} {...props} />
})

export { TextArea }
