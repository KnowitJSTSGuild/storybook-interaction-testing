import {render, screen} from '@testing-library/react';
import SignupForm from './SignupForm'
import {composeStories} from "@storybook/react";
import * as stories from './SignupForm.stories';


describe('SignupForm', () => {
  /**
   * These are "classic" tests where you as a developer set up the component with the required
   * combination of props. In "advanced" cases you'd have a custom `render` function that attaches
   * context providers etc. too.
   */
  describe('classic tests', () => {
    it('should render an email input', () => {
      render(<SignupForm/>)

      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    })

    it('should render an age verification input', () => {
      render(<SignupForm verifyAge/>) // We pass in the verifyAge prop here

      expect(screen.getByRole('button')).toHaveTextContent('Sign up');
    })
  })

  /**
   * These practically identical tests utilize Storybook's `composeStories` function.
   * They take the stories you've already created, including any prop combinations you've
   * assigned to them, and work from those.
   *
   * Allegedly this approach also supplies the components with any advanced context providers or
   * other wrappers you're already using in your stories. I haven't tested this, but it would make sense.
   */
  describe('Storybook tests', () => {
    // Import our component's stories. They come with the proper combination of props and everything.
    const {Default, VerifyAge} = composeStories(stories);

    it('should render an email input', () => {
      render(<Default/>);

      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    })

    it('should render an age verification input', () => {
      render(<VerifyAge/>);

      // Notice how no `verifyAge` prop is passed! The story already has the required props.
      // I know that this seems like a minor thing in this contrived context, but consider what
      // the benefits could be in a larger, more complex component!

      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })
  })
})
