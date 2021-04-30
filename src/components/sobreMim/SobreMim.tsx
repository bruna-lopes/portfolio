import React from 'react';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { calcularIdade } from '../../shared/functions';
import * as S from './style';

export const SobreMim = () => {
  const { state } = useDarkModeContext();

  return (
    <S.SobreMimContainer dark={state.darkMode.toString()}>
      <S.Fotodiv dark={state.darkMode.toString()} />
      <S.TextoContainer dark={state.darkMode.toString()}>
        <h1>Sobre mim</h1>
        <p>
          Meu nome é <strong>Bruna Lopes dos Santos</strong>, tenho {calcularIdade()} anos
          e moro atualmente na cidade de Vila Velha - ES.
        </p>
        <p>
          Eu sou uma dev que assim como outras pessoas de minha geração, escolheu a profissão por amor! 
          Depois de quase 10 anos no mercado de trabalho, atuando em outras áreas, eu finalmente encontrei o que amo: Desenvolvimento de Software..
        </p>
      </S.TextoContainer>
    </S.SobreMimContainer>
  );
};
