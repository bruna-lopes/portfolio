import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { Textos } from '../../shared/textos';
import * as S from './style';

export const SobreMim = () => {
  const { stateIdioma } = useIdiomaContext();

  return (
    <S.SobreMimContainer>
      <S.Fotodiv />
      <S.TextoContainer>
        <h1>{Textos[stateIdioma.idioma].sobreMim}</h1>
        <p dangerouslySetInnerHTML={{ __html: Textos[stateIdioma.idioma].meusDados }} />
        <p dangerouslySetInnerHTML={{ __html: Textos[stateIdioma.idioma].texto }} />
      </S.TextoContainer>
    </S.SobreMimContainer>
  );
};
