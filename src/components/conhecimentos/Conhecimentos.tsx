import React, { ReactElement } from 'react';
import { calcularExpeciencia } from '../../shared/functions';
import { Card } from './Card';
import * as S from './style';

export const Conhecimentos = () => {
  return (
    <S.ConhecimentosContainer>
      <S.Titulo>Conhecimentos</S.Titulo>
      <S.CardContainer>
        {conhecimentos.map((item, index) => (
          <Card
            key={index}
            icone={item.icone}
            titulo={item.titulo}
            anosExperiencia={item.anosExpeciencia}
          />
        ))}
      </S.CardContainer>
    </S.ConhecimentosContainer>
  );
};

interface IConhecimentos {
  titulo: string;
  anosExpeciencia: number;
  icone: ReactElement;
}

const conhecimentos: IConhecimentos[] = [
  {
    titulo: 'HTML',
    anosExpeciencia: calcularExpeciencia(2020),
    icone: <S.IconeHTML />,
  },
  { titulo: 'CSS', anosExpeciencia: calcularExpeciencia(2020), icone: <S.IconeCSS /> },
  {
    titulo: 'JavaScript',
    anosExpeciencia: calcularExpeciencia(2020),
    icone: <S.IconeJS />,
  },
  {
    titulo: 'TypeScript',
    anosExpeciencia: calcularExpeciencia(2020),
    icone: <S.IconeTS />,
  },
  {
    titulo: 'React JS',
    anosExpeciencia: calcularExpeciencia(2020),
    icone: <S.IconeReact />,
  },
  {
    titulo: 'React Native',
    anosExpeciencia: calcularExpeciencia(2020),
    icone: <S.IconeReact />,
  },
];
