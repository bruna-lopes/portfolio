import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { calcularIdade } from '../../shared/functions';
import { Textos } from '../../shared/textos';
import * as S from './style';

export const SobreMim = () => {
  const { stateIdioma } = useIdiomaContext();

  return (
    <S.SobreMimContainer>
      <S.Fotodiv />
      <S.TextoContainer>
        <>
          <h1>{Textos[stateIdioma.idioma].sobreMim}</h1>
          <p>
            {Textos[stateIdioma.idioma].meuNome}
            <strong>Bruna Lopes dos Santos</strong>, {Textos[stateIdioma.idioma].tenho}
            {calcularIdade()}
            {Textos[stateIdioma.idioma].moro}
          </p>
          <p>{Textos[stateIdioma.idioma].texto}</p>
        </>
      </S.TextoContainer>
    </S.SobreMimContainer>
  );
};
