import {render, screen} from '@testing-library/react';
import SignupForm from './SignupForm'

describe('SignupForm', () => {
  it('should render an email input', () => {
    render(<SignupForm/>)

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  })

  it('should render an sign-up button', () => {
    render(<SignupForm/>)

    expect(screen.getByRole('button')).toHaveTextContent('Sign up');
  })
})
