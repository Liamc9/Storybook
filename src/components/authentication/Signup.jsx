import React from "react";
import styled from "styled-components";
import { Input } from "liamc9npm";

const SignupPageView = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  reenterPassword,
  setReenterPassword,
  error,
  isSignupComplete,
  isLoading,
  termsAccepted,
  setTermsAccepted,
  handleSignup,
  setShowSignUp,
}) => {
  if (isSignupComplete) {
    return (
      <Container>
        <Title>Signup Successful!</Title>
        <p>
          Please check your email <strong>{email}</strong> for a verification link to
          activate your account.
        </p>
        <ButtonWrapper>
          <Button onClick={() => setShowSignUp(false)}>Return to Login</Button>
        </ButtonWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Sign up for an account</Title>
      {error && <ErrorText>{error}</ErrorText>}
      <Form onSubmit={handleSignup}>
          <Input
            name="username"
            id="username"
            type="text"
            label="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            name="email"
            id="email"
            type="email"
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            id="password"
            type="password"
            label="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            name="reenterpassword"
            id="reenterpassword"
            type="password"
            label="Re-enter Password"
            required
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <span>
            I accept the <Link href="/terms">Terms and Conditions</Link> and <Link href="/privacy">Privacy Policy</Link>.
          </span>
        </CheckboxWrapper>
        <ButtonWrapper>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </ButtonWrapper>
      </Form>
      <LoginWrapper>
        <p>
          Already have an account? <LoginLink onClick={() => setShowSignUp(false)}>Login</LoginLink>
        </p>
      </LoginWrapper>
    </Container>
  );
};

export default SignupPageView;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
`;

const ErrorText = styled.p`
  color: #f56565;
  font-size: 0.875rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const Link = styled.a`
  color: #b8860b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: #b8860b;
  color: white;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #a37009;
  }
  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

const LoginWrapper = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const LoginLink = styled.button`
  background: none;
  border: none;
  color: #b8860b;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
