import {
  BackgroundImage,
  Container,
  LeftContainer,
  Logo,
  LoginContainer,
  FormContainer,
  SettingsLogin,
  ForgetMyPasswordText,
  Button,
  Account
} from './styles/app.style';
import './styles/global.css';

import backgroundImage from './assets/side-image.jpg';
import logo from './assets/logo.svg';

import { FormContainerHeader } from './components/FormContainerHeader';
import { FormInput } from './components/FormInput';
import { useState } from 'react';

function App() {

  const [isSecure, setIsSecure] = useState(true)
  const [checked, setChecked] = useState(false);

  function changeSecure() {
    setIsSecure(!isSecure);
  }

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <Container>
      <LeftContainer>
        <Logo src={logo} />
        <LoginContainer>
          <FormContainerHeader />
          <FormContainer>
            <FormInput
              labelText='E-mail'
              placeholder="Digite seu e-mail"
              type='email'
            />
            <FormInput
              labelText='Password'
              placeholder="Digite sua senha"
              type='password'
              isHidden={isSecure}
              onClick={changeSecure}
            />
            <SettingsLogin>
            <ForgetMyPasswordText href='#'>Esqueci minha senha</ForgetMyPasswordText>
            </SettingsLogin>
            <Button>ENTRAR</Button>

            <Account>Não tem conta? <strong>Registre-se</strong></Account>
          </FormContainer>
        </LoginContainer>
      </LeftContainer>
    </Container>
  )
}

export default App;
