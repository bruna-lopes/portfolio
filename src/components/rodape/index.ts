import styled from '@emotion/styled';
import { Link } from '@material-ui/core';
import { Colors } from '../../shared/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';

export const RodapeContainer = styled.footer`
  height: 10vh;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blackOverlay};
`;

export const StyledLink = styled(Link)`
  &.MuiLink-root {
  margin: 10px;
    :hover {
      color: ${Colors.pink2};
    }
  }
`;

export const IconeLinkedin = styled(LinkedInIcon)`
  &.MuiSvgIcon-root {
    transition-property: font-size;
    transition-duration: 0.4s;
    :hover {
      font-size: 40px;
    }
  }
`;

export const IconeGitHub = styled(GitHubIcon)`
  &.MuiSvgIcon-root {
    transition-property: font-size;
    transition-duration: 0.4s;

    :hover {
      font-size: 40px;
    }
  }
`;

export const IconeInstagram = styled(InstagramIcon)`
  &.MuiSvgIcon-root {
    transition-property: font-size;
    transition-duration: 0.4s;

    :hover {
      font-size: 40px;
    }
  }
`;

export const IconeWhatsApp = styled(WhatsAppIcon)`
  &.MuiSvgIcon-root {
    transition-property: font-size;
    transition-duration: 0.4s;

    :hover {
      font-size: 40px;
    }
  }
`;

export const IconeTelegram = styled(TelegramIcon)`
  &.MuiSvgIcon-root {
    transition-property: font-size;
    transition-duration: 0.4s;

    :hover {
      font-size: 40px;
    }
  }
`;
