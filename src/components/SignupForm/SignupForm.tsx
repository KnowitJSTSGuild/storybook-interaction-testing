import React from 'react';
import useApi from "../hooks/useApi";
import './SignupForm.css';

/**
 * Allows the user to enter their email address and sign up for stuff
 */
const SignupForm = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const {getStuff, success} = useApi()

  /**
   * Handles form submit events. Fetches data from a totally real API.
   * @param event Submit event
   */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getStuff();

    // Reset the form
    formRef.current?.reset();
  }

  return (
    <form className="form signup" onSubmit={onSubmit} ref={formRef}>
      <label htmlFor="email">Email (required)</label>
      <input type="email" required id="email"/>

      <button type="submit">Sign up</button>

      {success &&
        <output>Thank you for signing up!</output>
      }
    </form>
  )
}

export default SignupForm

