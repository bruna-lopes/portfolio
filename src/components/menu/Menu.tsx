import Lottie from 'react-lottie';
import LogoAnimation from '../../assets/logo1.json';
import { adjustComponent } from '../../shared/functions';
import * as S from './style';

export const Menu = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
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
