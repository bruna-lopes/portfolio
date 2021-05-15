import { useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo1.json';
import LogoDarkMode from '../../assets/logoDarkMode.json';
import { DarkModeActions } from '../../context/darkMode/darkMode.types';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { adjustComponent, parseBool } from '../../shared/functions';
import * as S from './style';

export const Menu = () => {
  const { dispatch, state } = useDarkModeContext();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: state.darkMode ? LogoDarkMode : LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const toggleDarkTheme = () => {
    let dadoAux = JSON.stringify(!state.darkMode);
    localStorage.setItem('darkMode', dadoAux);
    dispatch({
      type: DarkModeActions.DARK_MODE,
      payload: !state.darkMode,
    });
  };

  const getDarkMode = () => {
    const dadoAux = localStorage.getItem('darkMode');
    const dadoBool = parseBool(dadoAux!);
    dispatch({
      type: DarkModeActions.DARK_MODE,
      payload: dadoBool,
    });
  };

  useEffect(() => {
    getDarkMode();
    // eslint-disable-next-line
  }, []);

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
    <S.MenuContainer dark={state.darkMode.toString()}>
      <S.OpcoesContainer dark={state.darkMode.toString()}>
        <strong onClick={() => toggleDarkTheme()}>
          {state.darkMode ? <FiSun /> : <FiMoon />}
        </strong>
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
