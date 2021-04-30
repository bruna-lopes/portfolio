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
          Eu sou uma dev procurando resolver problemas do mundo real. Tenho paixão por
          aprender e compartilhar meu conhecimento com os outros.
        </p>
      </S.TextoContainer>
    </S.SobreMimContainer>
  );
};
