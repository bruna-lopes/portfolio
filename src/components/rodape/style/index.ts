import styled from '@emotion/styled';
import { Link } from '@material-ui/core';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { Colors } from '../../../shared/colors';
import { adjustFont } from '../../../shared/functions';

type Props = {
  dark: string;
};

export const RodapeContainer = styled.footer<Props>`
  height: 10vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${({ dark }) =>
    dark === 'true'
      ? `background-color: ${Colors.whiteOverlay3};`
      : `background-color: ${Colors.blackOverlay};`}
`;

export const StyledLink = styled(Link)`
  &.MuiLink-root {
    margin: 10px;
  }
`;

export const IconeLinkedin = styled(FaLinkedinIn)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}
  }
`;

export const IconeGitHub = styled(FiGithub)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}
  }
`;

export const IconeInstagram = styled(FiInstagram)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}
  }
`;

export const IconeWhatsApp = styled(AiOutlineWhatsApp)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}
  }
`;

export const IconeTelegram = styled(FaTelegramPlane)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: ${adjustFont(30)}px;

  :hover {
    font-size: ${adjustFont(50)}px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}
  }
`;
