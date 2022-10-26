import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import SignupForm, {SignupFormProps} from "./SignupForm";
import {userEvent, within} from "@storybook/testing-library";
import {expect} from "@storybook/jest";

// Here we define versions of the SignupForm component we want to display in Storybook.
// Full disclosure: I'm not a Storybook expert and don't know what best practice is.
// Hopefully I can demonstrate a point here regardless.
export default {
  component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (args: SignupFormProps) => <SignupForm {...args}/>;

// Default
export const Default = Template.bind({});

// Require age verification
export const VerifyAge = Template.bind({});
VerifyAge.args = {verifyAge: true}


/***********************************************************
 * The following section demonstrates Interaction Tests 🎉 *
 ***********************************************************/

// A form to be automatically filled
export const FilledForm = Template.bind({});

// This `play` function will sit in the Storybook web UI's "interactions" tab.
// Go check it out by running `npm run storybook`.
FilledForm.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with `user-event`
  await userEvent.type(canvas.getByRole('textbox'), 'email@domain.test');
  await userEvent.click(canvas.getByRole('button'));

  // Assert that our success message is displayed
  expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}

// This story fails on purpose to demonstrate how the Storybook UI shows such a failure.
// Go check it out!
export const InvalidFilledForm = Template.bind({});

// Let's try entering something else than an email address
InvalidFilledForm.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole('textbox'), 'yeet');
  await userEvent.click(canvas.getByRole('button'));

  /**
   * I've made this assertion fail on purpose! ⚠️
   *
   * Run `npm run test-storybook` in your terminal and notice how it provides a URL
   * to the story that fails.
   *
   * In a more complicated component this makes it a lot easier to SEE what's
   * actually going on (as opposed to trying to make sense of the printed DOM tree).
   *
   * Note: This may be a bug, but when I open the link, there is a gigantic overlay
   *       blocking the actual component. This isn't ideal, but the actual story
   *       component is being rendered behind it.
   */
  await expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}