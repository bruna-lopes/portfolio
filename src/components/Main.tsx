import React from 'react';
import Cabecalho from './cabecalho/cabecalho';
import { Rodape } from './rodape/Rodape';
import * as S from '../shared/style/index';

const Main = () => {
  return (
    <S.MainContainer>
      <Cabecalho />
      <Rodape />
    </S.MainContainer>
  );
};

export default Main;
