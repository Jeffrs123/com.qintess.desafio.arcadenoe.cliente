import { Atendimento } from "../atendimento/atendimento";

export interface Pet {
    id: number;
    nome: string;
    responsavel: string;
    idade: number;  
    atendimentos: Atendimento[]; // number
    especie: string;
    raca: string;
}