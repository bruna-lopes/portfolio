import { ITextos } from '../models/ITextos';
import { calcularExperiencia, calcularIdade } from './functions';

export const Textos: ITextos = {
  portugues: {
    introducao: 'Introdução',
    sobre: 'Sobre',
    conhecimentos: 'Conhecimentos',
    contatos: 'Contatos',
    introducaoTexto:
      'Olá, meu nome é <strong>Bruna Lopes</strong>. Sou desenvolvedora Front-end.',
    sobreMim: 'Sobre mim',
    meusDados: `Olá, meu nome é <strong>Bruna Lopes dos Santos</strong> tenho ${calcularIdade()} anos e moro atualmente na cidade de Vitória - ES.`,
    texto: `Sou desenvolvedora front-end com mais de ${calcularExperiencia(2020)} anos de experiência no desenvolvimento de aplicações web e mobile, com forte atuação em React.js, React Native e TypeScript. 
    </br>Pós-graduada em <b>User Experience Design and Beyond</b> pela PUCRS, unindo experiência técnica a uma visão de UX, usabilidade e construção de produtos digitais centrados nas necessidades das pessoas. 
    </br>Possuo experiência em liderança técnica de projetos e coordenação pontual de equipes de desenvolvimento, contribuindo com direcionamento técnico, organização de prioridades, acompanhamento de entregas e suporte ao time. Atuo também com acessibilidade, Design Systems, bibliotecas de componentes, documentação técnica e colaboração próxima com Produto, Design e Engenharia.
`,
  },
  ingles: {
    introducao: 'Introduction',
    sobre: 'About',
    conhecimentos: 'Knowledge',
    contatos: 'Contacts',
    introducaoTexto:
      'Hello, my name is <strong>Bruna Lopes</strong>. I`m a Front-end Developer.',
    sobreMim: 'About me',
    meusDados: `Hello, my name is <strong>Bruna Lopes dos Santos</strong>, I have ${calcularIdade()} years old and I live in Vitória - ES.`,
    texto: `I'm a front-end Developer with over ${calcularExperiencia(2020)} years of experience developing web and mobile applications, with strong expertise in React.js, React Native, and TypeScript. 
    </br>Postgraduate in <b>User Experience Design and Beyond</b> from PUCRS, combining a strong technical background with a UX perspective focused on usability and digital products centered on people's needs.
    </br>Experienced in technical project leadership and occasional coordination of development teams, contributing to technical direction, priority setting, delivery tracking, and team support. Also experienced in accessibility, Design Systems, component libraries, technical documentation, and close collaboration with Product, Design, and Engineering.`,
  },
};
