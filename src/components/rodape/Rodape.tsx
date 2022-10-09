import { ReactElement } from 'react';
import { Constants } from '../../shared/constants';
import * as S from './style';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const Rodape = () => {
  const iconesRodape: LinkProps[] = [
    { href: Constants.urlLinkedin, tipo: 'linkedin' },
    { href: Constants.urlGithub, tipo: 'github' },
    { href: Constants.urlInstagram, tipo: 'instagram' },
    { href: Constants.urlWhatsApp, tipo: 'whatsapp' },
    { href: Constants.urlTelegram, tipo: 'telegram' },
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
  tipo: 'linkedin' | 'github' | 'instagram' | 'whatsapp' | 'telegram';
};

const LinkComponent = ({ href, tipo }: LinkProps) => {
  let icone: ReactElement = <></>;

  switch (tipo) {
    case 'linkedin':
      icone = <FaLinkedinIn className="icon" />;
      break;
    case 'github':
      icone = <FiGithub className="icon" />;
      break;
    case 'instagram':
      icone = <FiInstagram className="icon" />;
      break;
    case 'whatsapp':
      icone = <AiOutlineWhatsApp className="icon" />;
      break;
    case 'telegram':
      icone = <FaTelegramPlane className="icon" />;
      break;
  }

  return (
    <S.StyledLink
      color="inherit"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none">
      {icone}
    </S.StyledLink>
  );
};
