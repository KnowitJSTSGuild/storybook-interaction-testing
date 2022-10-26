import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import SignupForm from "./SignupForm";
import {userEvent, within} from "@storybook/testing-library";
import {expect} from "@storybook/jest";

export default {
  title: 'SignupForm',
  component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = () => <SignupForm/>;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});

// Check out this play function!
FilledForm.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with `user-event`
  await userEvent.type(canvas.getByRole('textbox'), 'email@domain.test');

  await userEvent.click(canvas.getByRole('button'));

  // Assert that our success message is displayed
  await expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}