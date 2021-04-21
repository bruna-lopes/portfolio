import React from 'react';
import * as S from './index';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';

export const Rodape = () => {
  return (
    <S.RodapeContainer>
      <S.StyledLink color='inherit' underline='none'>
        <LinkedInIcon />
      </S.StyledLink>
      <GitHubIcon />
      <InstagramIcon />
      <WhatsAppIcon />
      <TelegramIcon />
    </S.RodapeContainer>
  );
};
