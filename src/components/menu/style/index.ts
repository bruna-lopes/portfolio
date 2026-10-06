import styled from 'styled-components';
import { Media } from '../../../shared/media';

export const MenuContainer = styled.div`
  background: transparent;
  flex: 1;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .menu-animacao {
    position: fixed;
    border-radius: 100%;
    height: 32px;
    width: 40px;
    cursor: pointer;
    margin: 40px;
  }

  .menu-animacao span,
  .menu-animacao span::before,
  .menu-animacao span::after {
    background: ${(props) => props.theme.menuTextColor};
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    margin-top: 13px;

    -webkit-transition: 0.3s ease-in-out 0.3s;
    -moz-transition: 0.3s ease-in-out 0.3s;
    -o-transition: 0.3s ease-in-out 0.3s;
    transition: 0.3s ease-in-out 0.3s;
  }

  .menu-animacao span::before {
    margin-top: -12px;

    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .menu-animacao span::after {
    margin-top: 12px;

    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .menu-animacao.active span {
    background: transparent;

    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;

    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  .menu-animacao.active span::before {
    margin-top: 0;

    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);

    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }

  .menu-animacao.active span::after {
    margin-top: 0;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

    -webkit-transition-delay: 0.6s;
    -moz-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.5s;
  }

  .icones {
    display: flex;
    flex-direction: row;
    padding: 40px;
    width: 10%;
    justify-content: space-between;
    font-size: 1.5rem;

    span {
      cursor: pointer;
    }
  }
`;

export const OpcoesContainer = styled.div`
  &.menu-fechado {
    width: 0;
    height: 0;
    padding: 0;
  }

  &.menu-aberto {
    width: calc-size(fit-content, size + 80px);
    height: calc-size(fit-content, size + 0px);
    padding: 100px 0 40px 40px;
  }
  border-bottom-right-radius: 80%;
  transition-property: width, height, padding;
  transition-duration: 0.7s;
  background-color: ${(props) => props.theme.menuBackgroundColor};

  .textos-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition-property: color;
    transition-duration: 0.7s;
    justify-content: center;

    span {
      cursor: pointer;
    }
  }

  .--fechado {
    color: transparent;
  }
`;

export const IconeImg = styled.img`
  width: 25px;
  height: 25px;

  @media ${Media.maxWidth.md} {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  @media ${Media.maxWidth.ms} {
    width: 18px;
    height: 18px;
    margin: 0 5px;
  }
`;
