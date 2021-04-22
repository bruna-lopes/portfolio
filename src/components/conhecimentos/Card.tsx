import React from 'react';
import * as S from './style';

type CardProps = {
  titulo: string;
  anosExperiencia: number;
};

export const Card = ({ titulo, anosExperiencia }: CardProps) => {
  return (
    <S.StyledCard raised={true}>
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
