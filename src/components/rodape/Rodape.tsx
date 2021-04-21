import React from 'react';
import * as S from './index';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Constants } from '../../shared/constants';

export const Rodape = () => {
  return (
    <S.RodapeContainer>
      <S.StyledLink
        color="inherit"
        href={Constants.urlLinkedin}
        target="_blank"
        rel="noopener noreferrer"
        underline="none">
        <LinkedInIcon />
      </S.StyledLink>
      <S.StyledLink
        color="inherit"
        href={Constants.urlGithub}
        target="_blank"
        rel="noopener noreferrer"
        underline="none">
        <GitHubIcon />
      </S.StyledLink>
      <S.StyledLink
        color="inherit"
        href={Constants.urlInstagram}
        target="_blank"
        rel="noopener noreferrer"
        underline="none">
        <InstagramIcon />
      </S.StyledLink>
      <S.StyledLink
        color="inherit"
        href={Constants.urlWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        underline="none">
        <WhatsAppIcon />
      </S.StyledLink>
      <S.StyledLink
        color="inherit"
        href={Constants.urlTelegram}
        target="_blank"
        rel="noopener noreferrer"
        underline="none">
        <TelegramIcon />
      </S.StyledLink>
    </S.RodapeContainer>
  );
};
