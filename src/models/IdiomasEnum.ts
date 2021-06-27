import Enum from './enum';

export enum IdiomasEnum {
    Portugues = 'pt-br',
    Ingles = 'en-us'
}

export const listaIdiomas: Enum[] = [
  {
    id: IdiomasEnum.Ingles,
    nome: 'portugues',
    descricao: 'Português Brasileiro',
  },
  {
    id: IdiomasEnum.Portugues,
    nome: 'inglês',
    descricao: 'American English',
  },
];
