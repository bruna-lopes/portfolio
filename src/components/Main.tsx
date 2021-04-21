import React from 'react';
import Cabecalho from './cabecalho/cabecalho';
import { Rodape } from './rodape/Rodape';
import * as S from '../shared/style/index';
import { Menu } from './menu/Menu';
import { SobreMim } from './sobreMim/SobreMim';
import { Conhecimentos } from './conhecimentos/Conhecimentos';

const Main = () => {
  return (
    <S.MainContainer>
      <Menu />
      <Cabecalho />
      <SobreMim />
      <Conhecimentos />
      <Rodape />
    </S.MainContainer>
  );
};

export default Main;
