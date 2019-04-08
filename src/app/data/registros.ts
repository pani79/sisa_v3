import {Registro} from '../classes/registro';

export class Registros {
    refes = {
        id: 1,
        sigla: 'refes',
        clase: 'reg_refes',
        nombre: ' Equipo de Salud',
        nombreCompleto: 'Sistema Nacional de Residencias del Equipo de Salud',
        color: '#3fa0d9'
    };
    residencias = {
        id: 2,
        sigla: 'Resides',
        clase: 'reg_residencias',
        nombre: 'Residencias',
        nombreCompleto: 'Sistema Nacional de Residencias del Equipo de Salud',
        color: '#3fa0d9'
    };

    RegistroObtieneDatos(registroPedido: string): Registro { 
        return this.residencias;
    }
}
