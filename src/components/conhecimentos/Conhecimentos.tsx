import { ReactElement } from 'react';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { Card } from './Card';
import * as S from './style';
import FreeMarkerIcon from '../../assets/freeMarkerIcon.png';

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
            idioma={stateIdioma.idioma}
          />
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
  {
    titulo: 'FreeMarker',
    icone: (
      <S.IconeFreeMarker>
        <img src={FreeMarkerIcon} alt="freemarker icon" />
      </S.IconeFreeMarker>
    ),
  },
];
