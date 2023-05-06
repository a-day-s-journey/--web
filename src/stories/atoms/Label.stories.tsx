import Label, { LabelProps } from '@components/atoms/Label/index';

import React from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'components/Atoms/Label',
  component: Label,
};

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = { children: '라벨', required: true };
