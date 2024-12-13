"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[556],{"./src/stories/molecules/authentication/AuthPageView.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoadingState:()=>LoadingState,SignInMode:()=>SignInMode,SignUpMode:()=>SignUpMode,SignupComplete:()=>SignupComplete,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AuthPageView_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/liamc9npm/dist/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const authentication_AuthPageView=_ref=>{let{email,setEmail,password,setPassword,reenterPassword,setReenterPassword,error,isSignupComplete,setIsSignupComplete,isLoading,termsAccepted,setTermsAccepted,handleSignup,handleLogin,setShowSignUp,isSignUp,onForgotPassword,resetEmailSent,onGoogleSignIn,themeColor="#A855F7"}=_ref;return isSignupComplete?react.createElement(Container,null,react.createElement(Title,null,"Signup Successful!"),react.createElement("p",null,"Please check your email ",react.createElement("strong",null,email)," for a verification link to activate your account."),react.createElement(ButtonWrapper,null,react.createElement(Button,{themeColor,onClick:()=>{setIsSignupComplete(!1),setShowSignUp(!1)}},"Return to Login"))):react.createElement(Container,null,react.createElement(IconWrapper1,null,react.createElement(LettzIconStyled,{themeColor})),react.createElement(Title,null,isSignUp?"Sign up to Lettz to get started!":"Sign in to Lettz"),resetEmailSent&&react.createElement(Message,null,"A password reset email has been sent to ",email,"."),error&&react.createElement(Message,{error:!0},error),react.createElement(Form,{onSubmit:isSignUp?handleSignup:handleLogin},react.createElement(dist.Input,{name:"email",id:"email",type:"email",label:"Email",color:themeColor,required:!0,value:email,onChange:e=>setEmail(e.target.value)}),react.createElement(dist.Input,{name:"password",id:"password",type:"password",label:"Password",color:themeColor,required:!0,value:password,onChange:e=>setPassword(e.target.value)}),isSignUp&&react.createElement(dist.Input,{name:"reenterpassword",id:"reenterpassword",type:"password",label:"Re-enter Password",color:themeColor,required:!0,value:reenterPassword,onChange:e=>setReenterPassword(e.target.value)}),isSignUp&&react.createElement(CheckboxWrapper,null,react.createElement(Checkbox,{type:"checkbox",checked:termsAccepted,onChange:e=>setTermsAccepted(e.target.checked),required:!0}),react.createElement("span",null,"I accept the ",react.createElement(Link,{themeColor,href:"/terms"},"Terms and Conditions")," and ",react.createElement(Link,{themeColor,href:"/privacy"},"Privacy Policy"),".")),!isSignUp&&react.createElement(RememberMeContainer,null,react.createElement(ForgotPasswordButton,{themeColor,type:"button",onClick:onForgotPassword},"Forgot your password?")),react.createElement(ButtonWrapper,null,react.createElement(Button,{themeColor,type:"submit",disabled:isLoading},isLoading?isSignUp?"Signing up...":"Signing in...":isSignUp?"Sign Up":"Sign In"))),react.createElement(Divider,null,react.createElement(HorizontalLine,null),react.createElement("p",null,"or"),react.createElement(HorizontalLine,null)),react.createElement(OAuthButton,{onClick:onGoogleSignIn},react.createElement(IconWrapper,null,react.createElement(Icons.GoogleIcon,null)),"Sign in with Google"),react.createElement(LoginWrapper,null,react.createElement("p",null,isSignUp?"Already have an account?":"Don't have an account?"," "," ",react.createElement(LoginLink,{themeColor,onClick:()=>setShowSignUp(!isSignUp)},isSignUp?"Login":"Sign up"))))},Container=styled_components_browser_esm.default.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 20px 10px;
  }
`,IconWrapper1=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: center;
`,LettzIconStyled=(0,styled_components_browser_esm.default)(Icons.LettzIcon)`
  width: 50px;
  height: 50px;
  color: ${props=>props.themeColor}; /* Apply themeColor to currentColor */
`,Title=styled_components_browser_esm.default.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 20px;
`,Message=styled_components_browser_esm.default.p`
  margin: 10px 0;
  font-size: 0.875rem;
  color: ${props=>props.error?"#e74c3c":"#2ecc71"};
  text-align: center;
`,Form=styled_components_browser_esm.default.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`,CheckboxWrapper=styled_components_browser_esm.default.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`,Checkbox=styled_components_browser_esm.default.input`
  cursor: pointer;
`,Link=styled_components_browser_esm.default.a`
  color: ${props=>props.themeColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,ButtonWrapper=styled_components_browser_esm.default.div`
  margin-top: 24px;
`,Button=styled_components_browser_esm.default.button`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props=>props.themeColor};
  color: white;
  padding: 12px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`,RememberMeContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
`,ForgotPasswordButton=styled_components_browser_esm.default.button`
  background: none;
  border: none;
  color: ${props=>props.themeColor};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,Divider=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 16px;
  p {
    margin: 0;
    font-size: 1rem;
    color: #6b7280;
  }
`,HorizontalLine=styled_components_browser_esm.default.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #d1d5db;
`,LoginWrapper=styled_components_browser_esm.default.div`
  margin-top: 16px;
  text-align: center;
`,LoginLink=styled_components_browser_esm.default.button`
  background: none;
  border: none;
  color: ${props=>props.themeColor};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,OAuthButton=styled_components_browser_esm.default.button`
  padding: 12px;
  border: none;
  width: 100%;
  border-radius: 30px;
  border:  2px solid #ccc;
  background-color:  #fff;
  color:  #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ccc;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,IconWrapper=styled_components_browser_esm.default.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`,AuthPageView_stories_Container=styled_components_browser_esm.default.div`
  padding: 2rem;
  background-color: ${props=>props.isSignupComplete?"#DFF0D8":"#FFFFFF"};
`,AuthPageView_stories={title:"Molecules/Authentication/AuthPageView",component:authentication_AuthPageView,tags:["autodocs"],parameters:{docs:{description:{component:"\n# AuthPageView Component\n\nThe **AuthPageView** component handles user authentication processes, including sign-up, sign-in, and password recovery. It provides a seamless interface for users to create accounts, log in, and manage their credentials.\n\n## Features\n\n- **Sign Up Mode:** Allows new users to register by providing necessary details.\n- **Sign In Mode:** Enables existing users to log into their accounts.\n- **Signup Completion:** Displays a confirmation message upon successful registration.\n- **Loading State:** Indicates ongoing authentication processes.\n\n## Props\n\n- **email**: _string_ — User's email address.\n- **password**: _string_ — User's password.\n- **username**: _string_ — User's chosen username (required for sign-up).\n- **reenterPassword**: _string_ — Password confirmation (required for sign-up).\n- **error**: _string_ — Error message to display authentication failures.\n- **isSignupComplete**: _boolean_ — Indicates if the sign-up process is complete.\n- **isLoading**: _boolean_ — Shows a loading indicator during authentication.\n- **termsAccepted**: _boolean_ — Whether the user has accepted terms and conditions.\n- **isSignUp**: _boolean_ — Toggles between sign-up and sign-in modes.\n- **resetEmailSent**: _boolean_ — Indicates if a password reset email has been sent.\n\n## Actions\n\n- **setEmail**: _function_ — Handles email input changes.\n- **setPassword**: _function_ — Handles password input changes.\n- **setUsername**: _function_ — Handles username input changes.\n- **setReenterPassword**: _function_ — Handles password confirmation input changes.\n- **setTermsAccepted**: _function_ — Toggles terms and conditions acceptance.\n- **handleSignup**: _function_ — Initiates the sign-up process.\n- **handleLogin**: _function_ — Initiates the login process.\n- **setShowSignUp**: _function_ — Toggles between sign-up and sign-in views.\n- **onForgotPassword**: _function_ — Handles password recovery requests.\n- **onGoogleSignIn**: _function_ — Initiates Google OAuth sign-in.\n- **onAppleSignIn**: _function_ — Initiates Apple OAuth sign-in.\n\n## Usage Example\n\nBelow is an example showing how to integrate the **AuthPageView** component into a React application:\n\n```jsx\nimport React, { useState } from 'react';\nimport AuthPageView from './components/authentication/AuthPageView';\n\nconst App = () => {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [username, setUsername] = useState('');\n  const [reenterPassword, setReenterPassword] = useState('');\n  const [termsAccepted, setTermsAccepted] = useState(false);\n  const [isSignUp, setIsSignUp] = useState(true);\n\n  const handleSignup = () => {\n    // Implement signup logic here\n    console.log('Signing up with:', { email, password, username, reenterPassword, termsAccepted });\n  };\n\n  const handleLogin = () => {\n    // Implement login logic here\n    console.log('Logging in with:', { email, password });\n  };\n\n  return (\n    <AuthPageView\n      email={email}\n      password={password}\n      username={username}\n      reenterPassword={reenterPassword}\n      termsAccepted={termsAccepted}\n      isSignUp={isSignUp}\n      setEmail={(newEmail) => setEmail(newEmail)}\n      setPassword={(newPassword) => setPassword(newPassword)}\n      setUsername={(newUsername) => setUsername(newUsername)}\n      setReenterPassword={(newReenterPassword) => setReenterPassword(newReenterPassword)}\n      setTermsAccepted={(accepted) => setTermsAccepted(accepted)}\n      handleSignup={handleSignup}\n      handleLogin={handleLogin}\n      setShowSignUp={(show) => setIsSignUp(show)}\n    />\n  );\n};\n\nexport default App;\n```\n\n## Examples\n\n- **Sign Up Mode**\n- **Sign In Mode**\n- **Signup Complete**\n- **Loading State**\n        "}}},argTypes:{setEmail:{action:"setEmail"},setPassword:{action:"setPassword"},setUsername:{action:"setUsername"},setReenterPassword:{action:"setReenterPassword"},setTermsAccepted:{action:"setTermsAccepted"},handleSignup:{action:"handleSignup"},handleLogin:{action:"handleLogin"},setShowSignUp:{action:"setShowSignUp"},onForgotPassword:{action:"onForgotPassword"},onGoogleSignIn:{action:"onGoogleSignIn"},onAppleSignIn:{action:"onAppleSignIn"}}},Template=args=>react.createElement(AuthPageView_stories_Container,{isSignupComplete:args.isSignupComplete},react.createElement(authentication_AuthPageView,args)),SignUpMode=Template.bind({});SignUpMode.args={email:"",password:"",username:"",reenterPassword:"",error:"",isSignupComplete:!1,isLoading:!1,termsAccepted:!1,isSignUp:!0,resetEmailSent:!1};const SignInMode=Template.bind({});SignInMode.args={email:"",password:"",error:"",isSignupComplete:!1,isLoading:!1,isSignUp:!1,resetEmailSent:!1};const SignupComplete=Template.bind({});SignupComplete.args={email:"user@example.com",isSignupComplete:!0};const LoadingState=Template.bind({});LoadingState.args={isLoading:!0};const __namedExportsOrder=["SignUpMode","SignInMode","SignupComplete","LoadingState"];SignUpMode.parameters={...SignUpMode.parameters,docs:{...SignUpMode.parameters?.docs,source:{originalSource:"args => <Container isSignupComplete={args.isSignupComplete}>\r\n    <AuthPageView {...args} />\r\n  </Container>",...SignUpMode.parameters?.docs?.source}}},SignInMode.parameters={...SignInMode.parameters,docs:{...SignInMode.parameters?.docs,source:{originalSource:"args => <Container isSignupComplete={args.isSignupComplete}>\r\n    <AuthPageView {...args} />\r\n  </Container>",...SignInMode.parameters?.docs?.source}}},SignupComplete.parameters={...SignupComplete.parameters,docs:{...SignupComplete.parameters?.docs,source:{originalSource:"args => <Container isSignupComplete={args.isSignupComplete}>\r\n    <AuthPageView {...args} />\r\n  </Container>",...SignupComplete.parameters?.docs?.source}}},LoadingState.parameters={...LoadingState.parameters,docs:{...LoadingState.parameters?.docs,source:{originalSource:"args => <Container isSignupComplete={args.isSignupComplete}>\r\n    <AuthPageView {...args} />\r\n  </Container>",...LoadingState.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-molecules-authentication-AuthPageView-stories.100eda03.iframe.bundle.js.map