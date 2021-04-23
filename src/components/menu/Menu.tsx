import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useState } from 'react';
import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo1.json';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';

export const Menu = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const toogleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const rollWindow = (where: string) => {
    const sobre = (window.innerHeight / 100) * 85;
    const conhecimentos = (window.innerHeight / 100) * 170;
    const contatos = (window.innerHeight / 100) * 295;

    switch (where) {
      case 'introducao':
        window.scrollTo(0, 0);
        break;
      case 'sobre':
        window.scrollTo(0, sobre);
        break;
      case 'conhecimentos':
        window.scrollTo(0, conhecimentos);
        break;
      case 'contatos':
        window.scrollTo(0, contatos);
        break;
    }
  };

  return (
    <S.MenuContainer>
      <S.OpcoesContainer>
        <strong onClick={toogleDarkTheme}>
          {darkTheme ? <WbSunnyIcon /> : <Brightness2Icon />}
        </strong>
        <span onClick={() => rollWindow('introducao')}>Introdução</span>
        <span onClick={() => rollWindow('sobre')}>Sobre </span>
        <span onClick={() => rollWindow('conhecimentos')}>Conhecimentos</span>
        <span onClick={() => rollWindow('contatos')}>Contatos</span>
      </S.OpcoesContainer>
      <S.AnimationContainer>
        <Lottie
          options={defaultOptions}
          height={adjustComponent(80)}
          width={adjustComponent(120)}
        />
      </S.AnimationContainer>
    </S.MenuContainer>
  );
};
