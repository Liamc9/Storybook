// SignupPageView.stories.js (Storybook Story)
import React from 'react';
import SignupPageView from '../components/authentication/Signup';

export default {
  title: 'Molecules/Authentication/Signup',
  component: SignupPageView,
  argTypes: {
    setEmail: { action: 'setEmail' },
    setPassword: { action: 'setPassword' },
    setUsername: { action: 'setUsername' },
    setReenterPassword: { action: 'setReenterPassword' },
    setTermsAccepted: { action: 'setTermsAccepted' },
    handleSignup: { action: 'handleSignup' },
    setShowSignUp: { action: 'setShowSignUp' },
  },
};

const Template = (args) => <SignupPageView {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: '',
  password: '',
  username: '',
  reenterPassword: '',
  error: '',
  isSignupComplete: false,
  isLoading: false,
  termsAccepted: false,
};

export const SignupComplete = Template.bind({});
SignupComplete.args = {
  email: 'test@example.com',
  isSignupComplete: true,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  isLoading: true,
};
