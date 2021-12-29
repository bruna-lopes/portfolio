import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo.json';
import LogoDarkMode1 from '../../assets/logoDarkMode1.json';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { Constants } from '../../shared/constants';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';

const Introducao = () => {
  const { state } = useDarkModeContext();
  const { stateIdioma } = useIdiomaContext();
  const [widthAnimation, setWidthAnimation] = useState<number | undefined>(
    adjustComponent(500),
  );
  const [heightAnimation, setHeightAnimation] = useState<number | undefined>(
    adjustComponent(400),
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: state.darkMode ? LogoDarkMode1 : LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  window.addEventListener('resize', () => {
    setWidthAnimation(adjustComponent(500));
    setHeightAnimation(adjustComponent(400));
  });

  return (
    <S.IntroducaoContainer dark={state.darkMode.toString()}>
      <S.TextoContainer>
        {stateIdioma.idioma === IdiomasEnum.Portugues ? (
          <>
            <p>
              Olá, meu nome é <strong>Bruna Lopes</strong>.
            </p>
            <p>Sou desenvolvedora Front-end.</p>
          </>
        ) : (
          <>
            <p>
              Hello, my name is <strong>Bruna Lopes</strong>.
            </p>
            <p>I'm a Front-end Developer</p>
          </>
        )}

        <S.BotaoLinkedin
          dark={state.darkMode.toString()}
          variant="contained"
          href={Constants.urlLinkedin}>
          <FaLinkedinIn style={{ fontSize: '30' }} />
        </S.BotaoLinkedin>
      </S.TextoContainer>

      <Lottie
        style={{ margin: '2px' }}
        options={defaultOptions}
        height={heightAnimation}
        width={widthAnimation}
      />
    </S.IntroducaoContainer>
  );
};

export default Introducao;
