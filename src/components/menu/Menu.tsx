import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Lottie from 'react-lottie';
import IconeBr from '../../assets/icone-bandeira-botao-brasil.png';
import IconeEua from '../../assets/icone-bandeira-botao-eua.png';
import LogoAnimation from '../../assets/logo1.json';
import LogoDarkMode from '../../assets/logoDarkMode.json';
import { DarkModeActions } from '../../context/darkMode/darkMode.types';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { IdiomaActions } from '../../context/idioma/idioma.types';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { adjustComponent, parseBool } from '../../shared/functions';
import * as S from './style';

export const Menu = () => {
  const { dispatch, state } = useDarkModeContext();
  const { dispatchIdioma, stateIdioma } = useIdiomaContext();
  const [widthAnimation, setWidthAnimation] = useState<number | undefined>(
    adjustComponent(120),
  );
  const [heightAnimation, setHeightAnimation] = useState<number | undefined>(
    adjustComponent(80),
  );

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

  window.addEventListener('resize', () => {
    setWidthAnimation(adjustComponent(120));
    setHeightAnimation(adjustComponent(80));
  });

  const rollWindow = (where: string) => {
    const sobre = (window.innerHeight / 100) * 85;
    const conhecimentos = (window.innerHeight / 100) * 170;
    const contatos = (window.innerHeight / 100) * 295;

    switch (where) {
      case 'introducao':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'sobre':
        window.scrollTo({ top: sobre, behavior: 'smooth' });
        break;
      case 'conhecimentos':
        window.scrollTo({ top: conhecimentos, behavior: 'smooth' });
        break;
      case 'contatos':
        window.scrollTo({ top: contatos, behavior: 'smooth' });
        break;
    }
  };
  return (
    <S.MenuContainer>
      <S.OpcoesContainer>
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
          height={heightAnimation}
          width={widthAnimation}
        />
      </S.AnimationContainer>
    </S.MenuContainer>
  );
};
