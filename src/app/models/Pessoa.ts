import { Afinidade } from "./Afinidade";

export class Pessoa {
  id: number;
  nome: string;
  telefone: string;
  idade: number;
  estado: string;
  cidade: string;
  regiao: Afinidade;
  score: string;
  scoreDescricao: string;
  estados: Array<string>;
}
