import { ReactElement } from 'react';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { calcularExpeciencia } from '../../shared/functions';
import { Card } from './Card';
import * as S from './style';

export const Conhecimentos = () => {
  const { state } = useDarkModeContext();
  const { stateIdioma } = useIdiomaContext();

  return (
    <S.ConhecimentosContainer dark={state.darkMode.toString()}>
      <S.Titulo dark={state.darkMode.toString()}>
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
            dark={state.darkMode.toString()}
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
