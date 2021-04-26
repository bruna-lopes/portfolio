import React from 'react';
import Introducao from './introducao/Introducao';
import { Rodape } from './rodape/Rodape';
import * as S from '../shared/style/index';
import { Menu } from './menu/Menu';
import { SobreMim } from './sobreMim/SobreMim';
import { Conhecimentos } from './conhecimentos/Conhecimentos';

const Main = () => {
  return (
    <S.MainContainer>
      <Menu />
      <Introducao />
      <SobreMim />
      <Conhecimentos />
      <Rodape />
    </S.MainContainer>
  );
};

export default Main;
