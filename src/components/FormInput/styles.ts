import styled from "styled-components";

interface Input {
  icon: string;
  iconFocus: string;
}

export const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const InputLabel = styled.label`
  width: 100%;
  font-weight: 600;
  color: #afb6c2;
  display: flex;
  margin-bottom: 5px;
`;

export const InputIcon = styled.img`
  width: 30px;
  margin: 7px 0 7px 7px;
`;

export const Input = styled.input<Input>`
  background-color: transparent;
  width: 100%;
  border: 1px solid #868686;
  border-radius: 4px;
  background-image: url(${({ icon }) => icon});
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: 10px;
  height: 40px;
  padding-left: 45px;
  transition: 300ms;
  margin-bottom: 10px;

  &:focus {
    background-image: url(${({ iconFocus }) => iconFocus});
    outline: 0;
    border: 3px solid #ffc632;
  }
`;

export const ShowPasswordButton = styled.button`
  background-color: transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  left: 90%;
  bottom: 43px;
  img {
    width: 100%;
  }
`
