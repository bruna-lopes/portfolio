import { ITheme } from '../models/ITheme';
import { Colors, Gradients } from './colors';
import Foto from '../assets/FotoBruna.jpeg';
import FotoDarkMode from '../assets/FotoBrunaDarkMode.jpeg';

export const theme: ITheme = {
  light: {
    menuBackgroundColor: Colors.whiteOverlay,
    menuTextColor: Colors.fontColor,
    opcoesContainerHoverColor: Colors.hoverPink,
    backgroundOverlay: Colors.blackOverlay,
    tituloConhecimentos: Colors.pink2,
    cardBackground: Colors.whiteOverlay2,
    boxShadowCard: 'rgba(255, 255, 255, 0.3)',
    tituloCard: Colors.pink3,
    botaoInBackground: Colors.fontColor,
    botaoInColor: Colors.whiteOverlay,
    botaoInBackgroundHover: Colors.hoverPink,
    backgroundGradient: Gradients.blueToPink,
    fontColor: Colors.fontColor,
    iconeHover: Colors.hoverPink,
    fotoBorder: Colors.white,
    sobreMimTitulo: Colors.white,
    foto: Foto,
    javaIconColor: Colors.black,
  },
  dark: {
    menuBackgroundColor: Colors.blackOverlay2,
    menuTextColor: Colors.fontColorDark,
    opcoesContainerHoverColor: Colors.hoverPinkDark,
    backgroundOverlay: Colors.whiteOverlay3,
    tituloConhecimentos: Colors.pink1,
    cardBackground: Colors.blackOverlay2,
    boxShadowCard: 'rgba(0, 0, 0, 0.3)',
    tituloCard: Colors.hoverPinkDark,
    botaoInBackground: Colors.fontColorDark,
    botaoInColor: Colors.fontColor,
    botaoInBackgroundHover: Colors.hoverPinkDark,
    backgroundGradient: Gradients.blueToPinkDark,
    fontColor: Colors.fontColorDark,
    iconeHover: Colors.hoverPinkDark,
    fotoBorder: Colors.pink1,
    sobreMimTitulo: Colors.pink1,
    foto: FotoDarkMode,
    javaIconColor: Colors.white,
  },
};
