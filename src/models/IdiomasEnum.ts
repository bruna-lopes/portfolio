import Enum from './enum';

export enum IdiomasEnum {
  Portugues = 'portugues',
  Ingles = 'ingles',
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
