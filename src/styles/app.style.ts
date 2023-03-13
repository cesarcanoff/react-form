import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.section`
  width: 50vw;
  height: 100vh;
  max-width: 900px;
  min-width: 700px;
  padding: 2%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 50px;
`;

export const LoginContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #24221f;
  border-radius: 4px;
  padding: 50px 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.section`
  width: 100%;
  padding: 2%;
`;

export const SettingsLogin = styled.div`
  width: 100%;
  padding: 0 2%;
`;

export const ForgetMyPasswordText = styled.a`
  color: #ffc632;
  font-weight: bold;
  position: relative;
  bottom: 35px;
`

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #ffc632;
  border-radius: 4px;
  color: #473404;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 15px;
`

export const Account = styled.p`
  text-align: center;
  color: #ffc632;

  strong {
    color: #ffc632;
    font-weight: bold;
  }
`