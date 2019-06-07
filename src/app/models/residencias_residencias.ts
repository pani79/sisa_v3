export class ResidenciasResidenciasModel {
    constructor(
        /* 
            RES_PREINSCRIPCION;
            Las columnas son:

            ID_RES_PREINSCRIPCION,  --------    id_res_preinscripcion
            NOMBRE,                  --------    nombre
            DESCRIPCION,             --------    descripcion
            HABILITADO, 
            COMENTARIO,                --------    comentario
            ID_PADRE, 
            EXAMEN_UNICO, 
            FECHA_REGISTRO, 
            FECHA_MODIFICACION, 
            ID_USUARIO_REGISTRO, 
            ID_USUARIO_MODIFICACION, 
            ID_INTERFAZ_REGISTRO, 
            ID_INTERFAZ_MODIFICACION, 
            ANIOS_TITULO, 
            ID_TIPO_CONCURSO,            --------    id_tipoConcurso
            ID_SUB_TIPO_CONCURSO,        --------    id_subTipoConcurso
            FECHA_MODIFICACION_GRAL, 
            ID_USUARIO_MODIFICACION_GRAL, 
            ID_INTERFAZ_MODIFICACION_GRAL, 
            MODO_ORDEN_MERITO, 
            ID_RES_PREINSCRIPCION_ADJ_COMO, 
            RES_PREINSCRIPCION, 
            FECHA_HABILITADO, 
            CALCULA_MERITO, 
            MODIFICA_NOTA, 
            MULTIPLES_INCRIPCIONES
         */
        public id_res_preinscripcion: string,
        public nombre: string,
        public descripcion: string,
        public comentario: string,
        
        public id_tipoConcurso: string,
        public id_subTipoConcurso: string
    ) {}
}
