import { ReactElement } from 'react';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import * as S from './style';

type CardProps = {
  titulo: string;
  anosExperiencia: number;
  icone: ReactElement;
  dark: string;
  idioma: string;
};

export const Card = ({ titulo, anosExperiencia, icone, dark, idioma }: CardProps) => {
  return (
    <S.StyledCard dark={dark}>
      {icone}
      <h1> {titulo}</h1>
      {idioma === IdiomasEnum.Portugues ? (
        <p>
          {anosExperiencia > 1 ? (
            <>{anosExperiencia} anos de expeciencia</>
          ) : (
            <>{anosExperiencia} ano de expeciencia</>
          )}
        </p>
      ) : (
        <p>
          {anosExperiencia > 1 ? (
            <>{anosExperiencia} years of experience</>
          ) : (
            <>{anosExperiencia} year of expecience</>
          )}
        </p>
      )}
    </S.StyledCard>
  );
};
