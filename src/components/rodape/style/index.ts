import styled from '@emotion/styled';
import { Link } from '@material-ui/core';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { Colors } from '../../../shared/colors';
import { Media } from '../../../shared/media';

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
  font-size: 30px;

  @media ${Media.maxWidth.md} {
    font-size: 25px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 20px;
  }

  :hover {
    font-size: 50px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}

    @media ${Media.maxWidth.md} {
      font-size: 40px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 35px;
    }
  }
`;

export const IconeGitHub = styled(FiGithub)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: 30px;

  @media ${Media.maxWidth.md} {
    font-size: 25px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 20px;
  }

  :hover {
    font-size: 50px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}

    @media ${Media.maxWidth.md} {
      font-size: 40px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 35px;
    }
  }
`;

export const IconeInstagram = styled(FiInstagram)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: 30px;

  @media ${Media.maxWidth.md} {
    font-size: 25px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 20px;
  }

  :hover {
    font-size: 50px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}

    @media ${Media.maxWidth.md} {
      font-size: 40px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 35px;
    }
  }
`;

export const IconeWhatsApp = styled(AiOutlineWhatsApp)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: 30px;

  @media ${Media.maxWidth.md} {
    font-size: 25px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 20px;
  }

  :hover {
    font-size: 50px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}

    @media ${Media.maxWidth.md} {
      font-size: 40px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 35px;
    }
  }
`;

export const IconeTelegram = styled(FaTelegramPlane)<Props>`
  transition-property: font-size;
  transition-duration: 0.5s;
  font-size: 30px;

  @media ${Media.maxWidth.md} {
    font-size: 25px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 20px;
  }

  :hover {
    font-size: 50px;
    ${({ dark }) =>
      dark === 'true'
        ? `color: ${Colors.hoverPinkDark};`
        : `color: ${Colors.hoverPink};
      `}

    @media ${Media.maxWidth.md} {
      font-size: 40px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 35px;
    }
  }
`;
