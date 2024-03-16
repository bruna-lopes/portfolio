export default interface Enum {
    id: string;
  
    nome: string;
    descricao?: string;
  }
  
  export function obterTodosValoresEnum<T>(enumData: any): T[] {
    const valores = Object.keys(enumData).map((k) => enumData[k as keyof typeof enumData]);
  
    return valores;
  }