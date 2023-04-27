import React, { CSSProperties, useMemo } from 'react';
import { CSSObject } from 'styled-components';
import {
  Radio as AntRadio,
  RadioProps as AntRadioProps,
  RadioGroupProps as AntRadioGroupProps,
  Space as AntSpace,
  SpaceProps as AntSpaceProps,
} from 'antd';

export interface RadioStateColor {
  checkColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  labelStyle?: CSSObject;
}

import { RadioWrapper } from './Radio.styles';

export interface RadioOptions extends AntRadioProps {
  label: string;
}

export interface Props extends RadioStateColor, Omit<AntRadioGroupProps, 'options'> {
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap';
  data: RadioOptions[];
  spaceProps?: AntSpaceProps;
  containerStyle?: Record<string, unknown> | string;
  direction?: 'horizontal' | 'vertical' | undefined;
}

export function isWrap(wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap') {
  return (typeof wrap === 'string' && ['wrap', 'wrap-reverse'].includes(wrap)) || wrap === true;
}

const Radio = (props: Props) => {
  const {
    data,
    spaceProps,
    className,
    activeColor,
    inactiveColor,
    labelStyle,
    direction,
    containerStyle = {},
    wrap = 'wrap',
    ...rest
  } = props;

  const customSpaceProps = useMemo<AntSpaceProps>(() => {
    return {
      ...spaceProps,
      wrap: isWrap(wrap),
    };
  }, [wrap, spaceProps]);
  const containerStyleProps = useMemo(() => {
    return typeof containerStyle === 'object'
      ? {
          style: containerStyle as CSSProperties,
        }
      : {
          className: containerStyle,
        };
  }, [containerStyle]);

  return (
    <RadioWrapper
      className={className}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      labelStyle={labelStyle}
      {...containerStyleProps}
    >
      <AntRadio.Group {...rest}>
        <AntSpace direction={direction} {...customSpaceProps}>
          {data?.map((option) => (
            <AntRadio key={option.value as string} value={option.value} {...option}>
              {option.label}
            </AntRadio>
          ))}
        </AntSpace>
      </AntRadio.Group>
    </RadioWrapper>
  );
};

export { Radio };
export type { CheckboxOptionType as RadioCheckboxOptionType } from 'antd';
