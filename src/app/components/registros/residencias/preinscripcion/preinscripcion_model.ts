export class PreinscripcionModel {
    constructor(
        /* 
            public nombre: string,
            public apellido: string,
            public email: string
         */
        public _a_concursaId: number,
        public _a_concursaTipoProvincia: boolean,
        public _a_concursaProvincia: number,
        public _a_concursaInstitucion: number,
        public _a_concursaEspecialidad: number,
        
        public _b_concursotipo: number,
        public _b_concursosubtipo: number
    ) {}
}
