import { ReactElement } from 'react';
import { FaDownload, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useIdiomaContext } from '../../context/idioma/idiomaContext';
import { IdiomasEnum } from '../../models/IdiomasEnum';
import { Constants } from '../../shared/constants';
import * as S from './style';

export const Rodape = () => {
  const { stateIdioma } = useIdiomaContext();
  const curriculo =
    stateIdioma.idioma === IdiomasEnum.Portugues
      ? '/arquivos/Bruna_Lopes_Curriculo_PT.pdf'
      : '/arquivos/Bruna_Lopes_Resume_EN.pdf';

  const iconesRodape: LinkProps[] = [
    { href: Constants.urlLinkedin, tipo: 'linkedin' },
    { href: Constants.urlGithub, tipo: 'github' },
    { href: Constants.urlTelegram, tipo: 'telegram' },
    { href: curriculo, tipo: 'curriculo', download: true },
  ];

  return (
    <S.RodapeContainer>
      {iconesRodape.map((item, index) => (
        <LinkComponent key={index} href={item.href} tipo={item.tipo} />
      ))}
    </S.RodapeContainer>
  );
};

type LinkProps = {
  href: string;
  tipo: 'linkedin' | 'github' | 'telegram' | 'curriculo';
  download?: boolean;
};

const LinkComponent = ({ href, tipo, download = false }: LinkProps) => {
  let icone: ReactElement = <></>;

  switch (tipo) {
    case 'linkedin':
      icone = <FaLinkedinIn className="icon" />;
      break;
    case 'github':
      icone = <FiGithub className="icon" />;
      break;
    case 'telegram':
      icone = <FaTelegramPlane className="icon" />;
      break;
    case 'curriculo':
      icone = <FaDownload className="icon" />;
      break;
  }

  return (
    <S.StyledLink
      color="inherit"
      href={href}
      download={download}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      underline="none">
      {icone}
    </S.StyledLink>
  );
};
