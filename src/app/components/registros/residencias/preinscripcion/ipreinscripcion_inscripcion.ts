export interface Ipreinscripcion_inscripcion{
    _a_concursaId: number;
    _a_concursaTipoProvincia: boolean;
    _a_concursaProvincia: number;
    _a_concursaInstitucion: number;
    _a_concursaEspecialidad: number;
    
    _b_concursotipo: number;
    _b_concursosubtipo: number;

    _c_concurso: string;
    
    _d_razoneseleccion: number[];
    _d_dondeseencontrara: number;
    _d_ambitodesarrollo: number;
    
    _e_nombre: number;
    _e_apellido: number;
    _e_numerodocumento: number;
    _e_sexo: number;
    _e_estadocivil: number;
    _e_hijos: number;
}
