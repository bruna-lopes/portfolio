import { ReactElement } from 'react';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { Card } from './Card';
import * as S from './style';
import { Textos } from '../../shared/textos';

export const Conhecimentos = () => {
  const { stateIdioma } = useIdiomaContext();

  return (
    <S.ConhecimentosContainer>
      <S.Titulo>{Textos[stateIdioma.idioma].conhecimentos}</S.Titulo>
      <S.CardContainer>
        {conhecimentos.map((item, index) => (
          <Card key={index} icone={item.icone} titulo={item.titulo} />
        ))}
      </S.CardContainer>
    </S.ConhecimentosContainer>
  );
};

interface IConhecimentos {
  titulo: string;
  icone: ReactElement;
}

const conhecimentos: IConhecimentos[] = [
  {
    titulo: 'HTML',
    icone: <S.IconeHTML />,
  },
  { titulo: 'CSS', icone: <S.IconeCSS /> },
  {
    titulo: 'JavaScript',
    icone: <S.IconeJS />,
  },
  {
    titulo: 'TypeScript',
    icone: <S.IconeTS />,
  },
  {
    titulo: 'React JS',
    icone: <S.IconeReact />,
  },
  {
    titulo: 'React Native',
    icone: <S.IconeReact />,
  },
];
