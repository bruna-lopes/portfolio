import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import IconeBr from '../../assets/icone-bandeira-botao-brasil.png';
import IconeEua from '../../assets/icone-bandeira-botao-eua.png';
import { DarkModeActions } from '../../context/darkMode/darkMode.types';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { IdiomaActions } from '../../context/idioma/idioma.types';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { Textos } from '../../shared/textos';
import { parseBool } from '../../shared/functions';
import * as S from './style';

export const Menu = () => {
  const { dispatch, state } = useDarkModeContext();
  const { dispatchIdioma, stateIdioma } = useIdiomaContext();

  const [aberto, setAberto] = useState<boolean>(false);

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
    const sobre = (window.innerHeight / 100) * 100;
    const conhecimentos = (window.innerHeight / 100) * 200;

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
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        break;
    }
  };

  return (
    <S.MenuContainer>
      <div className="menu">
        <div
          className={`menu-animacao ${aberto ? 'active' : ''}`}
          onClick={() => setAberto(!aberto)}>
          <span></span>
        </div>
        <div className="icones">
          <span onClick={toggleDarkTheme}>{state.darkMode ? <FiSun /> : <FiMoon />}</span>

          <span onClick={toggleIdioma}>
            <S.IconeImg
              src={stateIdioma.idioma === IdiomasEnum.Portugues ? IconeEua : IconeBr}
            />
          </span>
        </div>
      </div>

      <S.OpcoesContainer className={`${aberto ? 'menu-aberto' : 'menu-fechado'}`}>
        <div className={`textos-container ${aberto ? '' : ' --fechado'}`}>
          <span onClick={() => rollWindow('introducao')}>
            {Textos[stateIdioma.idioma].introducao}
          </span>
          <span onClick={() => rollWindow('sobre')}>
            {Textos[stateIdioma.idioma].sobre}
          </span>
          <span onClick={() => rollWindow('conhecimentos')}>
            {Textos[stateIdioma.idioma].conhecimentos}
          </span>
          <span onClick={() => rollWindow('contatos')}>
            {Textos[stateIdioma.idioma].contatos}
          </span>
        </div>
      </S.OpcoesContainer>
    </S.MenuContainer>
  );
};
