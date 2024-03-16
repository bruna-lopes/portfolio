import { ReactElement, useState } from 'react';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';

type CardProps = {
  titulo: string;
  icone: ReactElement;
};

export const Card = ({ titulo, icone }: CardProps) => {
  const [widthCard, setWidthCard] = useState<number | undefined>(adjustComponent(130));
  const [heightCard, setHeightCard] = useState<number | undefined>(adjustComponent(130));

  window.addEventListener('resize', () => {
    setWidthCard(adjustComponent(130));
    setHeightCard(adjustComponent(130));
  });

  return (
    <S.StyledCard width={widthCard?.toString()} height={heightCard?.toString()}>
      {icone}
      <h1>{titulo}</h1>
    </S.StyledCard>
  );
};
