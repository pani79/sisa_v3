import { getLocaleEraNames } from '@angular/common';

export class BotoneraLateralInfo {

    public static homes = {
        nomivac: {
            1: {
                solapa: {
                    registro: 'paierc',
                    id: 4,
                    sigla: 'PAIERC',
                    claseColor: 'reg_paierc',
                    claseIcono: 'reg_paierc'},
                    titulo: 'Programa de Abordaje Integral de la Enfermedad Renal Crónica',
                    subtitulo: null,
                info: {
                    titulo: 'el paierc',
                    texto: 'lorem100'
                }
            },
            2: {
                solapa: {},
                info: {}
            },
            3: {
                solapa: {},
                info: {}
            }
        },
        paierc: {
            registro: 'paierc',
            id: 4,
            sigla: 'PAIERC',
            claseColor: 'reg_paierc',
            claseIcono: 'reg_paierc',
            nombre: '',
            nombreCompleto: 'Dirección de SIDA y ETS',
            color: '#514f85'
        },
        svih: {
            registro: 'svih',
            id: 3,
            sigla: 'SVIH',
            claseColor: 'reg_svih',
            claseIcono: 'reg_svih',
            nombre: '',
            nombreCompleto: 'Dirección de SIDA y ETS',
            color: '#e0081b'
        }
    };

}
