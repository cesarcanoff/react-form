import loginIcon from '../../assets/log-in.svg';
import { HeaderContainer, IconContainer, Icon, FormTitle, FormSubTitle } from './styles';

export function FormContainerHeader() {
  return (
    <HeaderContainer>
      <div style={{ display: 'flex' }}>
        <IconContainer>
          <Icon src={loginIcon} />
        </IconContainer>
        <FormTitle>Faça seu login</FormTitle>
      </div>
      <FormSubTitle>Entre com suas informações de cadastro.</FormSubTitle>
    </HeaderContainer>
  );
}