import React from 'react';
import LoginPage from '../../components/pages/LoginPage';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: ${(props) => (props.isSignupComplete ? '#DFF0D8' : '#FFFFFF')};
`;

export default {
  title: 'Pages/Login',
  component: LoginPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# LoginPage Component

The **LoginPage** component handles user authentication processes, including sign-up, sign-in, and password recovery. It provides a seamless interface for users to create accounts, log in, and manage their credentials.

## Features

- **Sign Up Mode:** Allows new users to register by providing necessary details.
- **Sign In Mode:** Enables existing users to log into their accounts.
- **Signup Completion:** Displays a confirmation message upon successful registration.
- **Loading State:** Indicates ongoing authentication processes.

## Props

- **email**: _string_ — User's email address.
- **password**: _string_ — User's password.
- **username**: _string_ — User's chosen username (required for sign-up).
- **reenterPassword**: _string_ — Password confirmation (required for sign-up).
- **error**: _string_ — Error message to display authentication failures.
- **isSignupComplete**: _boolean_ — Indicates if the sign-up process is complete.
- **isLoading**: _boolean_ — Shows a loading indicator during authentication.
- **termsAccepted**: _boolean_ — Whether the user has accepted terms and conditions.
- **isSignUp**: _boolean_ — Toggles between sign-up and sign-in modes.
- **resetEmailSent**: _boolean_ — Indicates if a password reset email has been sent.

## Actions

- **setEmail**: _function_ — Handles email input changes.
- **setPassword**: _function_ — Handles password input changes.
- **setUsername**: _function_ — Handles username input changes.
- **setReenterPassword**: _function_ — Handles password confirmation input changes.
- **setTermsAccepted**: _function_ — Toggles terms and conditions acceptance.
- **handleSignup**: _function_ — Initiates the sign-up process.
- **handleLogin**: _function_ — Initiates the login process.
- **setShowSignUp**: _function_ — Toggles between sign-up and sign-in views.
- **onForgotPassword**: _function_ — Handles password recovery requests.
- **onGoogleSignIn**: _function_ — Initiates Google OAuth sign-in.
- **onAppleSignIn**: _function_ — Initiates Apple OAuth sign-in.

## Usage Example

Below is an example showing how to integrate the **LoginPage** component into a React application:

\`\`\`jsx
import React, { useState } from 'react';
import LoginPage from './components/authentication/LoginPage';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signing up with:', { email, password, username, reenterPassword, termsAccepted });
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <LoginPage
      email={email}
      password={password}
      username={username}
      reenterPassword={reenterPassword}
      termsAccepted={termsAccepted}
      isSignUp={isSignUp}
      setEmail={(newEmail) => setEmail(newEmail)}
      setPassword={(newPassword) => setPassword(newPassword)}
      setUsername={(newUsername) => setUsername(newUsername)}
      setReenterPassword={(newReenterPassword) => setReenterPassword(newReenterPassword)}
      setTermsAccepted={(accepted) => setTermsAccepted(accepted)}
      handleSignup={handleSignup}
      handleLogin={handleLogin}
      setShowSignUp={(show) => setIsSignUp(show)}
    />
  );
};

export default App;
\`\`\`

## Examples

- **Sign Up Mode**
- **Sign In Mode**
- **Signup Complete**
- **Loading State**
        `,
      },
    },
  },
  argTypes: {
    setEmail: { action: 'setEmail' },
    setPassword: { action: 'setPassword' },
    setUsername: { action: 'setUsername' },
    setReenterPassword: { action: 'setReenterPassword' },
    setTermsAccepted: { action: 'setTermsAccepted' },
    handleSignup: { action: 'handleSignup' },
    handleLogin: { action: 'handleLogin' },
    setShowSignUp: { action: 'setShowSignUp' },
    onForgotPassword: { action: 'onForgotPassword' },
    onGoogleSignIn: { action: 'onGoogleSignIn' },
    onAppleSignIn: { action: 'onAppleSignIn' },
  },
};

const Template = (args) => (
  <Container isSignupComplete={args.isSignupComplete}>
    <LoginPage {...args} />
  </Container>
);

export const SignUpMode = Template.bind({});
SignUpMode.args = {
  email: '',
  password: '',
  username: '',
  reenterPassword: '',
  error: '',
  isSignupComplete: false,
  isLoading: false,
  termsAccepted: false,
  isSignUp: true,
  resetEmailSent: false,
};

export const SignInMode = Template.bind({});
SignInMode.args = {
  email: '',
  password: '',
  error: '',
  isSignupComplete: false,
  isLoading: false,
  isSignUp: false,
  resetEmailSent: false,
};

export const SignupComplete = Template.bind({});
SignupComplete.args = {
  email: 'user@example.com',
  isSignupComplete: true,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  isLoading: true,
};
