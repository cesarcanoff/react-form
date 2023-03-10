import { InputContainer, InputLabel, InputIcon, Input, ShowPasswordButton } from "./styles";

import emailIcon from '../../assets/mail.svg';
import emailIconFocus from '../../assets/mail-focus.svg';

import passwordIcon from '../../assets/lock.svg';
import passwordIconFocus from '../../assets/lock-focus.svg';

import eye from '../../assets/eye.svg';

interface IFormInput {
  labelText: string;
  placeholder: string;
  type: 'password' | "email" | 'text';
  isHidden?: boolean;
  onClick?: () => void;
}

export function FormInput({ labelText, placeholder, type, isHidden, onClick }: IFormInput) {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      {type === "email" && (
        <Input
          type={type}
          iconFocus={emailIconFocus}
          icon={emailIcon}
          placeholder={placeholder}
        />
      )}

      {type === "password" || type === "text" && (
        <>
          <Input
            type={type}
            iconFocus={passwordIconFocus}
            icon={passwordIcon}
            placeholder={placeholder}
          />
          <ShowPasswordButton onClick={onClick}>
            <img src={eye} />
          </ShowPasswordButton>
        </>
      )}

    </InputContainer>
  );
}