import styled from '@emotion/styled';
import { Link } from '@material-ui/core';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { Colors } from '../../../shared/colors';
import { adjustFont } from '../../../shared/functions';

export const RodapeContainer = styled.footer`
  height: 10vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blackOverlay};
`;

export const StyledLink = styled(Link)`
  &.MuiLink-root {
    margin: 10px;
    :hover {
      color: ${Colors.hoverPink};
    }
  }
`;

export const IconeLinkedin = styled(FaLinkedinIn)`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
  }
`;

export const IconeGitHub = styled(FiGithub)`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
  }
`;

export const IconeInstagram = styled(FiInstagram)`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
  }
`;

export const IconeWhatsApp = styled(AiOutlineWhatsApp)`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
  }
`;

export const IconeTelegram = styled(FaTelegramPlane)`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
  }
`;
