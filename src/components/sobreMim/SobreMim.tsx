import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { calcularIdade } from '../../shared/functions';
import * as S from './style';

export const SobreMim = () => {
  const { stateIdioma } = useIdiomaContext();

  return (
    <S.SobreMimContainer>
      <S.Fotodiv />
      <S.TextoContainer>
        {stateIdioma.idioma === IdiomasEnum.Portugues ? (
          <>
            <h1>Sobre mim</h1>
            <p>
              Meu nome é <strong>Bruna Lopes dos Santos</strong>, tenho {calcularIdade()}{' '}
              anos e moro atualmente na cidade de Vila Velha - ES.
            </p>
            <p>
              Eu sou uma dev que assim como outras pessoas de minha geração, escolheu a
              profissão por amor, mesmo depois de quase 10 anos no mercado de trabalho
              atuando em outras áreas.
            </p>
          </>
        ) : (
          <>
            <h1>About me</h1>
            <p>
              My name is <strong>Bruna Lopes dos Santos</strong>, I'm {calcularIdade()}{' '}
              years old e current living in the city of Vila Velha - ES (Brazil)
            </p>
            <p>
              I am a developer who, like other people of my genaration, chose the
              profession they love, even after nearly 10 years in the job market working
              in other fields.
            </p>
          </>
        )}
      </S.TextoContainer>
    </S.SobreMimContainer>
  );
};
