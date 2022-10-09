import { ReactElement } from 'react';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { calcularExperiencia } from '../../shared/functions';
import { Card } from './Card';
import * as S from './style';

export const Conhecimentos = () => {
  const { stateIdioma } = useIdiomaContext();

  return (
    <S.ConhecimentosContainer>
      <S.Titulo>
        {stateIdioma.idioma === IdiomasEnum.Portugues ? (
          <>Conhecimentos</>
        ) : (
          <>Knowledge</>
        )}
      </S.Titulo>
      <S.CardContainer>
        {conhecimentos.map((item, index) => (
          <Card
            key={index}
            icone={item.icone}
            titulo={item.titulo}
            anosExperiencia={item.anosExpeciencia}
            idioma={stateIdioma.idioma}
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
    anosExpeciencia: calcularExperiencia(2020),
    icone: <S.IconeHTML />,
  },
  { titulo: 'CSS', anosExpeciencia: calcularExperiencia(2020), icone: <S.IconeCSS /> },
  {
    titulo: 'JavaScript',
    anosExpeciencia: calcularExperiencia(2020),
    icone: <S.IconeJS />,
  },
  {
    titulo: 'TypeScript',
    anosExpeciencia: calcularExperiencia(2020),
    icone: <S.IconeTS />,
  },
  {
    titulo: 'React JS',
    anosExpeciencia: calcularExperiencia(2020),
    icone: <S.IconeReact />,
  },
  {
    titulo: 'React Native',
    anosExpeciencia: calcularExperiencia(2020),
    icone: <S.IconeReact />,
  },
];
