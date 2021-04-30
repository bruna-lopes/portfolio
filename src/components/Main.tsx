import Introducao from './introducao/Introducao';
import { Rodape } from './rodape/Rodape';
import * as S from '../shared/style/index';
import { Menu } from './menu/Menu';
import { SobreMim } from './sobreMim/SobreMim';
import { Conhecimentos } from './conhecimentos/Conhecimentos';
import { useDarkModeContext } from '../context/darkMode/darkModeContext';

const Main = () => {
  const { state } = useDarkModeContext();

  return (
    <S.MainContainer dark={state.darkMode}>
      <Menu />
      <Introducao />
      <SobreMim />
      <Conhecimentos />
      <Rodape />
    </S.MainContainer>
  );
};

export default Main;
