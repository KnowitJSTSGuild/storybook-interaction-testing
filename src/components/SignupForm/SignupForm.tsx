import React from 'react';
import useApi from "../hooks/useApi";
import './SignupForm.css';

export interface SignupFormProps {
  verifyAge?: boolean;
}

/**
 * Allows the user to enter their email address and sign up for stuff
 *
 * @param props Component props
 * @param props.verifyAge Require the user to verify their age?
 */
const SignupForm = ({verifyAge}: SignupFormProps) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const {getStuff, success} = useApi()

  /**
   * Handles form submit events. Fetches data from a totally real API.
   * @param event Submit event
   */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Pretend to do stuff
    event.preventDefault();
    await getStuff();

    // Reset the form
    formRef.current?.reset();
  }

  return (
    <form className="form signup" onSubmit={onSubmit} ref={formRef}>
      <label htmlFor="email">Email (required)</label>
      <input type="email" required id="email"/>

      {verifyAge && (
        <>
          <label htmlFor="age-verification">I am totally old enough (required)</label>
          <input type="checkbox" required id="age-verification" name="age-verification"/>
        </>
      )}

      <button type="submit">Sign up</button>

      {success &&
        <output>Thank you for signing up!</output>
      }
    </form>
  )
}

export default SignupForm

