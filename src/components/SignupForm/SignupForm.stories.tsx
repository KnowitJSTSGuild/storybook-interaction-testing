import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import SignupForm from "./SignupForm";

export default {
  title: 'SignupForm',
  component: SignupForm,
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = () => <SignupForm/>;

export const Default = Template.bind({});