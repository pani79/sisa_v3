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
        public _e_hijos: number
    ) {}
}
