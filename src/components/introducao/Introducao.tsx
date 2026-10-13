import { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import { FaDownload, FaLinkedinIn } from 'react-icons/fa';
import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo.json';
import LogoDarkMode1 from '../../assets/logoDarkMode1.json';
import { useDarkModeContext } from '../../context/darkMode/darkModeContext';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { Constants } from '../../shared/constants';
import { adjustComponent } from '../../shared/functions';
import { Textos } from '../../shared/textos';
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

  const curriculo =
    stateIdioma.idioma === IdiomasEnum.Portugues
      ? {
          arquivo: '/arquivos/Bruna_Lopes_Curriculo_PT.pdf',
          tooltip: 'Baixe o curriculo completo',
        }
      : {
          arquivo: '/arquivos/Bruna_Lopes_Resume_EN.pdf',
          tooltip: 'Download full resume',
        };

  window.addEventListener('resize', () => {
    setWidthAnimation(adjustComponent(500));
    setHeightAnimation(adjustComponent(400));
  });

  return (
    <S.IntroducaoContainer>
      <S.TextoContainer>
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: Textos[stateIdioma.idioma].introducaoTexto,
            }}
          />
        </>

        <S.BotoesContainer>
          <S.BotaoLinkedin variant="contained" href={Constants.urlLinkedin}>
            <FaLinkedinIn style={{ fontSize: '30' }} />
          </S.BotaoLinkedin>

          <Tooltip title={curriculo.tooltip} arrow placement="bottom">
            <S.BotaoCurriculo href={curriculo.arquivo} download aria-label={curriculo.tooltip}>
              <FaDownload style={{ fontSize: '22px' }} />
            </S.BotaoCurriculo>
          </Tooltip>
        </S.BotoesContainer>
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
