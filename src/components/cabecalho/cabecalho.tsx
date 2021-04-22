import * as S from './style';
import DeveloperAnimation from '../../assets/developer.json';
import Lottie from 'react-lottie';
import { adjustAnimation } from '../../shared/functions';

const Cabecalho = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DeveloperAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.CabecalhoContainer>
      <S.TextoContainer>
        <p>
          Olá, meu nome é <span>Bruna Lopes</span>.
        </p>
        <p>Sou desenvolvedora Front-end.</p>
      </S.TextoContainer>
      <Lottie
        options={defaultOptions}
        height={adjustAnimation(500)}
        width={adjustAnimation(500)}
      />
    </S.CabecalhoContainer>
  );
};

export default Cabecalho;
