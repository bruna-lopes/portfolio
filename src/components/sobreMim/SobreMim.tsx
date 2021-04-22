import React from 'react';
import { calcularIdade } from '../../shared/functions';
import * as S from './style';

export const SobreMim = () => {
  return (
    <S.SobreMimContainer>
      <S.Fotodiv />
      <S.TextoContainer>
        <h1>Sobre mim</h1>
        <p>
          Meu nome é <span>Bruna Lopes dos Santos</span>, tenho {calcularIdade()} anos e
          moro atualmente na cidade de Vila Velha - ES.
        </p>
        <p>
          Eu sou uma dev procurando resolver problemas do mundo real. Tenho paixão por
          aprender e compartilhar meu conhecimento com os outros.
        </p>
      </S.TextoContainer>
    </S.SobreMimContainer>
  );
};
