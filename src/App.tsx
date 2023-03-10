import { 
  BackgroundImage,
  Container,
  LeftContainer,
  RightContainer,
  Logo,
  LoginContainer,
  FormContainer
} from './styles/app.style';
import './styles/global.css';

import backgroundImage from './assets/side-image.jpg';
import logo from './assets/logo.svg';

import { FormContainerHeader } from './components/FormContainerHeader';
import { FormInput } from './components/FormInput';
import { useState } from 'react';

function App() {

  const [isSecure, setIsSecure] = useState(true)

  function changeSecure() {
    setIsSecure(!isSecure);
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
              type={isSecure ? 'password' : 'text'}
              onClick={changeSecure}
            />
          </FormContainer>
        </LoginContainer>
      </LeftContainer>

      <RightContainer>
        <BackgroundImage src={backgroundImage} />
      </RightContainer>
    </Container>
  )
}

export default App;
