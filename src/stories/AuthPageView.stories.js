import React from 'react';
import AuthPageView from '../components/authentication/AuthPageView';

export default {
  title: 'Molecules/Authentication/AuthPageView',
  component: AuthPageView,
  tags: ['autodocs'],
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

const Template = (args) => <AuthPageView {...args} />;

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
