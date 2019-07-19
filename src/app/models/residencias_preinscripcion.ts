export class ResidenciasPreinscripcionModel {
    constructor(
        /*
            public nombre: string,
            public apellido: string,
            public email: string
         */
        public _a_concursaId: number,
        public _a_concursaTipo: boolean,
        public _a_concursaProvincia: number,
        public _a_concursaInstitucion: number,
        public _a_concursaEspecialidad: number,

        public _b_concursotipo: number,
        public _b_concursosubtipo: number,

        public _c_concurso: number,

        public _d_razoneseleccion: number[],
        public _d_dondeseencontrara: number,
        public _d_ambitodesarrollo: number,

        public _e_nombre: string,
        public _e_apellido: string,
        public _e_numerodocumento: number,
        public _e_sexo: number,
        public _e_estadocivil: number,
        public _e_hijos: number,
    
        public _e_nacionalidad: number,
        public _e_nacimientoFecha: number,
        public _e_nacimientoPais: number,
        public _e_nacimientoProvincia: number,
        public _e_email: string,
        public _e_domicilioProvincia: number,
        public _e_domicilioLocalidad: number,
        public _e_domicilioDomicilio: number,
        public _e_domicilioNro: number,
        public _e_domicilioPiso: number,
        public _e_domicilioDepto: number,
        public _e_domicilioCP: number,
        public _e_domicilioTelATipo: number,
        public _e_domicilioTelANro: number,
        public _e_domicilioTelBTipo: number,
        public _e_domicilioTelBNro: number,
        public _e_domicilioTelCTipo: number,
        public _e_domicilioTelCNro: number,
        public _e_domicilioTelDTipo: number,
        public _e_domicilioTelDNro: number,
        public _e_profesionTitulo: number,
        public _e_profesionTipoMatricula: number,
        public _e_profesionAnoIngreso: number,
        public _e_profesionPromedio: number,
        public _e_profesionTituloEnTramite: boolean

    ) {}
}
