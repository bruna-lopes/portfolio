import { useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo1.json';
import LogoDarkMode from '../../assets/logoDarkMode.json';
import { DarkModeActions } from '../../context/darkMode/darkMode.types';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { adjustComponent, parseBool } from '../../shared/functions';
import * as S from './style';
import IconeBr from '../../assets/icone-bandeira-botao-brasil.png';
import IconeEua from '../../assets/icone-bandeira-botao-eua.png';
import { IdiomaActions } from '../../context/idioma/idioma.types';

export const Menu = () => {
  const { dispatch, state } = useDarkModeContext();
  const { dispatchIdioma, stateIdioma } = useIdiomaContext();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: state.darkMode ? LogoDarkMode : LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const toggleDarkTheme = () => {
    localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));

    dispatch({
      type: DarkModeActions.DARK_MODE,
      payload: !state.darkMode,
    });
  };

  const toggleIdioma = () => {
    let idiomaAtual = stateIdioma.idioma;

    if (idiomaAtual === IdiomasEnum.Ingles) {
      localStorage.setItem('idioma', IdiomasEnum.Portugues);
      dispatchIdioma({
        type: IdiomaActions.PORTUGUES,
        payload: IdiomasEnum.Portugues,
      });
    } else if (idiomaAtual === IdiomasEnum.Portugues) {
      localStorage.setItem('idioma', IdiomasEnum.Ingles);
      dispatchIdioma({
        type: IdiomaActions.INGLES,
        payload: IdiomasEnum.Ingles,
      });
    }
  };

  const getData = () => {
    const dadoAux = localStorage.getItem('darkMode');
    const dadoBool = parseBool(dadoAux!);

    dispatch({
      type: DarkModeActions.DARK_MODE,
      payload: dadoBool,
    });

    const idioma = localStorage.getItem('idioma');

    if (idioma === null && window.navigator.language !== 'pt-BR') {
      dispatchIdioma({
        type: IdiomaActions.INGLES,
        payload: IdiomasEnum.Ingles,
      });
    } else if (idioma === IdiomasEnum.Ingles) {
      dispatchIdioma({
        type: IdiomaActions.INGLES,
        payload: idioma,
      });
    } else {
      dispatchIdioma({
        type: IdiomaActions.PORTUGUES,
        payload: idioma,
      });
    }
  };

  useEffect(() => {
    getData();
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

        <strong onClick={() => toggleIdioma()}>
          <S.IconeImg
            src={stateIdioma.idioma === IdiomasEnum.Portugues ? IconeEua : IconeBr}
          />
        </strong>

        {stateIdioma.idioma === IdiomasEnum.Portugues ? (
          <>
            <span onClick={() => rollWindow('introducao')}>Introdução</span>
            <span onClick={() => rollWindow('sobre')}>Sobre</span>
            <span onClick={() => rollWindow('conhecimentos')}>Conhecimentos</span>
            <span onClick={() => rollWindow('contatos')}>Contatos</span>
          </>
        ) : (
          <>
            <span onClick={() => rollWindow('introducao')}>Introduction</span>
            <span onClick={() => rollWindow('sobre')}>About</span>
            <span onClick={() => rollWindow('conhecimentos')}>Knowledge</span>
            <span onClick={() => rollWindow('contatos')}>Contacts</span>
          </>
        )}
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
