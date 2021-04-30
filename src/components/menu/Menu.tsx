import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo1.json';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { DarkModeActions } from '../../context/darkMode/darkMode.types';

export const Menu = () => {
  const { dispatch } = useDarkModeContext();
  const [dark, setDark] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const toggleDarkTheme = () => {
    setDark(!dark);
    dispatch({
      type: DarkModeActions.DARK_MODE,
      payload: dark,
    });
  };

  const rollWindow = (where: string) => {
    const sobre = (window.innerHeight / 100) * 85;
    const conhecimentos = (window.innerHeight / 100) * 170;
    const contatos = (window.innerHeight / 100) * 295;

    switch (where) {
      case 'introducao':
        window.scrollTo(0, 0);
        break;
      case 'sobre':
        window.scrollTo(0, sobre);
        break;
      case 'conhecimentos':
        window.scrollTo(0, conhecimentos);
        break;
      case 'contatos':
        window.scrollTo(0, contatos);
        break;
    }
  };

  return (
    <S.MenuContainer>
      <S.OpcoesContainer>
        <span onClick={() => toggleDarkTheme()}>{dark ? <FiSun /> : <FiMoon />}</span>
        <span onClick={() => rollWindow('introducao')}>Introdução</span>
        <span onClick={() => rollWindow('sobre')}>Sobre </span>
        <span onClick={() => rollWindow('conhecimentos')}>Conhecimentos</span>
        <span onClick={() => rollWindow('contatos')}>Contatos</span>
      </S.OpcoesContainer>
      <S.AnimationContainer>
        <Lottie
          options={defaultOptions}
          height={adjustComponent(80)}
          width={adjustComponent(120)}
        />
      </S.AnimationContainer>
    </S.MenuContainer>
  );
};
