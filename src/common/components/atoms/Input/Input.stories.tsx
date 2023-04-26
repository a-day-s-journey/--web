import Input, { InputProps } from './index';

import React from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'components/Input',
  component: Input,
};
const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextType = Template.bind({});
TextType.args = {
  type: 'text',
  placeholder: '빈칸을 채우시오',
};
export const NumberType = Template.bind({});
NumberType.args = {
  type: 'number',
  placeholder: '빈칸을 채우시오',
};

export const DateType = Template.bind({});
DateType.args = {
  type: 'date',
  placeholder: '빈칸을 채우시오',
};

export const EmailType = Template.bind({});
DateType.args = {
  type: 'email',
  placeholder: '빈칸을 채우시오',
};
export const PasswordType = Template.bind({});
PasswordType.args = {
  type: 'password',
  placeholder: '빈칸을 채우시오',
};
