import React from 'react';
import { calcularExpeciencia } from '../../shared/functions';
import { Card } from './Card';
import * as S from './style';

export const Conhecimentos = () => {
  return (
    <S.ConhecimentosContainer>
      <S.Titulo>Conhecimentos</S.Titulo>
      <S.CardContainer>
        {conhecimentos.map((item, index) => (
          <Card key={index} titulo={item.titulo} anosExperiencia={item.anosExpeciencia} />
        ))}
      </S.CardContainer>
    </S.ConhecimentosContainer>
  );
};

interface IConhecimentos {
  titulo: string;
  anosExpeciencia: number;
}

const conhecimentos: IConhecimentos[] = [
  {
    titulo: 'HTML',
    anosExpeciencia: calcularExpeciencia(2020),
  },
  { titulo: 'CSS', anosExpeciencia: calcularExpeciencia(2020) },
  {
    titulo: 'JavaScript',
    anosExpeciencia: calcularExpeciencia(2020),
  },
  {
    titulo: 'TypeScript',
    anosExpeciencia: calcularExpeciencia(2020),
  },
  {
    titulo: 'React JS',
    anosExpeciencia: calcularExpeciencia(2020),
  },
  {
    titulo: 'React Native',
    anosExpeciencia: calcularExpeciencia(2020),
  },
];
