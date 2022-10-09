import { ITheme } from '../models/ITheme';
import { Colors } from './colors';

export const theme: ITheme = {
  light: {
    menuBackgroundColor: Colors.whiteOverlay,
    menuTextColor: Colors.fontColor,
    opcoesContainerHoverColor: Colors.hoverPink,
    conhecimentosContainerBackground: Colors.blackOverlay,
    tituloConhecimentos: Colors.pink2,
    cardBackground: Colors.whiteOverlay2,
    boxShadowCard: 'rgba(255, 255, 255, 0.3)',
    tituloCard: Colors.pink3,
    textoCard: Colors.fontColor,
  },
  dark: {
    menuBackgroundColor: Colors.blackOverlay2,
    menuTextColor: Colors.fontColorDark,
    opcoesContainerHoverColor: Colors.hoverPinkDark,
    conhecimentosContainerBackground: Colors.whiteOverlay3,
    tituloConhecimentos: Colors.pink1,
    cardBackground: Colors.blackOverlay2,
    boxShadowCard: 'rgba(0, 0, 0, 0.3)',
    tituloCard: Colors.hoverPinkDark,
    textoCard: Colors.fontColorDark,
  },
};
