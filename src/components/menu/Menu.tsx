import React from 'react';
import * as S from './index';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import LogoAnimation from '../../assets/logo1.json';
import Lottie from 'react-lottie';

export const Menu = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LogoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.MenuContainer>
      <div>
        <WbSunnyIcon />
        Introdução Sobre Conhecimentos Contatos
      </div>
      <S.AnimationContainer>
        <Lottie
          options={defaultOptions}
          height={80}
          width={100}
          style={{ borderRadius: 20 }}
        />
      </S.AnimationContainer>
    </S.MenuContainer>
  );
};
