import React from "react";
import styled from "styled-components";
import { Input } from 'liamc9npm';
import { GoogleIcon, AppleIcon } from "../icons/Icons";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 20px 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 20px 0;
`;

const Message = styled.p`
  margin: 10px 0;
  font-size: 0.875rem;
  color: ${(props) => (props.error ? "#e74c3c" : "#2ecc71")};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  position: relative;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #b99976;
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #a66a0a;
  }
  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

const ForgotPasswordButton = styled.button`
  background: none;
  border: none;
  color: #b9770e;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SignupLink = styled.button`
  background: none;
  border: none;
  color: #b9770e;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const OAuthButton = styled.button`
  padding: 12px;
  border: none;
  width: 100%;
  border-radius: 30px;
  background-color: ${(props) => (props.apple ? "#000" : "#357ae8")};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.apple ? "#333" : "#4285f4")};
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Login = ({
  onLogin,
  onForgotPassword,
  showSignUp,
  setShowSignUp,
  isLoading,
  error,
  resetEmailSent,
  email,
  password,
  rememberMe,
  setEmail,
  setPassword,
  setRememberMe,
  onGoogleSignIn,
  onAppleSignIn,
  onClose
}) => {
  return (
    <Container>
      <Title>Sign in to your account</Title>
      {resetEmailSent && (
        <Message>A password reset email has been sent to {email}.</Message>
      )}
      {error && <Message error>{error}</Message>}
      <Form onSubmit={onLogin}>
        <InputContainer>
          <Input
            name="email"
            id="email"
            type="email"
            label="email"
            colour="#b9770e"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="password"
            id="password"
            type="password"
            label="Password"
            colour="#b9770e"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <RememberMeContainer>
          <ForgotPasswordButton type="button" onClick={onForgotPassword}>
            Forgot your password?
          </ForgotPasswordButton>
        </RememberMeContainer>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </Form>
      <p style={{ textAlign: "center", margin: "10px 0" }}>or</p>
      <OAuthButton onClick={onGoogleSignIn}>
        <IconWrapper>
          <GoogleIcon />
        </IconWrapper>
        Sign in with Google
      </OAuthButton>
      <OAuthButton apple onClick={onAppleSignIn}>
        <IconWrapper>
          <AppleIcon />
        </IconWrapper>
        Sign in with Apple
      </OAuthButton>
      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <p>
          Don't have an account?{" "}
          <SignupLink onClick={() => setShowSignUp(true)}>Sign up</SignupLink>
        </p>
      </div>
    </Container>
  );
};

export default Login;
