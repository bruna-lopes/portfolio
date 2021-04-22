import React, { ReactElement } from 'react';
import { Constants } from '../../shared/constants';
import * as S from './index';

export const Rodape = () => {
  return (
    <S.RodapeContainer>
      <LinkComponent href={Constants.urlLinkedin} tipo="linkedin" />
      <LinkComponent href={Constants.urlGithub} tipo="github" />
      <LinkComponent href={Constants.urlInstagram} tipo="instagram" />
      <LinkComponent href={Constants.urlWhatsApp} tipo="whatsapp" />
      <LinkComponent href={Constants.urlTelegram} tipo="telegram" />
    </S.RodapeContainer>
  );
};

type LinkProps = {
  href: string;
  tipo: 'linkedin' | 'github' | 'instagram' | 'whatsapp' | 'telegram';
};

const LinkComponent = ({ href, tipo }: LinkProps) => {
  let icone: ReactElement = <></>;

  switch (tipo) {
    case 'linkedin':
      icone = <S.IconeLinkedin />;
      break;
    case 'github':
      icone = <S.IconeGitHub />;
      break;
    case 'instagram':
      icone = <S.IconeInstagram />;
      break;
    case 'whatsapp':
      icone = <S.IconeWhatsApp />;
      break;
    case 'telegram':
      icone = <S.IconeTelegram />;
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
