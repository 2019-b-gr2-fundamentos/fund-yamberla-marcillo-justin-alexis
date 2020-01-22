import { Duenio } from './duenio.interface';
export interface animalPerrito {
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number;   //se escribe ? para indicar que son datos opcionales
    // hijos: null,
    perritas?: string[];
    vacunado?: boolean;
    duenio?: Duenio;
}