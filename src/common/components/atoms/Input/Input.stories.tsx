import Input, { InputProps } from './index';

import React from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'components/Input',
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  placeholder: '빈칸을 채우시오',
};

export const Number = Template.bind({});

Number.args = {
  type: 'number',
  placeholder: '숫자를 입력해주세요',
};

export const File = Template.bind({});

File.args = {
  type: 'file',
  placeholder: '파일 등록??',
};

export const Color = Template.bind({});

Color.args = {
  type: 'color',
  placeholder: '색 선택',
};
