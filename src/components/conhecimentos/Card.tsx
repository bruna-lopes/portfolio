import React, { ReactElement } from 'react';
import * as S from './style';

type CardProps = {
  titulo: string;
  anosExperiencia: number;
  icone: ReactElement;
  dark: string;
};

export const Card = ({ titulo, anosExperiencia, icone, dark }: CardProps) => {
  return (
    <S.StyledCard dark={dark}>
      {icone}
      <h1> {titulo}</h1>
      <p>
        {anosExperiencia > 1 ? (
          <>{anosExperiencia} anos de expeciencia</>
        ) : (
          <>{anosExperiencia} ano de expeciencia</>
        )}
      </p>
    </S.StyledCard>
  );
};
