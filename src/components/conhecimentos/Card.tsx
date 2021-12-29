import { ReactElement, useState } from 'react';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';

type CardProps = {
  titulo: string;
  anosExperiencia: number;
  icone: ReactElement;
  dark: string;
  idioma: string;
};

export const Card = ({ titulo, anosExperiencia, icone, dark, idioma }: CardProps) => {
  const [widthCard, setWidthCard] = useState<number | undefined>(adjustComponent(130));
  const [heightCard, setHeightCard] = useState<number | undefined>(adjustComponent(130));

  window.addEventListener('resize', () => {
    setWidthCard(adjustComponent(130));
    setHeightCard(adjustComponent(130));
  });

  return (
    <S.StyledCard
      dark={dark}
      width={widthCard?.toString()}
      height={heightCard?.toString()}>
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
