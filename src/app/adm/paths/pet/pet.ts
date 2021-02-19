import { Atendimento } from "../atendimento/atendimento";

export class Pet {
    id!: number;
    nome!: string;
    responsavel!: string;
    idade!: number;  
    atendimentos!: Atendimento[]; // number
    especie!: string;
    raca!: string;
}