import { ReactElement } from 'react';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { Constants } from '../../shared/constants';
import * as S from './style';

export const Rodape = () => {
  const { state } = useDarkModeContext();

  const iconesRodape: LinkProps[] = [
    { href: Constants.urlLinkedin, tipo: 'linkedin' },
    { href: Constants.urlGithub, tipo: 'github' },
    { href: Constants.urlInstagram, tipo: 'instagram' },
    { href: Constants.urlWhatsApp, tipo: 'whatsapp' },
    { href: Constants.urlTelegram, tipo: 'telegram' },
  ];

  return (
    <S.RodapeContainer dark={state.darkMode.toString()}>
      {iconesRodape.map((item, index) => (
        <LinkComponent key={index} href={item.href} tipo={item.tipo} />
      ))}
    </S.RodapeContainer>
  );
};

type LinkProps = {
  href: string;
  tipo: 'linkedin' | 'github' | 'instagram' | 'whatsapp' | 'telegram';
};

const LinkComponent = ({ href, tipo }: LinkProps) => {
  let icone: ReactElement = <></>;
  const { state } = useDarkModeContext();

  switch (tipo) {
    case 'linkedin':
      icone = <S.IconeLinkedin dark={state.darkMode.toString()} />;
      break;
    case 'github':
      icone = <S.IconeGitHub dark={state.darkMode.toString()} />;
      break;
    case 'instagram':
      icone = <S.IconeInstagram dark={state.darkMode.toString()} />;
      break;
    case 'whatsapp':
      icone = <S.IconeWhatsApp dark={state.darkMode.toString()} />;
      break;
    case 'telegram':
      icone = <S.IconeTelegram dark={state.darkMode.toString()} />;
      break;
  }

  return (
    <S.StyledLink
      color="inherit"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none">
      {icone}
    </S.StyledLink>
  );
};
