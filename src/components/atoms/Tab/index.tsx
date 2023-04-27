import React, { useMemo, Children } from 'react'

import { Tabs, TabsProps } from 'antd'

import { TabWrapper } from './Tab.styles'

const { TabPane } = Tabs

export interface TabProps extends TabsProps {
  tabs?: { [key: string]: { key?: string; title?: string } }
  activeColor?: string
  tabType?: TabsProps['type']
  tabLabelStyle?: {
    color?: string
    fontSize?: string
    fontWeight?: string
    fontFamily?: string
  }
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { style, tabType, tabs, children, className, ...rest } = props

  const items = useMemo(() => {
    if (!children) {
      return
    }
    // eslint-disable-next-line consistent-return
    return Children.map(children, (child, index) => {
      const tab = tabs?.[index] || tabs?.[`${index}`]
      const title = tab?.title || `Tab ${index}`
      return (
        <TabPane tab={title} key={tab?.key || `${title}_${index}`}>
          {child}
        </TabPane>
      )
    })
  }, [children, tabs])
  return (
    <div style={style} className={className} ref={ref}>
      <TabWrapper type={tabType} {...rest}>
        {items}
      </TabWrapper>
    </div>
  )
})

export { Tab }
