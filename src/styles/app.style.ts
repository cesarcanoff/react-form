import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftContainer = styled.section`
  border: 1px solid yellow;
  width: 50vw;
  height: 100vh;
  padding: 2%;
`;

export const RightContainer = styled.section`
  border: 1px solid red;
  width: 50vw;
  height: 100vh;
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
  background-color: #24221F;
  border-radius: 4px;
  padding: 50px 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.section`
  width: 100%;
  border: 1px solid green;
  padding: 2%;
`;
