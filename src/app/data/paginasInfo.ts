export class PaginasInfo {

    public static registros = {
        nomivac: {
            registro: 'nomivac',
            id: 4,
            sigla: 'NOMIVAC',
            claseColor: 'reg_nomivac',
            claseIcono: 'reg_nomivac',
            nombre: '',
            nombreCompleto: 'Registro Federal de Vacunación Nominalizado',
            color: '#383780'
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
        pfis: {
            registro: 'pfis',
            id: 4,
            sigla: 'PFIS',
            claseColor: 'reg_pfis',
            claseIcono: 'reg_pfis',
            nombre: '',
            nombreCompleto: 'Programa Federal Incluir Salud',
            color: '#d4bb92'
        },
        pronahep: {
            registro: 'pronahep',
            id: 1,
            sigla: 'PRONAHEP',
            claseColor: 'reg_pronahep',
            claseIcono: 'reg_pronahep',
            nombre: 'Hepatitis',
            nombreCompleto: 'Programa Nacional de Hepatitis',
            color: '#CB134F '
        },
        redro: {
            registro: 'redro',
            id: 1,
            sigla: 'REDRO',
            claseColor: 'reg_refes',
            claseIcono: 'reg_redro',
            nombre: 'Droguerías',
            nombreCompleto: 'Registro Federal de Droguerías (REDRO)',
            color: '#3e699c'
        },
        refar: {
            registro: 'refar',
            id: 1,
            sigla: 'REFAR',
            claseColor: 'reg_refes',
            claseIcono: 'reg_refar',
            nombre: 'Farmacias',
            nombreCompleto: 'Registro Federal de Farmacias (REFAR)',
            color: '#3e699c'
        },
        refes: {
            registro: 'refes',
            id: 1,
            sigla: 'REFES',
            claseColor: 'reg_refes',
            claseIcono: 'reg_refes',
            nombre: 'Establecimientos',
            nombreCompleto: 'Registro Federal de Establecimientos de Salud',
            color: '#3e699c'
        },
        refeps: {
            registro: 'refeps',
            id: 2,
            sigla: 'REFEPS',
            claseColor: 'reg_refeps',
            claseIcono: 'reg_refeps',
            nombre: 'Profesionales',
            nombreCompleto: 'Red Federal de Registros de Profesionales de la Salud',
            color: '#a13d3b'
        },
        renis: {
            registro: 'renis',
            id: 2,
            sigla: 'RENIS',
            claseColor: 'reg_renis',
            claseIcono: 'reg_renis',
            nombre: 'Investigadores',
            nombreCompleto: 'Registro Nacional de Investigaciones en Salud',
            color: '#819e44'
        },
        snvs: {
            registro: 'snvs',
            id: 3,
            sigla: 'SNVS',
            claseColor: 'reg_snvs',
            claseIcono: 'reg_snvs',
            nombre: '',
            nombreCompleto: 'Sistema Nacional de Vigilancia de la Salud',
            color: '#0ca6b2'
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

    public static homes = {
        /*
            modelo - - - - - - - - - - - - - - 
            s: titulo (titulo)
            s: subtitulo (subtitulo)
            s[]: texto intro (textoIntro)
            b[]:configuracion visual de herramientas que muestra (componentesMuestra)
                0   buscador
                1   paneles numerales
                2   BOTONERA LATERAL
                3   NOTICIAS
                4   paneles de imagenes
            a[]:informacion herramientas que muestra (componentesInfo)
                0   buscador
                1   paneles numerales
                2   BOTONERA LATERAL
                3   NOTICIAS
                4   paneles de imagenes
        */
        nomivac: {
            titulo: 'Registro Federal de Vacunación Nominalizado',
            subtitulo: null,
            textoIntro: null,
            componentesMuestra: [true, false, true, true, true],
            componentesInfo: [null, null, null, null, [1, 3]]
        },
        paierc: {
            titulo: 'Programa de Abordaje Integral de la Enfermedad Renal Crónica',
            subtitulo: null,
            textoIntro: ['TI: Programa de Abordaje Integral de la Enfermedad Renal Crónica', 'TI1: Programa de Abordaje Integral de la Enfermedad Renal Crónica', 'TI2: Programa de Abordaje Integral de la Enfermedad Renal Crónica'],
            componentesMuestra: [true, false, true, true, true],
            componentesInfo: ['el null', null, 22, null, [1, 2, 3]]
        },
        pfis: {
            titulo: 'Programa Federal Incluir Salud (PFIS)',
            subtitulo: 'el sub',
            textoIntro: ['TI: Programa de Abordaje Integral de la Enfermedad Renal Crónica', 'TI1: Programa de Abordaje Integral de la Enfermedad Renal Crónica', 'TI2: Programa de Abordaje Integral de la Enfermedad Renal Crónica'],
            componentesMuestra: [true, false, true, true]
        },
        refeps: {
            titulo: 'Red Federal de Registros de Profesionales de la Salud',
            subtitulo: 'REFEPS',
            textoIntro: null,
            componentesMuestra: [true, true, true, true]
        },
        refar: {
            titulo: 'Registro Federal de Farmacias',
            subtitulo: 'REFAR',
            textoIntro: 'Las farmacias vio!.',
            componentesMuestra: [true, true, true, true]
        },
        refes: {
            titulo: 'Registro Federal de Establecimientos de Salud',
            subtitulo: 'REFES',
            textoIntro: 'Aquí usted puede consultar o actualizar información del Registro de Establecimientos de Salud en el ámbito de su jurisdicción. Utilice el buscador para seleccionar él o los establecimientos que desea consultar o modificar y presione el botón buscar. Si desea registrar un nuevo establecimiento seleccione el botón Agregar. Para mayor información consulte la Ayuda en línea o el Manual de Usuario.',
            componentesMuestra: [true, true, true, true]
        },
        renis: {
            titulo: 'El Renis',
            subtitulo: null,
            componentesMuestra: [false, true, false, false]
        },
        snvs: {
            titulo: 'El SNVS',
            subtitulo: null,
            componentesMuestra: [false, true, false, false, false]
        },
        svih: {
            titulo: 'El Sistema de Administración de Pacientes VIH',
            subtitulo: null,
            componentesMuestra: [false, true, false, false, false],
            componentesInfo: [null, null, null, null, null]
        }
    };

    

    public static panelesDeImagenes = {
        1: {
            titulo: 'Acerca de',
            subtitulo: null,
            icono: 'icon-bot_ico_ayudaenlinea',
            imagen: '_homes_acercade.png',
            color: '#3314cc'
        },
        2: {
            titulo: 'Documentación',
            subtitulo: null,
            icono: 'icon-bot_ico_cmdb_documentos',
            imagen: '_homes_biblioteca.png',
            color: '#cc4a14'
        },
        3: {
            titulo: 'Autoridades y Referentes',
            subtitulo: null,
            icono: 'icon-mod_autoridadesyreferentes',
            imagen: '_homes_referentes.png',
            color: '#3366ff'
        },
        4: {
            titulo: 'Red de establecimientos',
            subtitulo: null,
            icono: 'icon-reg_refes',
            imagen: '_homes_establecimientos.png',
            color: '#3e699c'
        },
        5: {
            titulo: 'Preguntas frecuentes',
            subtitulo: 'null',
            icono: 'icon-bot_ico_soporte_preguntasfrecuentes',
            imagen: '_homes_preguntasFrecuentes.png',
            color: '#ff9900'
        }
    };

    residenciasResidenciasExamenes = {
        registro: 'residencias',
        id: 2,
        sigla: 'Resides',
        clase: 'reg_residencias',
        nombre: 'Residencias',
        nombreCompleto: 'Sistema Nacional de Residencias del Equipo de Salud',
        color: '#3fa0d9'
    };

}
