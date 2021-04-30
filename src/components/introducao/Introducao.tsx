import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo.json';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { Constants } from '../../shared/constants';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';
import { FaLinkedinIn } from 'react-icons/fa';

const Introducao = () => {
  const { state } = useDarkModeContext();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.IntroducaoContainer dark={state.darkMode.toString()}>
      <S.TextoContainer>
        <p>
          Olá, meu nome é <strong>Bruna Lopes</strong>.
        </p>
        <p>Sou desenvolvedora Front-end.</p>

        <S.BotaoLinkedin
          dark={state.darkMode.toString()}
          variant="contained"
          href={Constants.urlLinkedin}>
          <FaLinkedinIn style={{ fontSize: '30' }} />
        </S.BotaoLinkedin>
      </S.TextoContainer>

      <Lottie
        options={defaultOptions}
        height={adjustComponent(400)}
        width={adjustComponent(500)}
      />
    </S.IntroducaoContainer>
  );
};

export default Introducao;
