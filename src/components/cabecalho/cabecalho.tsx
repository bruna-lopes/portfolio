import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo.json';
import { Constants } from '../../shared/constants';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';

const Cabecalho = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.CabecalhoContainer>
      <S.TextoContainer>
        <p>
          Olá, meu nome é <strong>Bruna Lopes</strong>.
        </p>
        <p>Sou desenvolvedora Front-end.</p>

        <S.BotaoLinkedin variant="contained" href={Constants.urlLinkedin}>
          LinkedIn
        </S.BotaoLinkedin>
      </S.TextoContainer>

      <Lottie
        options={defaultOptions}
        height={adjustComponent(400)}
        width={adjustComponent(500)}
      />
    </S.CabecalhoContainer>
  );
};

export default Cabecalho;
