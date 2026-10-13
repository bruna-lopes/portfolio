const dataHoje = new Date();

export const adjustComponent = (size: number) => {
  if (window.innerWidth > 1000) {
    return size;
  } else if (window.innerWidth <= 1000 && window.innerWidth > 700) {
    return size * 0.8;
  } else if (window.innerWidth <= 700 && window.innerWidth > 500) {
    return size * 0.7;
  } else if (window.innerWidth <= 500 && window.innerWidth > 300) {
    return size * 0.4;
  } else if (window.innerWidth <= 300) {
    return size * 0.3;
  }
};

export const adjustFont = (size: number) => {
  if (window.innerWidth > 1000) {
    return size;
  } else if (window.innerWidth <= 1000 && window.innerWidth > 700) {
    return size * 0.9;
  } else if (window.innerWidth <= 700 && window.innerWidth > 500) {
    return size * 0.8;
  } else if (window.innerWidth <= 500 && window.innerWidth > 300) {
    return size * 0.7;
  } else if (window.innerWidth <= 300) {
    return size * 0.6;
  }
};

export const calcularIdade = () => {
  const anoAtual: number = parseInt(dataHoje.getFullYear().toString());

  return anoAtual - 1992;
};

export const calcularExperiencia = (anoComeco: number) => {
  const anoAtual: number = parseInt(dataHoje.getFullYear().toString());

  return anoAtual - anoComeco;
};

export const parseBool = (dadoString: string) => {
  return dadoString === 'true';
};
