
// LoginForm.stories.js - Storybook Story for LoginForm
import React, { useState } from "react";
import Login from "../components/authentication/Login";

export default {
  title: "Molecules/Authentication/Login",
  component: Login,
};

const Template = (args) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Login
      {...args}
      email={email}
      password={password}
      rememberMe={rememberMe}
      setEmail={setEmail}
      setPassword={setPassword}
      setRememberMe={setRememberMe}
      showSignUp={showSignUp}
      setShowSignUp={setShowSignUp}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  onLogin: (e) => {
    e.preventDefault();
    alert("Login button clicked");
  },
  onForgotPassword: () => {
    alert("Forgot password button clicked");
  },
  isLoading: false,
  error: "",
  resetEmailSent: false,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Invalid email or password. Please try again.",
};

export const ResetEmailSent = Template.bind({});
ResetEmailSent.args = {
  ...Default.args,
  resetEmailSent: true,
};
