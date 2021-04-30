import React, { ReactElement } from 'react';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { Constants } from '../../shared/constants';
import * as S from './style';

export const Rodape = () => {
  const { state } = useDarkModeContext();

  return (
    <S.RodapeContainer dark={state.darkMode.toString()}>
      <LinkComponent
        href={Constants.urlLinkedin}
        tipo="linkedin"
        dark={state.darkMode.toString()}
      />
      <LinkComponent
        href={Constants.urlGithub}
        tipo="github"
        dark={state.darkMode.toString()}
      />
      <LinkComponent
        href={Constants.urlInstagram}
        tipo="instagram"
        dark={state.darkMode.toString()}
      />
      <LinkComponent
        href={Constants.urlWhatsApp}
        tipo="whatsapp"
        dark={state.darkMode.toString()}
      />
      <LinkComponent
        href={Constants.urlTelegram}
        tipo="telegram"
        dark={state.darkMode.toString()}
      />
    </S.RodapeContainer>
  );
};

type LinkProps = {
  href: string;
  tipo: 'linkedin' | 'github' | 'instagram' | 'whatsapp' | 'telegram';
  dark: string;
};

const LinkComponent = ({ href, tipo, dark }: LinkProps) => {
  let icone: ReactElement = <></>;

  switch (tipo) {
    case 'linkedin':
      icone = <S.IconeLinkedin dark={dark} />;
      break;
    case 'github':
      icone = <S.IconeGitHub dark={dark} />;
      break;
    case 'instagram':
      icone = <S.IconeInstagram dark={dark} />;
      break;
    case 'whatsapp':
      icone = <S.IconeWhatsApp dark={dark} />;
      break;
    case 'telegram':
      icone = <S.IconeTelegram dark={dark} />;
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
