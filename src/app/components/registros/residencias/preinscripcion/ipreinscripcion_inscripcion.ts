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
    
    _e_nacionalidad: number;
    _e_nacimientoFecha: number;
    _e_nacimientoPais: number;
    _e_nacimientoProvincia: number;
    _e_email: string;
    _e_domicilioProvincia: number;
    _e_domicilioLocalidad: number;
    _e_domicilioDomicilio: number;
    _e_domicilioNro: number;
    _e_domicilioPiso: number;
    _e_domicilioDepto: number;
    _e_domicilioCP: number;
    _e_domicilioTelATipo: number;
    _e_domicilioTelANro: number;
    _e_domicilioTelBTipo: number;
    _e_domicilioTelBNro: number;
    _e_domicilioTelCTipo: number;
    _e_domicilioTelCNro: number;
    _e_domicilioTelDTipo: number;
    _e_domicilioTelDNro: number;
    _e_profesionTitulo: number;
    _e_profesionTipoMatricula: number;
    _e_profesionAnoIngreso: number;
    _e_profesionPromedio: number;
    _e_profesionTituloEnTramite: boolean;
}
